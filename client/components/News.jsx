import React from 'react';

require('./css/news.scss')

export default class News extends React.Component {
  render() {
    return (
      <div className="news">
        <div className="news-title" id={this.props.id}>
          <a href={this.props.title}>
            {this.props.title}
          </a>
        </div>
        <div className="news-content">
          {this.props.content}
        </div>
        <div className="news-footer">
          <div className="news-time">
            {this.props.created_at}
          </div>
          <div className="news-channel">
            {this.props.channel}
          </div>
        </div>
      </div>
    );
  }
}
