import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            C7 <code> to</code> C5
          </p>
          <Counter />

        </header>
      </div>
    );
  }
}

export default App;
