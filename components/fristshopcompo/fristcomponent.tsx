// pages/shop.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '@/components/fristshopcompo/frist.module.css'
const FristShopcomponent = () => {
  return (
    <>
      <div className={`container-fluid page-header py-5 ${styles.bgimg}`}>
        <h1 className="text-center text-white display-6">Shop</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active text-white">Shop</li>
        </ol>
      </div>

    </>
  );
};

export default FristShopcomponent;
