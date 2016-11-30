import React from 'react'

export default class TeamMems extends React.Component { 
  render() {
  	const { id, fname, lname, title, linkedin, photo, size } = this.props;
    const myStyle1 = {
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 2
    }
    const myStyle2 = {
      color: "magenta"
    }
    return (
      <div class="col-lg-3 col-md-6 col-sm-6 text-center" style={myStyle1}>
        <br />
        <label style={myStyle2}>{size}<a href={linkedin}><img src={photo} height="200px" class="thumbnail center-block" /></a></label>
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
  photo: React.PropTypes.node,
  size: React.PropTypes.string
}
TeamMems.defaultProps = {
  id: 0,
  fname: '',
  lname: '',
  title: '',
  linkedin: '',
  photo: '',
  size: ''
}