import React from 'react'

var newFruitsList = [],
    testNumber = 0;

export default class FruitItems extends React.Component { 
  constructor(props) {
  	super(props);
  	this.state ={
  	  isChecked: this.props.isChecked
  	}
  }
  toggleChange() {
  	this.setState({
      isChecked: !this.state.isChecked
  	}//, function() { console.log(this.state) }
  	);
  }
  render() {
  	const { id, cname, lname, price, isChecked } = this.props;
    const myStyle = {
      border: "1px double black",
      borderRadius: 15,
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 2
    };
    return (
      <div class="col-lg-3 col-md-4 col-sm-6 text-center" style={myStyle}>
        <h4>{cname}</h4>
        <h5><em>{lname}</em></h5>
        <h5>Price:&nbsp;&nbsp;${price}</h5>
      </div>
    );
  }
}
FruitItems.propTypes = {
  id: React.PropTypes.number,
  cname: React.PropTypes.string,
  lname: React.PropTypes.string,
  price: React.PropTypes.number,
  isChecked: React.PropTypes.bool
}
FruitItems.defaultProps = {
  id: 0,
  cname: '',
  lname: '',
  price: 0,
  isChecked: false
}