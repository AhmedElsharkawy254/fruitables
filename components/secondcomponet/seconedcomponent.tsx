// ShopComponent.tsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import featuredImg1 from '../public/Garps.jpg';
import featuredImg2 from '../public/Garps.jpg';
import featuredImg3 from '../public/orange.jpg';
import bannerImg from '../public/banner-fruits1.jpg';
import fruitItem1 from '../public/Garps.jpg';
import fruitItem2 from '../public/Garps.jpg';
import fruitItem3 from '../public/raspb.jpg';
import { FaAppleAlt, FaStar, FaSearch, FaShoppingBag } from 'react-icons/fa';
import styles from '@/components/secondcomponet/secondcomponent.module.css';

const products = [
  { src: featuredImg1, name: 'Big Banana', price: 2.99, rating: 4, category: 'Banana' },
  { src: featuredImg2, name: 'Sweet Apple', price: 3.49, rating: 5, category: 'Apples' },
  { src: featuredImg3, name: 'Fresh Orange', price: 4.99, rating: 3, category: 'Oranges' },
  { src: fruitItem1, name: 'Grapes', price: 5.49, rating: 2, category: 'Grapes' },
  { src: fruitItem2, name: 'Blueberry', price: 6.99, rating: 4, category: 'Blueberry' },
  { src: fruitItem3, name: 'Raspberry', price: 7.99, rating: 5, category: 'Raspberry' }
];

const getCategoryCounts = (products: any[]) => {
  return products.reduce((acc: any, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});
};

const ShopComponent: React.FC<{ onAddToCart: () => void }> = ({ onAddToCart }) => {
  const [priceRange, setPriceRange] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<string>('Nothing');

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange(Number(e.target.value));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const filteredProducts = products
    .filter(product => product.name.toLowerCase().includes(searchQuery))
    .filter(product => product.price <= priceRange || priceRange === 0);

  const sortProducts = (products: any[], option: string) => {
    switch (option) {
      case 'Popularity':
        return [...products].sort((a, b) => b.rating - a.rating);
      case 'Organic':
      case 'Fantastic':
        return products; // Placeholder
      default:
        return products; // No sorting
    }
  };

  const sortedProducts = sortProducts(filteredProducts, sortOption);
  const categoryCounts = getCategoryCounts(products);

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <h1 className="mb-4">Fresh Fruits Shop</h1>
        <div className="row g-4">
          <div className="col-lg-12">
            <div className="row g-4">
              <div className="col-xl-3">
                <div className="input-group w-100 mx-auto d-flex">
                  <input
                    type="search"
                    className="form-control p-3"
                    placeholder="Search for products"
                    aria-describedby="search-icon-1"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <span id="search-icon-1" className="input-group-text p-3">
                    <FaSearch />
                  </span>
                </div>
              </div>
              <div className="col-6"></div>
              <div className="col-xl-3">
                <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                  <label htmlFor="fruits">Default Sorting:</label>
                  <select id="fruits" className="border-0 form-select-sm bg-light me-3" value={sortOption} onChange={handleSortChange}>
                    <option value="Nothing">Nothing</option>
                    <option value="Popularity">Popularity</option>
                    <option value="Organic">Organic</option>
                    <option value="Fantastic">Fantastic</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-lg-3">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <h4>Categories</h4>
                      <ul className={`list-unstyled ${styles.categoryColor}`}>
                        {['Apples', 'Oranges', 'Strawberry', 'Banana', 'Pumpkin'].map((category, index) => (
                          <li key={index}>
                            <div className="d-flex justify-content-between">
                              <a href="#">
                                <FaAppleAlt className="me-2" />
                                {category}
                              </a>
                              <span>({categoryCounts[category] || 0})</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="mb-3">
                      <h4 className="mb-2">Price</h4>
                      <input
                        type="range"
                        className="form-range w-100"
                        id="rangeInput"
                        min="0"
                        max="500"
                        value={priceRange}
                        onChange={handleRangeChange}
                      />
                      <output htmlFor="rangeInput">{priceRange}</output>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="mb-3">
                      <h4>Additional</h4>
                      {['Organic', 'Fresh', 'Sales', 'Discount', 'Expired'].map((label, index) => (
                        <div className="mb-2" key={index}>
                          <input type="radio" className="me-2" id={`Categories-${index}`} name="Categories" />
                          <label htmlFor={`Categories-${index}`}>{label}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <h4 className="mb-3">Featured Products</h4>
                    {[featuredImg1, featuredImg3, fruitItem3].map((imgSrc, index) => (
                      <div className="d-flex align-items-center justify-content-start mb-3" key={index}>
                        <Image src={imgSrc} alt="Featured product" width={100} height={100} className="rounded me-4" />
                        <div>
                          <h6 className="mb-2">Big Banana</h6>
                          <div className="d-flex mb-2">
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar />
                          </div>
                          <div className="d-flex mb-2">
                            <h5 className="fw-bold me-2">$2.99</h5>
                            <h5 className="text-danger text-decoration-line-through">$4.11</h5>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="d-flex justify-content-center my-4">
                      <a href="#" className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100">
                        View More
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="position-relative">
                      <Image src={bannerImg} alt="Banner" className="img-fluid w-100 rounded" />
                      <div className="position-absolute" style={{ top: '50%', right: '10px', transform: 'translateY(-50%)' }}>
                        <h3 className="text-secondary fw-bold">Fresh <br /> Fruits <br /> Banner</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-9">
                <div className="row g-4">
                  {sortedProducts.map((product, index) => (
                    <div className="col-md-6 col-lg-6 col-xl-4" key={index}>
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <Image src={product.src} alt="Fruit item" className="img-fluid w-100 rounded-top" />
                        </div>
                        <div className={`text-white px-3 py-1 rounded position-absolute ${styles.labels}`} style={{ top: '10px', left: '10px' }}>
                          {product.category}
                        </div>
                        <div className={`p-4 border-top-0 rounded-bottom ${styles.container}`}>
                          <h4>{product.name}</h4>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">${product.price} / kg</p>
                            <a href="#" className={`btn rounded-pill px-3 ${styles.btn}`} onClick={onAddToCart}>
                              <FaShoppingBag className={`fa-2x ${styles.logo}`} />
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                      <span className="page-link">Previous</span>
                    </li>
                    <li className="page-item active" aria-current="page">
                      <span className="page-link">1</span>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">2</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">3</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">Next</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopComponent;
