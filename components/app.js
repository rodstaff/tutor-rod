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
      team: this.props.team,
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
        <Team team={this.state.team}/>
      </div>
    );
  }
}
App.propTypes = {
  fruits: React.PropTypes.array.isRequired,
  team: React.PropTypes.array.isRequired,
  bkImg: React.PropTypes.array.isRequired
}
App.defaultProps = {
  fruits: fruitsData(),
  team: teamData(),
  bkImg: bkImg()
}