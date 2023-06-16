import React, { Component } from "react";
import Carousel from 'react-simply-carousel';
import { useState } from 'react';
import Marquee from "react-fast-marquee";

import Homegif from '../assets/homegif.gif';
import Image1 from '../assets/Carousel/Carousel1.jpg';
import Image2 from '../assets/Carousel/Carousel2.jpg';
import Image3 from '../assets/Carousel/Carousel3.jpg';
import Image4 from '../assets/Carousel/Carousel4.jpg';
import Image5 from '../assets/Carousel/Carousel5.jpg';
import Image6 from '../assets/Carousel/Carousel6.jpg';
import background from '../assets/Website/heartbackground1.png';


export class home extends Component{
  state = {
    activeSlideIndex: 0,
  };

  setActiveSlideIndex = (newActiveSlideIndex) => {
    this.setState({
      activeSlideIndex: newActiveSlideIndex,
    });
  };

  render(){
  return (
    <div id="home" className="text-center">
      <div className="intro" style={{ 
      backgroundImage: `url(${background})` 
    }}>
          <div className="home-container" >
            <div className="home-left">
              <div className="main-title">
                <p className="big-title">Welcome to wagies!</p>
                <p className="subtitle">Can I take your order?</p>
              </div>
              <button className="mint-button">MINT</button>
              <p className="minted">0/3333 Genesis Wagies Minted</p>
            </div>
            <div className="home-right">
              <img src={Homegif} alt="homegif" className="home-gif" />
            </div>
          </div>
          <div className="parent-carousel">
            <Carousel
              className={'childcarousel'}
              updateOnItemClick
              containerProps={{
                style: {
                  width: "100%",
                  justifyContent: "space-between"
                }
              }}
              activeSlideIndex={this.state.activeSlideIndex}
              onRequestChange={this.setActiveSlideIndex}
              itemsToShow={4}
              speed={4000}
              autoplay={true}
              infinite={true}
              forwardBtnProps={{
                children: "",
                style: {
                  width: 0,
                  height: 0,
                  minWidth: 0,
                  display: 'none'
                }
              }}
              backwardBtnProps={{
                children: "<",
                style: {
                  width: 0,
                  height: 0,
                  minWidth: 0,
                  alignSelf: "center",
                  display: "none"
                }
              }}
            >
              <img src={Image1} alt="image1" />
              <img src={Image2} alt="image1" />
              <img src={Image3} alt="image1" />
              <img src={Image4} alt="image1" />
              <img src={Image5} alt="image1" />
              <img src={Image6} alt="image1" />
            </Carousel>
          </div>
        </div>
    </div>
  );
}
}

export default home;
