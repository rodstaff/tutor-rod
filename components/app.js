import React from 'react'
import Nav from '../routes/nav'
import Home from '../sections/home'
import About from '../sections/about'
import Fruits from '../sections/fruits'
import Register from '../sections/register'
import Team from '../sections/team'
import bkImg from '../data/page-pics'
import fruitsData from '../data/fruits'
import teamData from '../data/team'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: this.props.fruits,
      teamMems: this.props.teamMems,
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
        <Team teamMems={this.state.teamMems}/>
      </div>
    );
  }
}
App.propTypes = {
  fruits: React.PropTypes.array.isRequired,
  teamMems: React.PropTypes.array.isRequired,
  bkImg: React.PropTypes.array.isRequired
}
App.defaultProps = {
  fruits: fruitsData(),
  teamMems: teamData(),
  bkImg: bkImg()
}