import React from 'react';

import News from './News';
import Loading from './Loading';
import Pagination from './Pagination';

export default class NewsList extends React.Component {
  loading() {
    return (
      <Loading text="加载中..." />
    );
  }

  render() {
    let newsList = this.loading();
    let pagination = '';

    if (this.props.data != null) {
      newsList = this.props.data.map((news) =>
        <News key={news.id} data={news} />
      );
    }

    if (this.props.page != null) {
      pagination = <Pagination prefix={this.props.prefix} data={this.props.page} />;
    }

    return (
      <div className="columns">
        <div className="column">
          <div className="news">
            {newsList}
          </div>
          <div className="news">
            {pagination}
          </div>
        </div>
      </div>
    );
  }
}
