import './App.css';
import React, { Component } from 'react';
import './menu.css';
import { motion } from "framer-motion";
import About from './About';
import './About.css'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAbout: false,
      nasa: false,
      gallery: false
    };
  } 
  toggleAbout = () => {
    this.setState((prevState) => ({
      showAbout: !prevState.showAbout,
      nasa: false,
      gallery: false
    }));
  };

  toggleNasa = () => {
    this.setState((prevState) => ({
      nasa: !prevState.nasa,
      showAbout: false,
      gallery: false
    }));
  };

  toggleGallery = () => {
    this.setState((prevState) => ({
      gallery: !prevState.gallery,
      nasa: false,
      showAbout: false
    }));
  };

  render() {
    return (
      <div className="menu">
        <motion.button
          whileHover={{ scale: 1.1 }}      
          whileTap={{ scale: 0.95 }}   
          onClick={this.toggleAbout}    
        >
          About
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={this.toggleNasa}
        >
          NASA API
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={this.toggleGallery}
        >
          Gallery
        </motion.button>


        {this.state.showAbout && (
          <div className="about">
            <About />
          </div>
        )}

        {this.state.nasa && (
          <div className="nasa">
            Api nasa
          </div>
        )}

        {this.state.gallery && (
          <div className="gallery">
            Galeria
          </div>
        )}
      </div>
    );
  }
}

export default Menu;
