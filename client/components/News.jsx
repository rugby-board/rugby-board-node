import React from 'react';

export default class News extends React.Component {
  markdown(content) {
    var marked = require('marked');
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false
    });
    return {__html: marked(content)};
  }

  render() {
    console.log(this.props.data.created_at);
    const newsDate = new Date(this.props.data.created_at);
    const today = new Date();
    var dateString = newsDate.getFullYear() + '-' + newsDate.getMonth() + '-' + newsDate.getDate();
    if (today.getDate() == newsDate.getDate() && today.getMonth() == newsDate.getMonth() && today.getFullYear() == newsDate.getFullYear()) {
      dateString = newsDate.getHours() + ':' + newsDate.getMinutes();
    }
    return (
      <div className="news-item">
        <div className="news-title" id={this.props.data.id}>
          <a href={"/news/" + this.props.data.id}>
            {this.props.data.title}
          </a>
        </div>
        <div className="news-content" dangerouslySetInnerHTML={this.markdown(this.props.data.content)}>
        </div>
        <div className="news-footer">
          <div className="news-time">
            {dateString}
          </div>
          <div className="news-channel">
            {this.props.data.channel_text} | {this.props.data.event_text}
          </div>
        </div>
      </div>
    );
  }
}
