import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import Highlight from './components/Highlight';
import Pricing from './components/pricing';
import Footer from './components/header_footer/Footer';
import Music from './components/Music/Music';
import Tour from './components/Tour/Tour';
import {Element} from 'react-scroll';
import Logo from './components/Logo/Logo'

class App extends Component {
  render() {
    return (
      <div className="App" style={{background:"perl-white"}}>
        <Header />
        <Featured />
        <Element name="Highlight">
          <Highlight />
        </Element>
        <Element className="flex" name="Music">
          <Music />
          <Logo/>
        </Element>
        <Element name="Tour">
          <Tour />
        </Element>      
        <Element name="Pricing">
         <Pricing />
        </Element>

       
        <Footer />
      </div>
    );
  }
}

export default App;
