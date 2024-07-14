import React, { useState, useEffect, useRef } from 'react';
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const Carousel = ({ images, autoplay = true, loop = true, autoplayDelay = 2000 }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const slideInterval = useRef(null);

    useEffect(() => {
        if (autoplay) {
            slideInterval.current = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, autoplayDelay);
            return () => clearInterval(slideInterval.current);
        }
    }, [autoplay, autoplayDelay, images.length]);

    const goToNextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative container mx-auto overflow-hidden rounded-xl h-64">
            <div className="relative flex transition-transform duration-1000" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className="w-full flex-shrink-0 object-cover"
                    />
                ))}
            </div>

            <MdNavigateBefore onClick={goToPrevSlide} className='absolute top-1/2 left-4 transform -translate-y-1/2 mx-2 text-5xl text-slate-200' />
            <MdNavigateNext onClick={goToNextSlide} className='absolute top-1/2 right-4 transform -translate-y-1/2 mx-2 text-5xl text-slate-200' />

            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {images.map((_, i) => (
                    <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all ${activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'}`}
                        onClick={() => setActiveIndex(i)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
