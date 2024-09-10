import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import { FaCarSide, FaUserShield, FaExchangeAlt, FaPhoneAlt } from 'react-icons/fa'; // Import FontAwesome icons
import styles from './FeatureSelection.module.css'; // CSS module for additional styling

const FeatureSelection: React.FC = () => {
  return (
    <div className="container-fluid featurs py-5">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className={`featurs-item text-center rounded bg-light p-4 ${styles.featursitem}`}>
              <div className={`featurs-icon btn-square rounded-circle mb-5 mx-auto ${styles.featursicon}`}>
                <FaCarSide className={`fa-3x text-white ${styles.iconsize}`} />
              </div>
              <div className="featurs-content text-center">
                <h5>Free Shipping</h5>
                <p className="mb-0">Free on order over $300</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className={`featurs-item text-center rounded bg-light p-4 ${styles.featursitem}`}>
              <div className={`featurs-icon btn-square rounded-circle mb-5 mx-auto ${styles.featursicon}`}>
                <FaUserShield className={`fa-3x text-white ${styles.iconsize}`} />
              </div>
              <div className="featurs-content text-center">
                <h5>Security Payment</h5>
                <p className="mb-0">100% security payment</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className={`featurs-item text-center rounded bg-light p-4 ${styles.featursitem}`}>
              <div className={`featurs-icon btn-square rounded-circle mb-5 mx-auto ${styles.featursicon}`}>
                <FaExchangeAlt className={`fa-3x text-white ${styles.iconsize}`} />
              </div>
              <div className="featurs-content text-center">
                <h5>30 Day Return</h5>
                <p className="mb-0">30 day money guarantee</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className={`featurs-item text-center rounded bg-light p-4 ${styles.featursitem}`}>
              <div className={`featurs-icon btn-square rounded-circle mb-5 mx-auto ${styles.featursicon}`}>
                <FaPhoneAlt className={`fa-3x text-white ${styles.iconsize}`} />
              </div>
              <div className="featurs-content text-center">
                <h5>24/7 Support</h5>
                <p className="mb-0">Support every time fast</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSelection;
