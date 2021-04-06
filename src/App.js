import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/learningexamples/FirstComponent';
import SecondComponent from './components/learningexamples/SecondComponent';
import ThirdComponent from './components/learningexamples/ThirdComponent';
import FourthComponent from "./components/learningexamples/FourthComponent"; import { MyownComponent } from './components/learningexamples/ThirdComponent';
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


