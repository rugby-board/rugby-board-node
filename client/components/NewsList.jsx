import React from 'react';
import News from './News.jsx';

export default class NewsList extends React.Component {
  render() {
    const newsList = this.props.data.map((news) =>
      <News key={news.id} data={news} />
    );

    return (
      <div className="columns">
        <div className="column">
          <div className="news">
            {newsList}
          </div>
        </div>
      </div>
    );
  }
}
