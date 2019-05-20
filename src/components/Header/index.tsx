import React, { Component } from 'react'

import './index.scss'

export default class index extends Component {
  render() {
    return (
      <div className='header'>
        <b>音乐馆</b>
        <div className="search">
          <input type="text"/>
          <div className="search-icon">
              <i className='iconfont icon-sousuo'></i>
              <span>搜索</span>
          </div>
        </div>
        <i className='iconfont icon-vynil'></i>
      </div>
    )
  }
}
