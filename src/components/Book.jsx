import React, { forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";
import {imageUrl} from "../imageUrl"

const Page = forwardRef(({ children }, ref) => {
  return (
    <div
      ref={ref}
      className="w-[500px] h-[700px] bg-white shadow-lg flex items-center justify-center p-2 rounded"
    >
      {children}
    </div>
  );
});

const Book = () => {
  // Array of PDF page images (you'll need to import these into your project)
  const pdfPages = [
    imageUrl.page1,
    imageUrl.page2,
    imageUrl.page3,
    imageUrl.page4,
    imageUrl.page5,
    imageUrl.page6,
    imageUrl.page6,
    imageUrl.page7,
    imageUrl.page8
  ];

  return (
    <div className="learn-tab-container flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Financial Crisis Overview</h1>

      <HTMLFlipBook
        width={500}
        height={700}
        className="shadow-2xl"
        showCover={true}
        maxShadowOpacity={0.5}
        mobileScrollSupport={true}
      >
        {pdfPages.map((pageUrl, index) => (
          <Page key={index}>
            <img 
              src={pageUrl} 
              alt={`Page ${index + 1}`}
              className="w-full h-full object-contain"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </Page>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default Book;

