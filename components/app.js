import React from 'react'
import Nav from '../routes/nav'
import Home from '../sections/home'
import Fruits from '../sections/fruits'

import Register from '../sections/register'
import Contact from '../sections/contact'
import fruitsData from '../data/fruits'
import homeBkImg from '../data/home-background'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: this.props.fruits,
      homeImg: this.props.homeImg
    };
  }
  render() {
    return (
      <div>
        <Nav />
        <Home homeImg={this.state.homeImg}/>
        <Fruits fruits={this.state.fruits}/>
        <Register/>      
        <Contact />
      </div>
    );
  }
}
App.PropTypes = {
  fruits: React.PropTypes.array.isRequired,
  homeImg: React.PropTypes.array.isRequired
}
App.defaultProps = {
  fruits: fruitsData(),
  homeImg: homeBkImg()
}