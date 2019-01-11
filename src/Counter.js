import React, { Component } from "react";

class Counter extends Component{
  state = {
    number: 0
  }

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  componentWillMount() {
    console.log('componentWillMount (dep)');
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    // if multiple of 5 don't render
    console.log('shouldComponentUpdate');
    if( nextState.number % 5 === 0 ) return false;
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  handleIncrease = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    });
  }

  handleDecrease = () => {
    this.setState(
      ({number}) => ({
        number: number + 1
      })
    );
  }

  render() {
    console.log('render');
    return (
      <div>
        <h1>카운터</h1>
        <div>value: {this.state.number} </div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;