import { Component } from 'react';
import BoundaryHOC from './BoundaryHOC';

class ReturnTypes extends Component {
  render() {
    // return ([<header key={1}></header>,
    //   <div key={2}></div>,
    //   <footer key={3}></footer>]);
    // return (<span><header key={1}></header>
    //   <div key={2}></div>
    //   <footer key={3}></footer></span>);

    // return (<Fragment><header key={1}></header>
    //   <div key={2}></div>
    //   <footer key={3}></footer></Fragment>);

    // return (<><header key={1}></header>
    //   <div key={2}></div>
    //   <footer key={3}></footer></>);
    return "hello";
  }
}

// const PReturnTypes = BoundaryHOC(ReturnTypes);
export default BoundaryHOC(ReturnTypes);