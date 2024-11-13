import './App.css';
import React, { Component } from 'react';
import './menu.css'

class Menu extends Component {
  state = {

  };

  handleClick = (event) => {
    event.preventDefault(); 
    this.setState({ 
      
    });
  };

  render() {
    return (
      <div className="menu">
        <button>About</button>
        <button>Wylosuj coś</button>
        <button>Galeria</button>
        </div>
    );
  }
}

export default Menu;
