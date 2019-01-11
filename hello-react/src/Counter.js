import React, { Component } from "react";

const Problematic = () => {
  throw (new Error('Bug!! Bug!!'));
  return (
    <div>    
    </div>
  );
};

class Counter extends Component{
  state = {
    number: 0,
    error: false
  }

  // constructor
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  // It called, when Componet recive new props
  // It usually handle change of state affected by props
  // DEPRECATED
  componentWillMount() {
    console.log('componentWillMount (dep)');
  }

  // Not to setState, return state values to set the states when some props changed.
  componentDidMount() {
    console.log('componentDidMount')
  }

  // It usually used component optimization. 
  // return true component will be rerander if not it dosen't 
  shouldComponentUpdate(nextProps, nextState) {
    // if multiple of 5 don't render
    console.log('shouldComponentUpdate');
    if( nextState.number % 5 === 0 ) return false;
    return true;
  }

  // DEPRECATED
  // It called when shouldComponentUpdate return true
  // In this function, It usally initialize animation or remove event listener
  // After Call of this function, render() is called.
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdatei (dep)');
  }

  // This API will be called under cases:
  // 1. render()
  // 2. getSnapshotBeforeUpdate()
  // 3. Real DOM is changed.
  // 4. componentDidUpdate()
  // in this function, get previous states of DOM and 
  // return some value it pass to third parameter of componentDidUpdate.
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapchotBeforeUpdate')
  }

  // After render called, This function is called. 
  // props and state is already changed when this called.
  // We can see previous stata and porps for parameters, 
  // and can get snapshot, third parameter, passed from getSnapshotBeforeUpdate .
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  // It called when component is not to need any more.
  componentWillUnmount()  {
    console.log('componentWillUnmount');
  }

  // handle excepetions
  componentDidCatch(error, info) {
    this.setState({
      error: true
    });
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

    if(this.state.error === true) return (<h1> ERROR!! </h1>);

    return (
      <div>
        <h1>카운터</h1>
        <div>value: {this.state.number} </div>
        {this.state.number === 6 && <Problematic/>}
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;