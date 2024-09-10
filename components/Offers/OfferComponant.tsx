// components/ServiceComponent.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'; // Next.js image optimization
import Veg from '../public/veg1.jpg'; // Import image objects
import Tasty from '../public/Tasty.jpg';
import Apple from '../public/freshapple.jpg'; // Make sure the extension is correct
import styles from './Offer.module.css'
const ServiceComponent: React.FC = () => {
  return (
    <div className="container-fluid service py-5">
      <div className="container py-5">
        <div className="row g-4 justify-content-center">
          <div className="col-md-6 col-lg-4">
            <a href="#">
              <div className="service-item bg-secondary rounded border border-secondary">
                <Image
                  src={Apple} // Use the imported object
                  alt="Fresh Apples"
                  width={500}
                  height={300}
                  className="img-fluid rounded-top w-100"
                />
                <div className={`px-4 rounded-bottom ${styles.under}`}>
                 
                </div>
              </div>
              <div className={`service-content  text-center p-4 rounded ${styles.inside}`}>
                    <h5 className="text-white">Fresh Apples</h5>
                    <h3 className="mb-0">20% OFF</h3>
                  </div>
            </a>
          </div>
{/*div 2 */}
          <div className="col-md-6 col-lg-4">
            <a className ='a' href="#">
              <div className="service-item bg-dark rounded border border-dark">
                <Image
                  src={Tasty} // Use the imported object
                  alt="Tasty Fruits"
                  width={500}
                  height={300}
                  className="img-fluid rounded-top w-100"
                />
                <div className={`px-4 rounded-bottom ${styles.undersec}`}>
                  
                </div>
            </div>
                          
                <div className={`service-content bg-light text-center p-4 rounded ${styles.above}`}>
                    <h5 >Tasty Fruits</h5>
                    <h3 >Free delivery</h3>
                </div>              
            </a>
          </div>

          <div className="col-md-6 col-lg-4">
            <a className ='a' href="#">
              <div className="service-item bg-primary rounded border border-primary">
                <Image
                  src={Veg} // Use the imported object
                  alt="Exotic Vegetable"
                  width={500}
                  height={300}
                  className="img-fluid rounded-top w-100"
                />
                <div className={`px-4 rounded-bottom ${styles.outside}`}>
                  
                </div>
                </div>
                          
                <div className={`service-content  text-center p-4 rounded ${styles.insidediv3}`}>
                    <h5 className="text-white">Exotic Vegetable</h5>
                    <h3 className="mb-0">Discount $30</h3>
                  </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
