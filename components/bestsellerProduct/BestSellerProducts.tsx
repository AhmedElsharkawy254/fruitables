import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'; // Import Next.js Image for optimized images
import Garps from '../public/Garps.jpg';
import panana from '../public/panana.jpg';
import raspb from '../public/raspb.jpg';
import orange from '../public/orange.jpg';
import { StaticImageData } from 'next/image'; // Import StaticImageData from Next.js

import apri from '../public/apri.jpg';
import styles from '../bestsellerProduct/Bestseller.module.css'
import {  FaShoppingBag,  } from 'react-icons/fa';
import NavComponent from '../Nav/NavBar'; 

// Define a product interface
interface Product {
  id: number;
  name: string;
  price: string;
  imgSrc: StaticImageData;
  rating: number;
}

// Sample product data
const products: Product[] = [
  { id: 1, name: 'Organic Garps', price: '$3.12', imgSrc: Garps, rating: 4 },
  { id: 2, name: 'Organic panana', price: '$3.12', imgSrc: raspb, rating: 5 },
  { id: 3, name: 'Organic raspb', price: '$3.12', imgSrc: raspb, rating: 4 },
  { id: 4, name: 'Organic orange', price: '$3.12', imgSrc: orange, rating: 5 },
  { id: 5, name: 'Organic Garps', price: '$3.12', imgSrc: Garps, rating: 4 },
  { id: 6, name: 'Organic raspb', price: '$3.12', imgSrc: raspb, rating: 4 },
];

const products2: Product[] = [
  { id: 7, name: 'Organic panana', price: '$3.12', imgSrc: panana, rating: 5 },
  { id: 8, name: 'Organic Garps', price: '$3.12', imgSrc: Garps, rating: 5 },
  { id: 9, name: 'Organic apri', price: '$3.12', imgSrc: apri, rating: 5 },
  { id: 10, name: 'Organic raspb', price: '$3.12', imgSrc: raspb, rating: 5 },
];

// Star rating component
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="d-flex my-3">
      {[...Array(5)].map((_, i) => (
        <i key={i} className={`fas fa-star ${i < rating ? 'text-primary' : ''}`}></i>
      ))}
    </div>
  );
};
interface Bestseller {
    addToCart: () => void; // Add a prop to pass the function
}
  
interface NavProps {
    cartCount: number;  // Add cartCount as a prop

}  
// BestSellerProducts component
const BestSellerProducts: React.FC<Bestseller & NavProps> =  ({addToCart ,cartCount})  => {
    return (
        <>
        <NavComponent cartCount={cartCount}/>
        <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '700px' }}>
          <h1 className={`display-4 ${styles.h1}`}>Bestseller Products</h1>
          <p>
            Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
            reasonable.
          </p>
        </div>
        {/* First row of cards */}
        <div className="row g-4">
          {products.map(product => (
            <div className="col-lg-6 col-xl-4" key={product.id}>
              <div className="p-4 rounded bg-light">
                <div className="row align-items-center">
                  <div className={`col-6 ${styles.cont1}`}>
                    <Image
                      src={product.imgSrc}
                      alt={product.name}
                      width={150}
                      height={150}
                      className="img-fluid rounded-circle w-100"
                    />
                  </div>
                  <div className="col-6">
                    <a href="#" className="h5">
                      {product.name}
                    </a>
                    <StarRating rating={product.rating} />
                    <h4 className="mb-3">{product.price}</h4>
                    <a onClick={addToCart} className={`btn  rounded-pill px-3  ${styles.butt}`}>
                    <FaShoppingBag className={`${styles.navIcon} fa-2x`} />
                    <i className="fa fa-shopping-bag me-2 text-primary" ></i> Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>

          {/* Second row of cards */}
          <div className={`row g-4 ${styles.cont} `} style={{margin:'0px 50px'}}>
          {products2.map(product2 => (
            <div className="col-md-6 col-lg-4 col-xl-3"  key={product2.id}>
              <div className="text-center">
              <Image
                      src={product2.imgSrc}
                      alt={product2.name}
                      width={300}
                      height={300}
                      className="img-fluid w-100 rounded-top"
                    />
 
                <div className="py-4">
                  <a href="#" className="h5">{product2.name}</a>
                  <div className="d-flex my-3 justify-content-center">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`fas fa-star ${i < product2.rating ? 'text-primary' : ''}`}></i>
                    ))}
                  </div>
                  <h4 className="mb-3">{product2.price}</h4>
                  <a onClick={addToCart} className={`btn border border-secondary rounded-pill px-3 text-primary ${styles.butt}`}>
                  <FaShoppingBag className={`${styles.navIcon} fa-2x`} />
                <i className="" ></i> Add to cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
        </>
    );
};

export default BestSellerProducts;
