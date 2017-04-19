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
    // marginRight: "700px",
    // marginBottom: "30px",
    // marginLeft: "30px",
    // height: "680px",
      fontSize: 57
    }
    var myStyle3 = {
      color: "orange",
      marginLeft: "10px"
    }
  	return (

      <div id="about" class="container-fluid text-left" style={myStyle1}>
        <h1 style={myStyle2}>Welcome to Octonics Learning!</h1>
        <h1 style={myStyle2}>Here we value the human interaction versus the more impersonal online tutoring alternative...</h1>
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