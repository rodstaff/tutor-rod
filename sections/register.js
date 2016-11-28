import React from 'react'
import BuyFruits from '../components/buy-fruits'

var myStyle = {
  fontFamily: "Dosis",
    paddingTop: "50px",
    height: "100%",
    color: "#000",
    backgroundColor: "#79d279"
}

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: this.props.fruits
    };
  }
  render() {
    const listFruits = this.state.fruits.filter(fruit => fruit.isChecked === true)
      .map(fruit => <BuyFruits key={fruit.id} cname={fruit.cname} price={fruit.price}/> );
    console.log(this.props);
    return (
      <div id="register" class="container-fluid" style={myStyle}>
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center">
              <h1>Register</h1>
            </div>
          </div>
        </div>
        <div class="row">
          {listFruits}
        </div>
      </div>
    );
  }
}
Register.propTypes = {
  fruits: React.PropTypes.array
}
Register.defaultProps = {
  fruits: []
}