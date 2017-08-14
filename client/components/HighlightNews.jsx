import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default class HighlightNews extends Component {
  render() {
    NProgress.start();

    let newsList = (<div />);
    if (this.props.data !== undefined) {
      NProgress.done();
      newsList = this.props.data.map((news) => (
        <div className="news-item" key={news.id}>
          <div className="news-title" id={news.id}>
            <i className="fa fa-hashtag" />
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
