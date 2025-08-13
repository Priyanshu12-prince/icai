import React, { forwardRef, useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { ChevronLeft, ChevronRight, Download, Save } from "lucide-react";
import { imageUrl } from "../imageUrl";

const Page = forwardRef(({ children }, ref) => {
  return (
    <div
      ref={ref}
      className="bg-white shadow-lg flex items-center justify-center p-2 rounded"
      style={{
        width: "100%",
        height: "100%",
        minHeight: "400px"
      }}
    >
      {children}
    </div>
  );
});

const Book = () => {
  const flipBookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 500, height: 700 });
  const [isLoading, setIsLoading] = useState(false);

  // Array of PDF page images
  const pdfPages = [
    imageUrl.page1,
    imageUrl.page2,
    imageUrl.page3,
    imageUrl.page4,
    imageUrl.page5,
    imageUrl.page6,
    imageUrl.page7,
    imageUrl.page8
  ];

  // Responsive dimensions based on screen size
  useEffect(() => {
    const updateDimensions = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      
      let width, height;
      
      if (screenWidth < 640) { // Mobile
        width = Math.min(screenWidth - 40, 300);
        height = Math.min(screenHeight - 200, 420);
      } else if (screenWidth < 1024) { // Tablet
        width = Math.min(screenWidth - 80, 400);
        height = Math.min(screenHeight - 200, 560);
      } else { // Desktop
        width = 500;
        height = 700;
      }
      
      setDimensions({ width, height });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    setTotalPages(pdfPages.length);
  }, [pdfPages]);

  // Navigation functions
  const goToPrevPage = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipPrev();
    }
  };

  const goToNextPage = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipNext();
    }
  };

  // Handle page flip events
  const onFlip = (e) => {
    setCurrentPage(e.data);
  };

  // Download as PDF function
  const downloadAsPDF = async () => {
    setIsLoading(true);
    try {
      // Using jsPDF and html2canvas for PDF generation
      const { jsPDF } = await import('jspdf');
      const html2canvas = (await import('html2canvas')).default;
      
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      
      for (let i = 0; i < pdfPages.length; i++) {
        if (i > 0) pdf.addPage();
        
        // Create a temporary image element
        const img = new Image();
        img.crossOrigin = 'anonymous';
        
        await new Promise((resolve, reject) => {
          img.onload = () => {
            // Calculate dimensions to fit the page
            const imgAspectRatio = img.width / img.height;
            const pageAspectRatio = pageWidth / pageHeight;
            
            let imgWidth, imgHeight, x, y;
            
            if (imgAspectRatio > pageAspectRatio) {
              imgWidth = pageWidth;
              imgHeight = pageWidth / imgAspectRatio;
              x = 0;
              y = (pageHeight - imgHeight) / 2;
            } else {
              imgHeight = pageHeight;
              imgWidth = pageHeight * imgAspectRatio;
              x = (pageWidth - imgWidth) / 2;
              y = 0;
            }
            
            pdf.addImage(img, 'PNG', x, y, imgWidth, imgHeight);
            resolve();
          };
          img.onerror = reject;
          img.src = pdfPages[i];
        });
      }
      
      pdf.save('Financial-Crisis-Overview.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Save current page as image
  const saveCurrentPage = () => {
    const currentPageUrl = pdfPages[currentPage];
    if (currentPageUrl) {
      const link = document.createElement('a');
      link.href = currentPageUrl;
      link.download = `page-${currentPage + 1}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="learn-tab-container flex flex-col items-center p-4 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-gray-800">
          Financial Crisis Overview
        </h1>
        <p className="text-sm md:text-base text-gray-600">
          Page {currentPage + 1} of {totalPages}
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <button
          onClick={downloadAsPDF}
          disabled={isLoading}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm md:text-base"
        >
          <Download size={16} />
          {isLoading ? 'Generating...' : 'Download PDF'}
        </button>
        
        <button
          onClick={saveCurrentPage}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm md:text-base"
        >
          <Save size={16} />
          Save Page
        </button>
      </div>

      {/* Flipbook Container */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 0}
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 md:p-3 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          aria-label="Previous page"
        >
          <ChevronLeft size={20} className="md:w-6 md:h-6" />
        </button>

        <button
          onClick={goToNextPage}
          disabled={currentPage >= totalPages - 1}
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 md:p-3 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          aria-label="Next page"
        >
          <ChevronRight size={20} className="md:w-6 md:h-6" />
        </button>

        {/* Flipbook */}
        <HTMLFlipBook
          ref={flipBookRef}
          width={dimensions.width}
          height={dimensions.height}
          className="shadow-2xl"
          showCover={true}
          maxShadowOpacity={0.5}
          mobileScrollSupport={true}
          onFlip={onFlip}
          onChangeOrientation={() => {
            // Handle orientation change
            setTimeout(() => {
              const updateDimensions = () => {
                const screenWidth = window.innerWidth;
                const screenHeight = window.innerHeight;
                
                let width, height;
                
                if (screenWidth < 640) {
                  width = Math.min(screenWidth - 40, 300);
                  height = Math.min(screenHeight - 200, 420);
                } else if (screenWidth < 1024) {
                  width = Math.min(screenWidth - 80, 400);
                  height = Math.min(screenHeight - 200, 560);
                } else {
                  width = 500;
                  height = 700;
                }
                
                setDimensions({ width, height });
              };
              updateDimensions();
            }, 100);
          }}
        >
          {pdfPages.map((pageUrl, index) => (
            <Page key={index}>
              <img 
                src={pageUrl} 
                alt={`Page ${index + 1}`}
                className="w-full h-full object-contain"
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '100%',
                  userSelect: 'none'
                }}
                loading="lazy"
                draggable={false}
              />
            </Page>
          ))}
        </HTMLFlipBook>
      </div>

      {/* Page Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {pdfPages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (flipBookRef.current) {
                flipBookRef.current.pageFlip().flip(index);
              }
            }}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
              index === currentPage 
                ? 'bg-blue-600' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>

      {/* Mobile Instructions */}
      <div className="mt-4 text-center text-xs md:text-sm text-gray-500 max-w-md">
        <p className="md:hidden">Swipe to flip pages • Tap arrows for navigation</p>
        <p className="hidden md:block">Click arrows or use keyboard arrow keys to navigate</p>
      </div>
    </div>
  );
};

export default Book;

