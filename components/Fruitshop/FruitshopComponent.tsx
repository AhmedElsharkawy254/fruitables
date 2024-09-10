import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Garps from '../public/Garps.jpg';
import panana from '../public/panana.jpg';
import raspb from '../public/raspb.jpg';
import orange from '../public/orange.jpg';
//import veg1 from '../public/veg1.jpg';
import Chicken from '../public/checken.jpg';
import Beef from '../public/beef.png';
import pride from '../public/bride.jpg';
import NavComponent from '../Nav/NavBar'; 
import styles from './FruitshopComponent.module.css';
import { FaShoppingBag } from 'react-icons/fa';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  imgSrc: any;
}

interface FruitshopProps {
  addToCart: () => void;
  cartCount: number;
  searchTerm: string; // Add searchTerm prop
}

const products: Product[] = [
  { id: 1, name: 'Grapes', category: 'Fruits', price: '$4.99 / kg', imgSrc: Garps },
  { id: 2, name: 'Banana', category: 'Fruits', price: '$4.99 / kg', imgSrc: panana },
  { id: 3, name: 'Raspberries', category: 'Fruits', price: '$4.99 / kg', imgSrc: raspb },
  { id: 4, name: 'Orange', category: 'Fruits', price: '$2.99 / kg', imgSrc: orange },
  { id: 5, name: 'Broccoli', category: 'Vegetables', price: '$3.49 / kg', imgSrc: Garps },
  { id: 6, name: 'Chicken', category: 'Meat', price: '$6.99 / kg', imgSrc: Chicken },
  { id: 7, name: 'Beef', category: 'Meat', price: '$12.99 / kg', imgSrc: Beef },
  { id: 8, name: 'Bread', category: 'Bread', price: '$1.99', imgSrc: pride },
];

const FruitshopComponent: React.FC<FruitshopProps> = ({ addToCart, cartCount, searchTerm }) => {
  const [activeTab, setActiveTab] = React.useState<string>('All');

  // Filter products based on the selected tab and search term
  const filteredProducts = products
    .filter(product => 
      (activeTab === 'All' || product.category === activeTab) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <>
      <NavComponent cartCount={cartCount} onSearch={() => {}} /> {/* Pass onSearch function if needed */}
      <div className="container-fluid py-5" style={{ maxWidth: '1200px' }}>
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-lg-4 text-start">
              <h1>Organic Products</h1>
            </div>
            <div className="col-lg-8 text-end">
              <ul className="nav nav-pills d-inline-flex text-center mb-5">
                <li className="nav-item">
                  <a
                    className={`d-flex m-2 py-2 rounded-pill ${activeTab === 'All' ? 'active' : ''}`}
                    onClick={() => setActiveTab('All')}
                    style={{ cursor: 'pointer', textDecoration: 'none', color: activeTab === 'All' ? 'white' : 'black', backgroundColor: activeTab === 'All' ? '#ffb524' : 'lightgray' }}
                  >
                    <span className="text-dark" style={{ width: '120px' }}>All Products</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`d-flex m-2 py-2 rounded-pill ${activeTab === 'Vegetables' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Vegetables')}
                    style={{ cursor: 'pointer', textDecoration: 'none', color: activeTab === 'Vegetables' ? 'white' : 'black', backgroundColor: activeTab === 'Vegetables' ? '#ffb524' : 'lightgray' }}
                  >
                    <span className="text-dark" style={{ width: '120px' }}>Vegetables</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`d-flex m-2 py-2 rounded-pill ${activeTab === 'Fruits' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Fruits')}
                    style={{ cursor: 'pointer', textDecoration: 'none', color: activeTab === 'Fruits' ? 'white' : 'black', backgroundColor: activeTab === 'Fruits' ? '#ffb524' : 'lightgray' }}
                  >
                    <span className="text-dark" style={{ width: '120px' }}>Fruits</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`d-flex m-2 py-2 rounded-pill ${activeTab === 'Bread' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Bread')}
                    style={{ cursor: 'pointer', textDecoration: 'none', color: activeTab === 'Bread' ? 'white' : 'black', backgroundColor: activeTab === 'Bread' ? '#ffb524' : 'lightgray' }}
                  >
                    <span className="text-dark" style={{ width: '120px' }}>Bread</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`d-flex m-2 py-2 rounded-pill ${activeTab === 'Meat' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Meat')}
                    style={{ cursor: 'pointer', textDecoration: 'none', color: activeTab === 'Meat' ? 'white' : 'black', backgroundColor: activeTab === 'Meat' ? '#ffb524' : 'lightgray' }}
                  >
                    <span className="text-dark" style={{ width: '120px' }}>Meat</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row g-4">
            {filteredProducts.map(product => (
              <div className="col-md-6 col-lg-4 col-xl-3" key={product.id}>
                <div className={`rounded position-relative fruite-item ${styles.card}`} style={{ border: '0.5px solid #ffb524' }}>
                  <div className="fruite-img">
                    <Image
                      src={product.imgSrc}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="img-fluid w-100 rounded-top"
                    />
                  </div>
                  <div className={`px-3 py-1 rounded position-absolute ${styles.Lab}`}>
                    {product.category}
                  </div>
                  <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                    <h4>{product.name}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                      <p className="text-dark fs-5 fw-bold mb-0">{product.price}</p>
                      <a onClick={addToCart} className={`btn border rounded-pill px-3 ${styles.btn}`} style={{ cursor: 'pointer' }}>
                        <FaShoppingBag className={`${styles.navIcon} fa-2x`} />
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>add cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FruitshopComponent;
