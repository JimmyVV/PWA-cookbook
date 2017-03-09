import './content.scss';
import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup.js';
import {connect} from 'react-redux';
import List from './List';

const data = [
  "学习",
  "我学习",
  "我很学习",
  "我很爱学习",
  "我真很爱学习",
  "我真的很爱学习",
  "学个屁,出去嗨",
]

class Content extends Component {
  render() {
    let lists = data.map((val,key)=>{
      return (
        <List content={val} key={key} />
      )
    })
    return (
     <div className="container">
       <i className="icon-cw"></i>
       <ReactCSSTransitionGroup transitionName="lists"
                                transitionAppear={true}
                                transitionAppearTimeout={1000}
                                transitionEnterTimeout={800}
                                transitionLeaveTimeout={800}>

         {lists}
       </ReactCSSTransitionGroup>

     <i className="icon-plus"></i>
     </div>
    )
  }
}

export default connect()(Content);



