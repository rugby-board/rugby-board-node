import React from 'react';

export default class Pagination extends React.Component {
  render() {
    return (
      <div className="news-item">
        <div className="news-title" id="pagination">
          <span>当前页: {this.props.data.cur_page} | </span>
          <span>总数: {this.props.data.total} | </span>
          <a href="">上一页</a>
          <a href="">下一页</a>
        </div>
      </div>
    );
  }
}
