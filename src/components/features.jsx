import React, { Component } from "react";
import Icon1 from '../assets/icons/icons1.png';
import Icon2 from '../assets/icons/icons2.png'
import Icon3 from '../assets/icons/icons3.png'
import Icon4 from '../assets/icons/icons4.png'
import Icon5 from '../assets/icons/icons5.png'
import Icon6 from '../assets/icons/icons6.png'
import Icon7 from '../assets/icons/icons7.png'
import Border from '../assets/Website/border.png';


export class home extends Component {
  state = {
    activeSlideIndex: 0
  };


  setActiveSlideIndex = (newActiveSlideIndex) => {
    this.setState({
      activeSlideIndex: newActiveSlideIndex,
    });
  };

  render() {
    return (
      <div id="features">
        <p className="each-title features-title">FEATURES</p>
        <div className="features-container">
          <div className="each-feature">
            <img src={Border} alt="border" className="border" />
            <img src={Icon1} alt="icons" className="feature-icons" />
            <p className="features-content">01</p>
            <p className="features-number">A gachapon machine to spend Tendies on fun NFT drops including collabs with other artists</p>
          </div>
          <div className="each-feature">
            <img src={Border} alt="border" className="border" />
            <img src={Icon2} alt="icons" className="feature-icons" />
            <p className="features-content">02</p>
            <p className="features-number">An incentivized burn mechanic to reduce Wagie supply</p>
          </div>
          <div className="each-feature">
            <img src={Border} alt="border" className="border" />
            <img src={Icon3} alt="icons" className="feature-icons" />
            <p className="features-content">03</p>
            <p className="features-number">A video game where you can wager Tendies on match outcomes</p>
          </div>
          <div className="each-feature">
            <img src={Border} alt="border" className="border" />
            <img src={Icon4} alt="icons" className="feature-icons" />
            <p className="features-content">04</p>
            <p className="features-number">In-game skins purchaseable with Tendies + limited time gachapon skin drops</p>
          </div>
          <div className="each-feature">
            <img src={Border} alt="border" className="border" />
            <img src={Icon5} alt="icons" className="feature-icons" />
            <p className="features-content">05</p>
            <p className="features-number">Auctions for legendary 1/1 Wagies</p>
          </div>
          <div className="each-feature">
            <img src={Border} alt="border" className="border" />
            <img src={Icon6} alt="icons" className="feature-icons" />
            <p className="features-content">06</p>
            <p className="features-number">Custom, 3D modelled NFTs of your Wagie</p>
          </div>
          {/* <div className="each-feature">
            <img src={Border} alt="border" className="border" />
            <img src={Icon7} alt="icons" className="feature-icons" />
            <p className="features-content">07</p>
            <p className="features-number">Breeding/ Customization mechanic</p>
          </div> */}
        </div>
      </div>
    );
  }
}

export default home;
