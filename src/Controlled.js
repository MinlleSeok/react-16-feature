import React, { Component } from 'react';
import eatPizza from './eatPizza';

export default class Controlled extends Component {
    state = {
      pizzas: 0
    };
  
    _handleClick = () => {
      this.setState(eatPizza);
    }
  
    render() {
      const { pizzas } = this.state;
  
      return <button onClick={this._handleClick}>{`I haven eaten ${pizzas} ${pizzas === 1 ? "pizza" : "pizzas"}`}</button>
    }
  }
  