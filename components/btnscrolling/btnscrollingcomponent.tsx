"use client";

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowUp } from 'react-icons/fa'; // FontAwesome arrow icon

const BackToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button when page is scrolled down 100px
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Scroll to top of the page when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {showButton && (
        <button
          className="btn  border-3  rounded-circle"
                  style={{
              width: '60px',
              height: '60px',
            position: 'fixed',
            bottom: '20px',
            left: '1400px',
              zIndex: 1000,
            backgroundColor:'orange',
          }}
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
