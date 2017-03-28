import React from 'react'

export default class Home extends React.Component {
  render() {
    var myStyle1 = {
      fontFamily: "Dancing Script",
      paddingTop: "170px",
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
    var myStyle4 = {
      fontSize: 40,
      fontFamily:  "Dosis",
      color: "#fff"
    }
  	return (
      
      <div id="home" class="container-fluid text-center" style={myStyle1}>
        <header style={myStyle3}>Math, Science, Test Prep Tutors Here!</header>
        <h1 style={myStyle4}>Technology is being used in education in ways that help facilitate learning.  
        for example, online platforms are being used to reach out to more people liberating both the tutor and student constraints of space and time.  However, a number of tutors still cling to the traditional face-to-face approach and for a reason...</h1>
        <h2>{'<'}<em> Only warm, dedicated tutors here </em>{'>'}&nbsp;</h2>
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

