import React, { Component } from "react";
import Carousel from 'react-simply-carousel';
import { useState } from 'react';
import Marquee from "react-fast-marquee";

import Homegif from '../assets/homegif.gif';
import Image1 from '../assets/Carousel/Carousel1.jpg';
import Image2 from '../assets/Carousel/Carousel2.jpg'
import Image3 from '../assets/Carousel/Carousel3.jpg'
import Image4 from '../assets/Carousel/Carousel4.jpg'
import Image5 from '../assets/Carousel/Carousel5.jpg'
import Image6 from '../assets/Carousel/Carousel6.jpg'


const Header = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <header id="header">
      
    </header>
  );
}

export default Header;
