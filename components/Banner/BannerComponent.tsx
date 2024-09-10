import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import bannerImg from '../public/apple2.png';

import NavComponent from '../Nav/NavBar';
import styles from '../Banner/Banner.module.css'
interface BannerProps {
  addToCart: () => void; // Add a prop to pass the function
}
interface NavProps {
  cartCount: number;  // Add cartCount as a prop
}

const BannerComponent: React.FC<BannerProps & NavProps> = ({ addToCart ,cartCount}) => {
  return (
    <>
      <NavComponent cartCount={cartCount} />
    <div className={`container-fluid banner my-5 ${styles.Bannercolor}`}>
      <div className="container py-5">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="py-4">
              <h1 className="display-3 text-white">Fresh Exotic Fruits</h1>
              <p className="fw-normal display-3 text-dark mb-4">in Our Store</p>
              <p className="mb-4 text-dark">
                The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words, etc.
              </p>
              <button className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5" onClick={addToCart}>
                BUY
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative">
              <Image src={bannerImg} alt="Banner" className="img-fluid w-100 rounded" />
              <div className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute" style={{ width: '140px', height: '140px', top: '0', left: '0' }}>
                <h1 style={{ fontSize: '100px' }}>1</h1>
                <div className="d-flex flex-column">
                  <span className="h2 mb-0">50$</span>
                  <span className="h4 text-muted mb-0">kg</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
 
      );
};

export default BannerComponent;
