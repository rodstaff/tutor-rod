import React from 'react'

var myStyle1 = {
	fontFamily: "Dosis",
  	paddingTop: "50px",
    paddingBottom: "20px",
  	height: "100%",
  	color:  "#000",
  	backgroundColor: "blue"
}
var myStyle2 = {
  marginRight: "10px",
  marginBottom: "10px"
}

export default class Home extends React.Component {
  render() {
  	return (

      <div id="home" class="container-fluid text-center" style={myStyle1}>
        <h1>A convenient place to buy your seeds online!</h1>
        
        <img src={this.props.homeImg[0].image} width="600px" class="img-responsive pull-left gap-right" style={myStyle2}/>
        <p>God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog. &nbsp;&nbsp;God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog.&nbsp;&nbsp;God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog.&nbsp;&nbsp;God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog.&nbsp;&nbsp;God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog.</p>
      </div>
    );
  }
}
Home.propTypes = {
  homeImg: React.PropTypes.array.isRequired
}
Home.defaultProps = {
  homeImg: []
}

