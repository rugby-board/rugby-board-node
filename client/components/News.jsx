import React from 'react';
import { Link } from 'react-router-dom';

import marked from 'marked';
import moment from 'moment';

export default class News extends React.Component {
  static markdown(content) {
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
            dangerouslySetInnerHTML={News.markdown(this.props.data.content)}
          />
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

News.propTypes = {
  data: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
    channel: React.PropTypes.number.isRequired,
    created_at: React.PropTypes.string.isRequired,
    channel_text: React.PropTypes.string.isRequired,
    event_text: React.PropTypes.string.isRequired,
  }).isRequired,
};
