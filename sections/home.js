import React from 'react'

export default class Home extends React.Component {
  render() {
    var myStyle1 = {
      fontFamily: "Dosis",
      paddingTop: "270px",
      height: "700px",
      color:  "#fff",
      backgroundImage: `url(${this.props.bkImg[0].homeImg})`,
      backgroundSize: 'cover'
    }
    var myStyle2 ={
      paddingTop: "240px",
      color: "yellow"
    }
  	return (
      
      <div id="home" class="container-fluid text-center" style={myStyle1}>
        <h1>Pro-Seed and Grow !</h1>
        <h2>{'<'}<em> This is a demo site. </em>{'>'}&nbsp;</h2>
        <p>God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog.</p>
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

