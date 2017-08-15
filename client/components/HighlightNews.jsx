import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class HighlightNews extends Component {
  render() {
    let newsList = (<div />);

    if (this.props.data !== undefined) {
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
