import React from 'react'
import FruitItems from '../components/fruit-items'

export default class Fruits extends React.Component {
  render() {
    var myStyle = {
      fontFamily: "Dosis",
      paddingTop: "50px",
      paddingBottom: "20px",
      height: "100%",
      color: "#000",
      backgroundColor: "#ffcc00"
    }
    const showFruits = this.props.fruits.map(fruit => 
      <FruitItems key={fruit.id} id={fruit.id} cname={fruit.cname} lname={fruit.lname} price={fruit.price} img={fruit.img} link={fruit.link}/> );
  	return (
      <div id="fruits" class="container-fluid" style={myStyle}>
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center">
              <h1>Fruit Seeds List</h1>
            </div>
          </div>
        </div>
        <div class="row">
          {showFruits}
        </div>
      </div>
    );
  }
}
Fruits.propTypes = {
  fruits: React.PropTypes.array.isRequired
}
Fruits.defaultProps = {
  fruits: []
}
