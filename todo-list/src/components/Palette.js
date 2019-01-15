import React, { Component } from "react";
import './Palette.css'

class Color extends Component {
  render() {
    const {color, active, onClick} = this.props;
    return (
      <div className={`color ${active ? 'active' : ''}`} 
        style={{background: color}} 
        onClick={onClick}>
      </div>
    )
  }
}

class Palette extends Component {

  render() {
    const {colors, selected, onSelect} = this.props;
    const colorList = colors.map(color => (
      <Color color={color} active={color===selected} onClick={() => onSelect(color)} key={color}/> 
    ));

    return (
      <div className='palette'>
        {colorList}
      </div>
    )
  }
}

export default Palette;