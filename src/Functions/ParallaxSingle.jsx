import React from 'react'
import './Parallax.css'

class ParrallaxSingle extends React.Component {
  render() {
    console.log(this.props.foreground);
    return (
      <div id={this.props.id} className="headerdiv">
        <img src={this.props.background} className="background" alt="back" />
        <div className="title">{this.props.title}</div>
      </div>
    );
  }
}

export default ParrallaxSingle;