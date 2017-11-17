import React from 'react'

export default class Home extends React.Component {
  render() {
    var myStyle1 = {
      fontFamily: "Dancing Script",
      paddingTop: "170px",
      height: "930px",
      // color: "#00FFFF",
      color:  "#fff",
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
      paddingTop: "130px",
      fontSize: 40,
      fontFamily:  "Macondo",
      color: "#fff"
    }
  	return (
      
      <div id="home" class="container-fluid text-center" style={myStyle1}>
        <header style={myStyle3}>Math, Science, Test Prep at NYC. Contact us now!</header>
        <div>
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

