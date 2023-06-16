import React, { Component } from "react";
import Teamleft from '../assets/Website/Mot.jpg';
import Teamright from '../assets/Website/MSILucifer.jpg';
import background from '../assets/Website/heartbackground.png';

export class Team extends Component {
  render() {
    return (
      <div id="team" className="text-center" style={{
        backgroundImage: `url(${background})`
      }}>
        <p className="each-title">TEAM</p>
        <div className="team-container">
          <div className="team-left">
            <a href="https://twitter.com/mot_eth" className="">
              <img src={Teamleft} alt="" className="team-left-image" />
            </a>
            <p className="name">MOT</p>
            <p className="description">Project Manager</p>
          </div>
          <div className="team-right">
            <a href="https://github.com/msilucifer" className="">
              <img src={Teamright} alt="" className="team-left-image" />
            </a>
            <p className="name">MSILucifer</p>
            <p className="description">Developer</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
