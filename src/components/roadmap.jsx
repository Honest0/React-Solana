import React, { Component } from "react";
import background from '../assets/Website/heartbackground.png';

export class Gallery extends Component {
  render() {
    return (
      <div id="roadmap" className="text-center" style={{ 
        backgroundImage: `url(${background})` }}>
        <p className="each-title roadmap-title" id="roadmap-title">Roadmap</p>
        <div className="roadmap-container">
          <div className="roadmap">
            <p className="roadmap-content-title">20% SOLD</p>
            <p className="roadmap-content">The "Food Court" opens up, an exclusive NFT alpha channel for Wagies holders</p>
          </div>
          <div className="roadmap">
            <p className="roadmap-content-title">50% SOLD</p>
            <p className="roadmap-content">Our NFT Gachapon machines begin development. Spend Tendies on fun NFT drops + collabs from other artists.</p>
          </div>
          <div className="roadmap">
            <p className="roadmap-content-title">80% SOLD</p>
            <p className="roadmap-content">The figure Factory opens. Custom 3D modelled NFTs of your Wagie can be purchased for Tendies.</p>
          </div>
          <div className="roadmap">
            <p className="roadmap-content-title">100% SOLD</p>
            <p className="roadmap-content"> Our multiplayer video game begins development.</p>
            <p className="roadmap-content">Wager Tendies on match outcomes or redeem them for in-game skins.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
