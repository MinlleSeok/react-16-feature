import React, { Component } from 'react';
import BoundaryHOC from './BoundaryHOC';

class ErrorMaker extends Component {
  state = {
    friends: ["Jisu", "flynn", "daal", "kneeprayer"]
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        friends: undefined
      })
    }, 2000);
  }

  render() {
    const { friends } = this.state;
    return friends.map(friend => `${friend}`)
  }
}

export default BoundaryHOC(ErrorMaker);
// const PErrorMaker = BoundaryHOC(ErrorMaker);