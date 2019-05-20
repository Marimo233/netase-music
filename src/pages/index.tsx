import React, { Component } from 'react'


import './index.scss'

export default class index extends Component {
  render() {
    return (
      <div className="Main">
        {this.props.children}
        
      </div>
    )
  }
}
