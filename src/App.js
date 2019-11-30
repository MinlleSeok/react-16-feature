import React, { Component } from 'react';
import Controlled from './Controlled';

class App extends Component {

  // state = {
  //   hasError: false
  // }

  // componentDidCatch = (error, info) => {
  //   console.log(`catched ${error} the info I have is ${JSON.stringify(info)}`)
  //   console.log(info)
  //   this.setState({ hasError: true });
  // }

  render() {
    // const { hasError } = this.state;

    return (
      <>
        {/* <ReturnTypes /> */}
        {/* <PReturnTypes /> */}
        {/* <Portals /> */}
        {/* <PPortals /> */}
        {/* {hasError ? <ErrorFallback /> : <ErrorMaker />  } */}
        {/* <PErrorMaker /> */}
        <Controlled />
      </>
    );
  }
}

// export default BoundaryHOC(App);
export default App;