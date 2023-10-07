import React, { useState } from "react";

const slides = [
  { id: 1, image: "./public/images/brosur1.jpeg" },
  { id: 2, image: "./public/images/brosur2.jpeg" },
  { id: 3, image: "./public/images/brosur3.jpeg" },
];

const Body2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="flex flex-col items-center bg-sky-100">
      <div className="w-full max-w-lg  rounded-lg p-4 shadow-md">
        <div className="relative">
          <img
            src={slides[currentSlide].image}
            alt={`Slide ${slides[currentSlide].id}`}
            className="w-full rounded-lg"
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full ${
                    index === currentSlide
                      ? "bg-blue-500"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body2;
