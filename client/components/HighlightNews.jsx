import { h, render, Component } from 'preact';
import { Link } from 'preact-router/match';

import Loading from './Loading';

export default class HighlightNews extends Component {
  static loading() {
    return (
      <Loading text="加载中..." />
    );
  }

  render() {
    let newsList = HighlightNews.loading();
    if (this.props.data !== undefined) {
      newsList = this.props.data.map((news) => (
        <div className="news-item" key={news.id}>
          <div className="news-title" id={news.id}>
            <Link href={`/news/${news.id}`}>{news.title}</Link>
          </div>
        </div>
      ));
    }

    return (
      <div className="columns">
        <div className="column">
          <div className="news">
            <div className="news-wrap news-headline">
              {newsList}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
