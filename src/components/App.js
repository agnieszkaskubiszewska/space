import './App.css';
import React, { Component } from 'react';
import Menu from './menu';
import Footer from './Footer';

class App extends Component {
  state = {
    isTextBlurred: true,
    isTextVisible: true,
    isMenuVisible: false
  };

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      isTextBlurred: false,
      isTextVisible: true,
      isMenuVisible: true
    });


    setTimeout(() => {
      this.setState({
        isTextBlurred: true,  
        isTextVisible: false,
      });
    }, 5000); 
  };

  render() {
    return (
      <div className="App">
        {this.state.isMenuVisible && <Menu />}
        <img
          className="background-image"
          src="sky.jpg"
          alt="Obiekt na stronie"
        />
        <div
          onClick={this.handleClick}
          className={`appTitle ${this.state.isTextBlurred ? 'blurred' : ''} ${this.state.isTextVisible ? '' : 'hidden'}`}
        >
          S  P  A  C  E
        </div>
        {this.state.isMenuVisible && (
          <div className='hello'>
           <p id="typing-effect" className="typing-effect">
    <span className="line" style={{ animationDelay: "0s" }}>Dive into the   </span><br />
    <span className="line" style={{ animationDelay: "1.5s" }}>adventure   </span><br />
    <span className="line" style={{ animationDelay: "3s" }}>of exploring   </span><br />
    <span className="line" style={{ animationDelay: "4.5s" }}>my page   </span><br />
  </p>
          </div>
        )}
      <Footer />
      </div>
    );
  }
}

export default App;

