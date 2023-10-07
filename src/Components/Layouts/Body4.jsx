import React, { useState, useEffect } from "react";

const Body4 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/maba.jpg",
    "/images/brosur1.jpeg",
    "/images/brosur2.jpeg",
    "/images/brosur3.jpeg",
    "/images/maba.jpg",
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-sky-200 py-6">
      <div className="flex justify-center mb-10">
        <h1 className="text-blue-800 text-4xl font-bold">PENGHARGAAN</h1>
      </div>

      <div className="flex space-x-4 overflow-hidden justify-center relative">
        <button
          onClick={nextImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-sky-500 text-white py-3 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="relative w-80 h-72 overflow-hidden animate-slide-left">
          <img
            src={images[currentImageIndex]}
            alt="Gambar Header"
            className="w-full h-full"
          />
        </div>

        <button
          onClick={nextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-sky-500 text-white py-3 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Body4;
