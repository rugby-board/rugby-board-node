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

  /* eslint-disable react/no-danger */
  static getResultDom(result) {
    const { id, titleWithLink, markdownContent, dateString, channelText, eventText } = result;
    return (
      <div className="news-wrap">
        <div className="news-item">
          <div className="news-title" id={id}>
            {titleWithLink}
          </div>
          <div
            className="news-content news-result"
            dangerouslySetInnerHTML={markdownContent}
          />
          <div className="news-footer">
            <div className="news-time">
              {dateString}
            </div>
            <div className="news-channel">
              {channelText} | {eventText}
            </div>
          </div>
        </div>
      </div>
    );
  }

  static getNewsDom(news) {
    const { id, titleWithLink, markdownContent, dateString, channelText, eventText } = news;
    return (
      <div className="news-wrap">
        <div className="news-item">
          <div className="news-title" id={id}>
            {titleWithLink}
          </div>
          <div
            className="news-content"
            dangerouslySetInnerHTML={markdownContent}
          />
          <div className="news-footer">
            <div className="news-time">
              {dateString}
            </div>
            <div className="news-channel">
              {channelText} | {eventText}
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const news = this.props.data;
    const newsLink = '/news/' + news.id;
    news.titleWithLink = this.props.nolink === true ?
                  news.title :
                  (
                    <Link href={newsLink}>
                      {news.title}
                    </Link>
                  );
    news.markdownContent = News.markdown(news.content);
    news.dateString = moment(news.created_at).format('HH:mm YYYY-MM-DD');
    news.channelText = news.channel_text;
    news.eventText = news.event_text;

    if (this.props.showResultStyle) {
      return News.getResultDom(news);
    }

    return News.getNewsDom(news);
  }
}
