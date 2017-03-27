import React from 'react'

export default class Home extends React.Component {
  render() {
    var myStyle1 = {
      fontFamily: "Dancing Script",
      paddingTop: "370px",
      height: "930px",
      color: "#00FFFF",
      //color:  "#fff",
      backgroundImage: `url(${this.props.bkImg[0].homeImg})`,
      backgroundSize: 'cover'
    }
    var myStyle2 ={
      paddingTop: "370px",
      color: "yellow"
    }
    var myStyle3 = {
      fontSize: 100
    }
  	return (
      
      <div id="home" class="container-fluid text-center" style={myStyle1}>
        <header style={myStyle3}>Math, Science, Test Prep Tutors Here!</header>
        <h1>Are you looking for a reliable tutor?  Scroll down and find out more...</h1>
        <h2>{'<'}<em> Only great tutors here </em>{'>'}&nbsp;</h2>
        <div style={myStyle2}>
          <p>{this.props.bkImg[0].size}</p>
        </div>
      </div>
    );
  }
}
Home.propTypes = {
  bkImg: React.PropTypes.array.isRequired
}
Home.defaultProps = {
  bkImg: []
}

