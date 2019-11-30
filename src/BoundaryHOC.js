import React, { Component } from 'react';
import ErrorFallback from './ErrorFallback';

export default BoundaryHOC = ProtectedComponent => class Boundary extends Component {

  state = {
    hasError: false
  }

  componentDidCatch = () => {
    this.setState({ hasError: true })
  }
  render() {
    const { hasError } = this.state;
    if(hasError) {
      return <ErrorFallback />
    } else {
      return <ProtectedComponent />
    }
  }
};
