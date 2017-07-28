import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import marked from 'marked';
import moment from 'moment';

export default class News extends Component {
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

    const title = this.props.nolink === true ?
                  this.props.data.title :
                  (
                    <Link href={newsLink}>
                      {this.props.data.title}
                    </Link>
                  );

    return (
      <div className="news-wrap">
        <div className="news-item">
          <div className="news-title" id={this.props.data.id}>
            {title}
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
