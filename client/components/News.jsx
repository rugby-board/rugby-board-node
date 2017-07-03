import React from 'react';
import { Link } from 'react-router-dom';

export default class News extends React.Component {
  markdown(content) {
    const marked = require('marked');
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
    });
    return { __html: marked(content) };
  }

  render() {
    const moment = require('moment');
    const dateString = moment(this.props.data.created_at).format('HH:mm YYYY-MM-DD');

    const newsLink = '/news/' + this.props.data.id;
    let contentClass = 'news-content';
    if (this.props.data.channel === 1) {
      contentClass += ' news-result';
    }
    return (
      <div className="news-wrap">
        <div className="news-item">
          <div className="news-title" id={this.props.data.id}>
            <Link to={newsLink}>
              {this.props.data.title}
            </Link>
          </div>
          <div
            className={contentClass}
            dangerouslySetInnerHTML={this.markdown(this.props.data.content)} />
          <div className="news-footer">
            <div className="news-time">
              {dateString}
            </div>
            <div className="news-channel">
              {this.props.data.channel_text} | {this.props.data.event_text}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
