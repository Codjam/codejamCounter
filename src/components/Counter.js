import React from 'react';
import './Counter.css';

export default class Counter extends React.Component {
  render() {
    return (
      <div className=".counter-box">
        <button>+1</button>
        0
        <button>-1</button>
      </div>
    )
  }
}
