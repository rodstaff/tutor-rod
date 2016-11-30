import React from 'react'

export default class TeamMems extends React.Component { 
  render() {
  	const { id, fname, lname, title, linkedin, photo } = this.props;
    const myStyle = {
      border: "1px double black",
      borderRadius: 15,
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 2
    };
    return (
      <div class="col-lg-3 col-md-6 col-sm-6 text-center" style={myStyle}>
        <br />
        <a href={linkedin}><img src={photo} height="175px" class="thumbnail center-block" /></a>
        <h4>{fname} {lname}</h4>
        <h5><em>{title}</em></h5>
        <br />
      </div>
    );
  }
}
TeamMems.propTypes = {
  id: React.PropTypes.number,
  fname: React.PropTypes.string,
  lname: React.PropTypes.string,
  title: React.PropTypes.string,
  linkedin: React.PropTypes.node,
  photo: React.PropTypes.node
}
TeamMems.defaultProps = {
  id: 0,
  fname: '',
  lname: '',
  title: '',
  linkedin: '',
  photo: ''
}