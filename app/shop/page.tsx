// pages/shop.tsx
"use client";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FristShopcomponent from '@/components/fristshopcompo/fristcomponent';
import NavComponent from '@/components/Nav/NavBar';
import Secendcomponet from '@/components/secondcomponet/seconedcomponent'
import BackToTopButton from '@/components/btnscrolling/btnscrollingcomponent'
const Shop = () => {
    const [cartCount, setCartCount] = useState<number>(0);
  
    const handleAddToCart = () => {
      setCartCount(prevCount => prevCount + 1);
  };
  
  return (
      <>
    <NavComponent cartCount={cartCount}/>
          <FristShopcomponent /> 
      <Secendcomponet onAddToCart={handleAddToCart}/>  
      <BackToTopButton />  
    </>
  );
};

export default Shop;
