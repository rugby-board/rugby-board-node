import React from 'react';

import Heading from './Heading.jsx';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    const newsHeading = {
      id: 'latest-news',
      title: '新闻',
      more_text: '更多',
      more_link: '#news'
    };

    const resultsHeading = {
      id: 'latest-results',
      title: '比分',
      more_text: '更多',
      more_link: '#results'
    };

    this.state = {
      newsHeading: newsHeading,
      resultsHeading: resultsHeading
    };
  }

  render() {
    return (
      <div className="columns">
        <div className="column column-2-3">
          <Heading data={this.state.newsHeading} />
        </div>
        <div className="column column-1-3">
          <Heading data={this.state.resultsHeading} />
        </div>
      </div>
    );
  }
}
