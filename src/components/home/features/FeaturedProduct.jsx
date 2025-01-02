import React, { useState, useEffect } from 'react';
import './FeaturedProduct.css';
import bookCover1 from '../../../assets/1_slidebar.jpeg';
import bookCover2 from '../../../assets/2_sidebar.jpeg';
import bookCover3 from '../../../assets/3_sidebar.jpg';
import bookCover6 from '../../../assets/preview1.png';

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        { src: bookCover1, title: "Search the books you Like Effortlessly", description: "" },
        { src: bookCover2, title: "Books You Love, Just a Click Away", description: "" },
        { src: bookCover3, title: "Find Your Favorites by Title or Author", description: "" },
        { src: bookCover6 },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="slider-container">
            <button className="prev-btn" onClick={prevSlide}>❮</button>
            <div className="image-slider">
                {images.map((img, index) => (
                    <div  
                        key={index}
                        className={`slide ${index === currentIndex ? 'active' : ''}`}
                        style={{ display: index === currentIndex ? 'block' : 'none' }}
                    >
                        
                        <img src={img.src} alt={`Slide ${index}`} className="slider-image" />
                        {index < 3 && (
                            <div className="text-overlay">
                                <h2>{img.title}</h2>
                                {img.description && <p>{img.description}</p>}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <button className="next-btn" onClick={nextSlide}>❯</button>
        </div>
    );
};

export default ImageSlider;
