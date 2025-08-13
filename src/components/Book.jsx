import React, { forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";

const Page = forwardRef(({ children }, ref) => {
  return (
    <div
      ref={ref}
      className="w-[500px] h-[700px] bg-amber-100 shadow-lg flex items-center justify-center p-8 text-lg font-medium rounded"
    >
      {children}
    </div>
  );
});

const Book = () => {
  return (
    <div className="learn-tab-container flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Flip Book</h1>

      <HTMLFlipBook
        width={500}
        height={700}
        className="shadow-2xl"
        showCover={true}
        maxShadowOpacity={0.5}
        mobileScrollSupport={true}
      >
        <Page>Welcome to our interactive book experience.</Page>
        <Page>Here’s some engaging content for you.</Page>
        <Page>Flip through like a real book!</Page>
        <Page>Each page can have text, images, or PDFs.</Page>
        <Page>Thanks for reading!</Page>
      </HTMLFlipBook>
    </div>
  );
};

export default Book;
