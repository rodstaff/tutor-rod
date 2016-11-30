import React from 'react'

var myStyle1 = {
    color:  "#fff",
}
var myStyle2 = {
    marginRight:  "15px",
}
export default class Nav extends React.Component {
  render() {
    return (

  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="" style={myStyle1}>MENU</span>
        </button>
      </div>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#fruits">Fruits</a></li>
        <li><a href="#team">Team</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right" style={myStyle2}>
        <li><a href="#register"><span class="glyphicon glyphicon-user"></span>&nbsp;Sign Up</a></li>
      </ul>
    </div>
  </nav>

);}}
