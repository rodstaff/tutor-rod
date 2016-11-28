import React from 'react'
import Nav from '../routes/nav'
import Home from '../sections/home'
import About from '../sections/about'
import Fruits from '../sections/fruits'
import Register from '../sections/register'
import Contact from '../sections/contact'
import fruitsData from '../data/fruits'
import bkImg from '../data/page-pics'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: this.props.fruits,
      bkImg: this.props.bkImg
    };
  }
  render() {
    return (
      <div>
        <Nav />
        <Home bkImg={this.state.bkImg}/>
        <About bkImg={this.state.bkImg}/>
        <Fruits fruits={this.state.fruits}/>
        <Register/>      
        <Contact />
      </div>
    );
  }
}
App.propTypes = {
  fruits: React.PropTypes.array.isRequired,
  bkImg: React.PropTypes.array.isRequired
}
App.defaultProps = {
  fruits: fruitsData(),
  bkImg: bkImg()
}