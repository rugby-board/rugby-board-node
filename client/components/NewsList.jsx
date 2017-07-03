import React from 'react';

import News from './News';
import Loading from './Loading';
import Pagination from './Pagination';

export default class NewsList extends React.Component {
  static loading() {
    return (
      <Loading text="加载中..." />
    );
  }

  render() {
    let newsList = NewsList.loading();
    let pagination = '';

    if (this.props.data != null) {
      newsList = this.props.data.map((news) =>
        <News key={news.id} data={news} />,
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

NewsList.propTypes = {
  prefix: React.PropTypes.string,
  page: React.PropTypes.shape({
    cur_page: React.PropTypes.number,
    total_page: React.PropTypes.number,
    total: React.PropTypes.number,
  }),
  data: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
    }),
  ),
};

NewsList.defaultProps = {
  prefix: '',
  page: null,
  data: [],
};
