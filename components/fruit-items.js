import React from 'react'

export default class FruitItems extends React.Component { 
  render() {
  	const { id, cname, lname, price, img, link } = this.props;
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
        <a href={link}><img src={img} height="150px" class="thumbnail center-block" /></a>
      </div>
    );
  }
}
FruitItems.propTypes = {
  id: React.PropTypes.number,
  cname: React.PropTypes.string,
  lname: React.PropTypes.string,
  price: React.PropTypes.number,
  img: React.PropTypes.node,
  link: React.PropTypes.node
}
FruitItems.defaultProps = {
  id: 0,
  cname: '',
  lname: '',
  price: 0,
  img: '',
  link: ''
}