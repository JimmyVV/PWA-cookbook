import './list.scss';
import React, {Component} from 'react';
import {connect} from 'react-redux';


class List extends Component {
  render() {
    return (
      <div className="list">
        <input type="radio" className="list-radio"/><input type="text" defaultValue={this.props.content} placeholder="TODO 内容" className="list-input"/>
      </div>
    )
  }
}

export default connect()(List);



