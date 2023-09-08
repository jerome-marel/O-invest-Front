import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const slides = [
  {
    title: "Avis 1",
    content: "Ceci est le premier avis de notre client.",
  },
  {
    title: "Avis 2",
    content: "Ceci est le deuxième avis de notre client.",
  },
  {
    title: "Avis 3",
    content: "Ceci est le troisième avis de notre client.",
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = slides[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="mx-auto p-4 flex gap-10">
      <button
          className="text-white text-4xl hover:bg-blue-600"
          onClick={prevSlide}
        >
          <IoIosArrowBack size={32} />
        </button>
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-2xl font-semibold">{currentSlide.title}</h2>
        <p className="mt-2">{currentSlide.content}</p>
      </div>
      <div className="mt-4 flex justify-between">
        
        <button
          className="text-white text-4xl hover:bg-blue-600"
          onClick={nextSlide}
        >
          <IoIosArrowForward size={32} />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
