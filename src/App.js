import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter/Counter'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter by={1}></Counter>
        <Counter by={1}></Counter>
        <Counter by={5} ></Counter >
        <Counter by={10} ></Counter >
      </div >
    );
  }
}




export default App;


