import React from 'react';
import News from './News.jsx';
import Loading from './Loading.jsx';
import Pagination from './Pagination.jsx';

export default class NewsList extends React.Component {
  loading() {
    return (
      <Loading text="加载中..." />
    );
  }

  render() {
    var newsList = this.loading();
    if (this.props.data != null) {
      newsList = this.props.data.map((news) =>
        <News key={news.id} data={news} />
      );
    }

    var pagination = "";
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
