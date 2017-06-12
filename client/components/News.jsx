import React from 'react';

export default class News extends React.Component {
  render() {
    return (
      <div className="news-item">
        <div className="news-title" id={this.props.data.id}>
          <a href={this.props.data.title}>
            {this.props.data.title}
          </a>
        </div>
        <div className="news-content">
          {this.props.data.content}
        </div>
        <div className="news-footer">
          <div className="news-time">
            {this.props.data.created_at}
          </div>
          <div className="news-channel">
            {this.props.data.channel}
          </div>
        </div>
      </div>
    );
  }
}
