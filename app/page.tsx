"use client";
import React, { useState } from 'react';
import NavComponent from '../components/Nav/NavBar';
import Herosection from '../components/HeroSection/HeroSectionCommponent';
import FeatureSelection from '../components/FeatureSelection/FeatureSelectionc';
import FruitshopComponent from '../components/Fruitshop/FruitshopComponent';
import Offer from '../components/Offers/OfferComponant';
import BannerComponent from '../components/Banner/BannerComponent';
import Best from '../components/bestsellerProduct/BestSellerProducts';
import Beforlast from '../components/Beforlast/Beforelastcomponant';
import Last from '../components/Lastcomponant/lastcomponent';
import BackToTopButton from '../components/btnscrolling/btnscrollingcomponent';

export default function Home() {
  const [cartCount, setCartCount] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Function to increment cart count
  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  // Function to handle search submission
  const handleSearchSubmit = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <>
      {/* Pass the search handler to NavComponent */}
      <NavComponent cartCount={cartCount}  />
      
      {/* Pass the search handler to Herosection */}
      <Herosection onSearchSubmit={handleSearchSubmit} />
      
      <FeatureSelection />
      
      {/* Pass searchTerm to FruitshopComponent */}
      <FruitshopComponent addToCart={addToCart} cartCount={cartCount} searchTerm={searchTerm} />
      
      <Offer />
      
      <BannerComponent addToCart={addToCart} cartCount={cartCount} />
      
      <Best addToCart={addToCart} cartCount={cartCount} />
      
      <Beforlast />
      
      <Last />
      
      <BackToTopButton />
    </>
  );
}
