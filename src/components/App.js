import './App.css';
import React, { Component } from 'react';
import Menu from './menu';

class App extends Component {
  state = {
    isTextBlurred: true,
    isTextVisible: true
  };

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      isTextBlurred: false,
      isTextVisible: true
    });


    setTimeout(() => {
      this.setState({
        isTextBlurred: true,  
        isTextVisible: false 
      });
    }, 5000); 
  };

  render() {
    return (
      <div className="App">
        <Menu />
        <img
          className="background-image"
          src="sky.png"
          alt="Obiekt na stronie"
        />
        <div
          onClick={this.handleClick}
          className={`appTitle ${this.state.isTextBlurred ? 'blurred' : ''} ${this.state.isTextVisible ? '' : 'hidden'}`}
        >
          S  P  A  C  E
        </div>
      </div>
    );
  }
}

export default App;
