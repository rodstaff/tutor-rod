import React from 'react'

export default class Contact extends React.Component {
  render() {
    var myStyle = {
      fontFamily: "Dosis",
      paddingTop: "50px",
      height: "100%",
      color: "#fff",
      backgroundColor: "#505050"
    }
  	return (
      <div id="contact" class="container-fluid" style={myStyle}>
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center">
              <h1>Contact</h1>
              <p>God yzal eht revo spmuj xof nworb kciuq eht.&nbsp;&nbsp;The quick brown fox jumps over the lazy dog.</p>
            </div>
          </div>
        </div>
        <div class="row">
        </div>
      </div>
    );
  }
}