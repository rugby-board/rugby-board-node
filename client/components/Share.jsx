import React from 'react';
import { Link } from 'react-router-dom';

export default class Share extends React.Component {
  render() {
    return (
      <div className="share">
        <Link to="/index">返回</Link> 
        &nbsp;
        <a href="">分享到 Twitter</a>
      </div>
    );
  }
}
