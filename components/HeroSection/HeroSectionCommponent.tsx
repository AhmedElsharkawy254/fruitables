"use client";
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import img1 from '../public/hero-img-1.png';
import img2 from '../public/hero-img-2.jpg';

interface HeroSectionProps {
  onSearchSubmit: (searchTerm: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSearchSubmit }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const carouselItems = [
    { imgSrc: img1, label: 'Fruits' },
    { imgSrc: img2, label: 'Vegetables' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselItems.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit(searchTerm);
  };

  return (
    <div className="container-fluid py-5 mb-5" style={{ marginTop: '140px', background: "linear-gradient(rgba(248, 223, 173, 0.9), rgba(248, 223, 173, 0.9)), url('../public/hero-img-2.jpg')", backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '500px' }}>
      <div className="row">
        <div className="col-md-12 col-lg-7" style={{ marginLeft: '60px', marginTop: '40px' }}>
          <h4 className="mb-3" style={{ color: '#ffb524', fontWeight: 'bold' }}>100% Organic Foods</h4>
          <h1 className="mb-5 display-3" style={{ color: '#81c408', fontWeight: 'bold' }}>
            Organic Veggies & <br />
            Fruits Foods
          </h1>
          <form className="position-relative mx-auto" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control w-75 py-3 px-4 rounded-pill"
              placeholder="Search"
              style={{ border: '2px solid #ffb524' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="btn border-2 py-3 px-4 position-absolute rounded-pill text-white"
              style={{ backgroundColor: '#81c408', border: '2px solid #ffb524', top: '0', right: '25%' }}
            >
              Submit Now
            </button>
          </form>
        </div>

        {/* Carousel Section */}
        <div className="col-md-12 col-lg-5 position-relative" style={{ left: '850px', top: '-310px' }}>
          <div className="position-relative">
            <div className="carousel-inner">
              {carouselItems.map((item, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                  style={{ display: index === activeIndex ? 'block' : 'none' }}
                >
                  <Image
                    src={item.imgSrc}
                    alt={item.label}
                    className="img-fluid"
                    style={{ width: '560px', height: '327px', backgroundColor: '#ffb524', borderRadius: '20px' }}
                  />
                  <a
                    href="#"
                    className="btn px-4 py-2 text-white rounded"
                    style={{ fontWeight: 'bold', backgroundColor: 'rgba(255, 181, 36, 0.5)', position: 'relative', top: '-190px', left: '220px', width: '150px', height: '50px', cursor: 'pointer' }}
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              onClick={handlePrev}
              style={{ backgroundColor: '#81c408', borderRadius: '50px', color: 'white', width: '70px', height: '70px', margin: '130px 20px', cursor: 'pointer' }}
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              onClick={handleNext}
              style={{ backgroundColor: '#81c408', borderRadius: '50px', color: 'white', width: '70px', height: '70px', margin: '130px 50px', cursor: 'pointer' }}
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
