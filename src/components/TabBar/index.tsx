import React, { Component } from 'react'

import './index.scss'

export default class index extends Component {
  render() {
    return (
        <div className="TabBar">
          <div className="detail"><i className='iconfont icon-yinyue'></i>音乐馆</div>
          <div className="detail"><i className='iconfont icon-taocantuijian'></i>推荐</div>
          <div className="detail"><i className='iconfont icon-faxian'></i>发现</div>
          <div className="detail"><i className='iconfont icon-wode'></i>我的</div>
        </div>
      
    )
  }
}
