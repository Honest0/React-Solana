import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
// import Features from './components/features';
import About from './components/about';
import Home from './components/home';
import Features from './components/features';
import WagiesWork from './components/wagieswork';
import Roadmap from './components/roadmap';
// import Testimonials from './components/testimonials';
import Team from './components/team';
// import Contact from './components/contact';
import JsonData from './data/data.json';
import Footer from './components/footer';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Home />
        <About data={this.state.landingPageData.About} />
        <Features />
        {/* <WagiesWork /> */}
        <Roadmap />
        <Team data={this.state.landingPageData.Team} />
        <Footer />
      </div>
    )
  }
}

export default App;
