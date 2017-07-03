import React from 'react';
import { Link } from 'react-router-dom';

import News from './News';
import Loading from './Loading';

export default class HighlightNews extends React.Component {
  loading() {
    return (
      <Loading text="加载中..." />
    );
  }

  render() {
    var newsList = this.loading();
    if (this.props.data != null) {
      newsList = this.props.data.map((news) =>
        <div className="news-item" key={news.id}>
          <div className="news-title" id={news.id}>
            <Link to={"/news/" + news.id}>{news.title}</Link>
          </div>
        </div>
      );
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
