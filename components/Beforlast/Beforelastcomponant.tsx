import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUsers, FaCheckCircle, FaCertificate, FaBox } from 'react-icons/fa'; // Importing Font Awesome icons
import styles from '../Beforlast/Befor.module.css';
const CountersComponent: React.FC = () => {
    return (
      <div className={`container py-5${styles.iconsize}`}>
    <div className="bg-light p-5 rounded">
      <div className="row g-4 justify-content-center">
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="counter bg-white rounded p-5 text-center">
            <FaUsers className={`mb-3 ${styles.iconsize}`} style={{ fontSize: '2rem' }} />
            <h4>Satisfied Customers</h4>
            <h1>1963</h1>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="counter bg-white rounded p-5 text-center">
            <FaCheckCircle className={` mb-3 ${styles.iconsize}`} style={{ fontSize: '2rem' }} />
            <h4>Quality of Service</h4>
            <h1>99%</h1>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="counter bg-white rounded p-5 text-center">
            <FaCertificate className={` mb-3 ${styles.iconsize}`} style={{ fontSize: '2rem' }} />
            <h4>Quality Certificates</h4>
            <h1>33</h1>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="counter bg-white rounded p-5 text-center">
            <FaBox className={` mb-3 ${styles.iconsize}`} style={{ fontSize: '2rem' }} />
            <h4>Available Products</h4>
            <h1>789</h1>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CountersComponent;
