import React, { Component } from 'react'
import AboutImage from '../assets/wagies/2.png';
import background from '../assets/Website/heartbackground.png';
import Adding1 from '../assets/wagies/5.jpg';
import Adding2 from '../assets/wagies/4.png';
import Answer from '../assets/wagies/answer.gif';

export class about extends Component {
  render() {
    return (
      <div id="about" style={{ 
        backgroundImage: `url(${background})` }}>
        <p className="each-title">BREEDING</p>
        <p className="subabout">3333 Genesis Wagies <span>|</span> 6667 Off-Work Wagies to be created <span>|</span> 0.08 Mint Price</p>
        <div className="about-container">
          <div className="about-left">
            <p className="sub-left-title">Genesis Wagies</p>
            <p className="sub-left-content">In-uniform and working hard at their job, they generate 1 $TENDIE per day. $TENDIES can be used to mint an Off-Work Wagie by holding 2 Genesis Wagies and burning 200 $TENDIES.</p>
          </div>
          <div className="about-right">
            <p className="sub-left-title">Off-Work Wagies</p>
            <p className="sub-left-content">These Wagies are finished their shift and wearing new clothes. They generate 0.25 $TENDIES per day. Use $TENDIES to name them or in our upcoming NFT gachapon machine.</p>
          </div>
        </div>
        <div className="equation">
          <img src={Adding1} alt="adding1" className="adding1"/>
          <p className="plus">+</p>
          <img src={Adding2} alt="adding2" className="adding2" />
          <p className="equal">=</p>
          <img src={Answer} alt="answer" className="answer" />
        </div>
      </div>
    )
  }
}

export default about
