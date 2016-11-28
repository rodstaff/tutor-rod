import React from 'react'
import Pic from '../public/images/others/home.jpg'

export default class Home extends React.Component {
  render() {
    var myStyle1 = {
      fontFamily: "Dosis",
      paddingTop: "300px",
      height: "700px",
      color:  "#fff",
      backgroundImage: `url(${this.props.bkImg[0].homeImg})`,
      backgroundSize: 'cover'
    }
    var myStyle2 = {
      marginRight: "10px",
      marginBottom: "10px"
    }
  	return (

      <div id="home" class="container-fluid text-center" style={myStyle1}>
        <h1>Pro-Seed and Grow !</h1>
        <p>God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog.</p>
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

