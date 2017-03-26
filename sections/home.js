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
  	return (
      
      <div id="home" class="container-fluid text-center" style={myStyle1}>
        <h1>Are you looking for a reliable tutor?  This is the right place for you!</h1>
        <h2>{'<'}<em> Find the right tutor for you. </em>{'>'}&nbsp;</h2>
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

