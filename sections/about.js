import React from 'react'

export default class About extends React.Component {
  render() {
    var myStyle1 = {
      fontFamily: "Macondo",
      paddingTop: "50px",
      paddingBottom: "20px",
    //  height: "100%",
      height:  "900px",
      color:  "#000",
    //  backgroundColor: "#cc0044",
      backgroundImage: `url(${this.props.bkImg[1].aboutImg})`,
      backgroundSize: 'cover'
    }
    var myStyle2 = {
      marginRight: "500px",
      marginBottom: "30px",
      marginLeft: "30px",
      height: "680px" 
    }
    var myStyle3 = {
      color: "orange",
      marginLeft: "10px"
    }
  	return (

      <div id="about" class="container-fluid text-left" style={myStyle1}>
        <h1 style={myStyle2}>(Title) is about learning...&nbsp;&nbsp;It is about caring...&nbsp;&nbsp;It is about one human helping another.&nbsp;&nbsp;No online platform can replace the human interaction.</h1>
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