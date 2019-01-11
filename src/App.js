import React, { Component } from 'react';
import './App.css'
import MyName from './MyName';
import MyNameF from './MyNameF';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div>
        <MyName name="리액트"></MyName>
        <MyName></MyName>
        <MyNameF name="test"></MyNameF>
        <Counter></Counter>
      </div>
    );
  }
}

export default App;
