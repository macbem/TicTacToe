import React, { Component } from 'react';
import './Square.css';

export class Square extends Component {
  
  handleClick = () => this.props.val ? false : this.props.setValue(this.props.index)

  render() {
    return (
      <div className="Square" onClick={this.handleClick}>
        {this.props.val ? this.props.val : ''}
      </div>
    )
  }
}
