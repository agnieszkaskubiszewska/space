import './App.css';
import React, { Component } from 'react';
import Menu from './menu';
import Footer from './Footer';
import { ReactTyped } from 'react-typed'; 

class App extends Component {
  state = {
    isTextBlurred: true,
    isTextVisible: true,
    isMenuVisible: false,
    isFirstTextVisible: true,
    isHelloVisible: true, // Nowy stan dla widoczności sekcji hello
  };

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      isTextBlurred: false,
      isTextVisible: true,
      isMenuVisible: true,
      isFirstTextVisible: false,
    });

    setTimeout(() => {
      this.setState({
        isTextBlurred: true,
        isTextVisible: false,
      });
    }, 5000);
  };

  handleHelloComplete = () => {
    // Ukryj hello po 5 sekundach
    setTimeout(() => {
      this.setState({ isHelloVisible: false });
    }, 5000);
  };

  render() {
    return (
      <div className="App">
        {this.state.isMenuVisible && (
          <img className="logo" src="logo.png" alt="Logo strony" />
        )}
        {this.state.isMenuVisible && <Menu />}
        <img
          className="background-image"
          src="sky.jpg"
          alt="Obiekt na stronie"
        />
        {this.state.isFirstTextVisible && (
          <div className="first">
            <ReactTyped
              strings={['  Touch the Space...']}
              typeSpeed={90} 
            />
          </div>
        )}
        <div
          onClick={this.handleClick}
          className={`appTitle ${this.state.isTextBlurred ? 'blurred' : ''} ${
            this.state.isTextVisible ? '' : 'hidden'
          }`}
        >
          S    P    A    C    E
        </div>
        {this.state.isMenuVisible && this.state.isHelloVisible && (
          <div className="hello">
            <ReactTyped
              strings={[
                'Dive into the adventure...',
                'Explore the secrets of space!',
                ' '
              ]}
              typeSpeed={70}
              backSpeed={30}
              loop={false}
              showCursor={true}
              onComplete={this.handleHelloComplete} // Wywołaj funkcję po zakończeniu
            />
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
