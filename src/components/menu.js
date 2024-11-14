import './App.css';
import React, { Component } from 'react';
import './menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAbout: false,
      nasa:false,
      gallery:false
    };
  }

  toggleAbout = () => {
    this.setState((prevState) => ({
      showAbout: !prevState.showAbout,
    }));
  };
  toggleNasa = () => {
    this.setState((prevState) => ({
      nasa: !prevState.nasa,
    }));
  };

  toggleGallery = () => {
    this.setState((prevState) => ({
      gallery: !prevState.gallery,
    }));
  };

  render() {
    return (
      <div className="menu">
        <button onClick={this.toggleAbout}>About</button>
        <button onClick={this.toggleNasa}>Randomize something</button>
        <button onClick={this.toggleGallery}>Gallery</button>

        {this.state.showAbout && (
          <div className="about">
            Tu bedzie cos o mnie
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
