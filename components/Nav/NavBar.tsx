'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMapMarkerAlt, FaEnvelope, FaBars, FaSearch, FaShoppingBag, FaUser } from 'react-icons/fa';
import styles from './NavComponent.module.css';
import Link from 'next/link'; // Import Link for navigation
import dynamic from 'next/dynamic';

interface NavProps {
  cartCount: number;
  onSearch: (searchTerm: string) => void;
}

const NavComponent: React.FC<NavProps> = ({ cartCount, onSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = () => {
    onSearch(searchTerm);
  };

  return (
    <>
      <div className="container-fluid fixed-top" style={{ top: '0px' }}>
        <div className={`${styles.topbar} d-none d-lg-block`}>
          <div className="d-flex justify-content-between">
            <div className="top-info ps-2">
              <small className="me-3">
                <FaMapMarkerAlt className={`me-2 ${styles.icon}`} />
                <a href="#" className={styles.link}>123 Street, New York</a>
              </small>
              <small className="me-3">
                <FaEnvelope className={`me-2 ${styles.icon}`} />
                <a href="#" className={styles.link}>Email@Example.com</a>
              </small>
            </div>
            <div className="top-link pe-2">
              <a href="#" className={styles.link}>
                <small className="mx-2">Privacy Policy</small>/
              </a>
              <a href="#" className={styles.link}>
                <small className="mx-2">Terms of Use</small>/
              </a>
              <a href="#" className={styles.link}>
                <small className="ms-2">Sales and Refunds</small>
              </a>
            </div>
          </div>
        </div>
        <div className={`container px-0 ${styles.N}`}>
          <nav className="navbar navbar-light bg-white navbar-expand-xl">
            <Link href="/" className={`navbar-brand ${styles.brandText}`}>
              <h1 className={`${styles.brandText} display-6`}>Fruitables</h1>
            </Link>
            <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <FaBars className={styles.navIcon} />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-auto">
                <Link href="/" className={`nav-item nav-link ${styles.navLink}`}>Home</Link>
                <Link href="/shop" className={`nav-item nav-link ${styles.navLink}`}>Shop</Link>
                <Link href="/shop-detail" className={`nav-item nav-link ${styles.navLink}`}>Shop Detail</Link>
                <div className="nav-item dropdown">
                  <a href="#" className={`nav-link dropdown-toggle ${styles.navLink}`} data-bs-toggle="dropdown">
                    Pages
                  </a>
                  <div className="dropdown-menu m-0 bg-white rounded-0">
                    <a href="cart.html" className={`dropdown-item ${styles.dropdownItem}`}>Cart</a>
                    <a href="checkout.html" className={`dropdown-item ${styles.dropdownItem}`}>Checkout</a>
                    <a href="testimonial.html" className={`dropdown-item ${styles.dropdownItem}`}>Testimonial</a>
                    <a href="404.html" className={`dropdown-item ${styles.dropdownItem}`}>404 Page</a>
                  </div> 
                </div>
                <Link href="/contact" className={`nav-item nav-link ${styles.navLink}`}>Contact</Link>
              </div>
              <div className="d-flex m-3 me-0">
                <button className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal">
                  <FaSearch className={styles.navIcon} />
                </button>
                <a href="#" className="position-relative me-4 my-auto">
                  <FaShoppingBag className={`${styles.navIcon} fa-2x`} />
                  <span className="position-absolute bg-white rounded-circle d-flex align-items-center justify-content-center text-success px-1" style={{ top: '-5px', left: '15px', height: '20px', minWidth: '20px' }}>
                    {cartCount}
                  </span>
                </a>
                <a href="#" className="my-auto">
                  <FaUser className={`${styles.navIcon} fa-2x`} />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Search Modal */}
      <div className="modal fade" id="searchModal" tabIndex={-1} aria-labelledby="searchModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="searchModalLabel">Search Products</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex align-items-center">
              <div className="input-group w-75 mx-auto d-flex">
                <input 
                  type="search" 
                  className="form-control p-3" 
                  placeholder="Keywords" 
                  aria-describedby="search-icon-1" 
                  onChange={handleSearchChange}
                />
                <span 
                  id="search-icon-1" 
                  className="input-group-text p-3" 
                  style={{ cursor: 'pointer' }} 
                  onClick={handleSearchSubmit}
                >
                  <FaSearch />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavComponent;
