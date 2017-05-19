import React from 'react'

export default class About extends React.Component {
  render() {
    var myStyle1 = {
      fontFamily: "Macondo",
    // paddingTop: "150px",
    // paddingBottom: "20px",
    // height: "100%",
      height:  "900px",
      color:  "#000",
    //  backgroundColor: "#cc0044",
      backgroundImage: `url(${this.props.bkImg[1].aboutImg})`,
      backgroundSize: 'cover'
    }
    var myStyle2 = {
    paddingTop: "220px",
    // marginRight: "700px",
    // marginBottom: "30px",
    marginLeft: "10px",
    // height: "680px",
      fontSize: 57,
      color: "cyan"
    }
    var myStyle3 = {
      color: "orange",
      marginLeft: "10px"
    }
    var myStyle4 = {
      fontSize: 30,
      color: "cyan",
      marginLeft: "10px"
    }
  	return (

      <div id="about" class="container-fluid text-left" style={myStyle1}>
        <h1 style={myStyle2}>Welcome to Octonics Mentoring!</h1>
        <h1 style={myStyle4}>Here we value the human interaction versus the more impersonal online tutoring alternative.</h1>
        <h2 style={myStyle4}> Our tutors come from elite schools and have impressive scholastic achievements. More importantly, our tutors have that extra patience and creativity to enrich your learning experience.  </h2>
        <h2 style={myStyle4}> Contact us! </h2>
        <p class="text-left" style={myStyle3}>&emsp;&ensp;{this.props.bkImg[1].size}</p>
      </div>
    );
  }
}
About.propTypes = {
  bkImg: React.PropTypes.array.isRequired
}
About.defaultProps = {
  bkImg: []
}