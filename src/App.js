import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import Highlight from './components/Highlight';
import Pricing from './components/pricing';
import Footer from './components/header_footer/Footer';
import Music from './components/Music/Music';
import Tour from './components/Tour/Tour';

class App extends Component {
  render() {
    return (
      <div className="App" style={{background:"perl-white",height:"1500px"}}>
        <Header />
        <Featured />
        <Highlight />
        <Music />
        <Tour />
        <Pricing />
        <Footer />
      </div>
    );
  }
}

export default App;
