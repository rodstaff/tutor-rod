import React from 'react'
import Nav from '../routes/nav'
import Home from '../sections/home'
import Fruits from '../sections/fruits'

import Checkout from '../sections/checkout'
import Contact from '../sections/contact'
import FruitsData from '../data/fruits'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: this.props.fruits
    };
  }
  render() {
    return (
      <div>
        <Nav />
        <Home />
        <Fruits fruits={this.state.fruits}/>
        <Checkout/>      
        <Contact />
      </div>
    );
  }
}
App.PropTypes = {
  fruits: React.PropTypes.array.isRequired
}
App.defaultProps = {
  fruits: FruitsData()
}