

import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, Download, Share2, Maximize, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';
import '../css/LearnTab.css';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const LearnTabWithPDF = ({ pdfUrl = null }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [rotation, setRotation] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () => {
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);
  };

  const goToNextPage = () => {
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);
  };

  const zoomIn = () => {
    setScale(scale + 0.2);
  };

  const zoomOut = () => {
    setScale(scale - 0.2 <= 0.2 ? 0.2 : scale - 0.2);
  };

  const rotate = () => {
    setRotation(rotation + 90);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const downloadPDF = () => {
    if (pdfUrl) {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'financial-crisis-overview.pdf';
      link.click();
    }
  };

  const sharePDF = async () => {
    if (navigator.share && pdfUrl) {
      try {
        await navigator.share({
          title: 'Overview of Financial Crisis',
          text: 'Learn about what causes financial crisis and how to avoid it.',
          url: pdfUrl,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    }
  };

  const popularContent = [
    {
      id: 1,
      title: 'Activities',
      description: 'Handling Financial Crisis\nDevelop an understanding of appropriate actions to be taken in a financial crisis situation.',
      icon: '🎯',
      buttonText: "LET'S DO",
      color: 'from-green-600 to-green-800',
      onClick: () => console.log('Navigate to activities')
    },
    {
      id: 2,
      title: 'Videos',
      description: 'Financial Crisis: Triggers and Ways to Recover From It\nDevelop an understanding of triggers that can lead to financial crisis and ways to improve the financial situation.',
      icon: '🎬',
      buttonText: "LET'S WATCH",
      color: 'from-orange-600 to-orange-800',
      onClick: () => console.log('Navigate to videos')
    },
    {
      id: 3,
      title: 'Articles',
      description: 'Overview of Financial Crisis\nLearn about what causes financial crisis and how to avoid it.',
      icon: '📚',
      buttonText: "LET'S READ",
      color: 'from-blue-600 to-blue-800',
      onClick: () => console.log('Navigate to articles')
    }
  ];

  return (
    <div className="learn-tab-container">
      {/* Header Section */}
      <div className="header-section">
        <div className="tab-navigation">
          <button className="tab-button active">LEARN</button>
          <button className="tab-button">WATCH</button>
          <button className="tab-button">PLAY</button>
        </div>
        
        <div className="content-header">
          <h1 className="main-title">Overview of Financial Crisis</h1>
          <h2 className="subtitle">Learn about what causes financial crisis and how to avoid it.</h2>
          <p className="description">
            This article summarizes the major causes of financial crisis and enumerates steps to come out in the face of such a crisis. 
            It also points out ways to avoid financial crisis and includes practical tips and suggestions.
          </p>
        </div>
      </div>

      {/* PDF Viewer Section */}
      <div className="pdf-viewer-section">
        <div className={`pdf-container ${isFullscreen ? 'fullscreen' : ''}`}>
          <div className="pdf-viewer">
            {pdfUrl ? (
              <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                  <div className="pdf-loading">
                    <div className="loading-spinner"></div>
                    <p>Loading PDF...</p>
                  </div>
                }
                error={
                  <div className="pdf-error">
                    <p>Failed to load PDF. Please check the file URL.</p>
                  </div>
                }
              >
                <Page
                  pageNumber={pageNumber}
                  scale={scale}
                  rotate={rotation}
                  loading={
                    <div className="page-loading">
                      <div className="loading-spinner"></div>
                    </div>
                  }
                />
              </Document>
            ) : (
              // Fallback content when no PDF is provided
              <div className="pdf-placeholder">
                <div className="pdf-content">
                  <div className="logo-section">
                    <div className="icai-logo">
                      <div className="logo-circle">
                        <span>ICAI</span>
                      </div>
                    </div>
                    <div className="institute-text">
                      <h3>The Institute of Chartered Accountants of India</h3>
                      <p>(Set up by an Act of Parliament)</p>
                    </div>
                  </div>
                  <div className="document-title">
                    <h2>Financial Tax Literacy</h2>
                    <p>An Awareness Initiative by ICAI</p>
                  </div>
                  <div className="placeholder-note">
                    <p>PDF viewer ready - provide pdfUrl prop to display actual PDF</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* PDF Controls */}
          <div className="pdf-controls">
            <div className="page-navigation">
              <button 
                onClick={goToPrevPage} 
                disabled={pageNumber <= 1}
                className="nav-button"
                title="Previous page"
              >
                <ChevronLeft size={16} />
              </button>
              
              <span className="page-indicator">
                {pageNumber}/{numPages || (pdfUrl ? '...' : '8')}
              </span>
              
              <button 
                onClick={goToNextPage} 
                disabled={pageNumber >= (numPages || 8)}
                className="nav-button"
                title="Next page"
              >
                <ChevronRight size={16} />
              </button>
            </div>
            
            <div className="viewer-controls">
              <button onClick={zoomOut} className="control-button" title="Zoom out">
                <ZoomOut size={16} />
              </button>
              
              <span className="zoom-level">{Math.round(scale * 100)}%</span>
              
              <button onClick={zoomIn} className="control-button" title="Zoom in">
                <ZoomIn size={16} />
              </button>
              
              <button onClick={rotate} className="control-button" title="Rotate">
                <RotateCw size={16} />
              </button>
              
              <button onClick={toggleFullscreen} className="control-button" title="Fullscreen">
                <Maximize size={16} />
              </button>
              
              <button onClick={downloadPDF} className="control-button" title="Download">
                <Download size={16} />
              </button>
              
              <button onClick={sharePDF} className="control-button" title="Share">
                <Share2 size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Content Section */}
      <div className="popular-content-section">
        <h2 className="section-title">POPULAR CONTENT</h2>
        <p className="section-subtitle">Read the most accessed and liked content by our visitors</p>
        
        <div className="content-cards">
          {popularContent.map((item) => (
            <div key={item.id} className={`content-card bg-gradient-to-br ${item.color}`}>
              <div className="card-icon">
                <span className="icon-placeholder">{item.icon}</span>
              </div>
              
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
              </div>
              
              <button className="card-button" onClick={item.onClick}>
                {item.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

      {isFullscreen && (
        <div className="fullscreen-overlay" onClick={toggleFullscreen}>
          <button className="close-fullscreen" onClick={toggleFullscreen}>
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default LearnTabWithPDF;

