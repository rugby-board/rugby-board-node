import React from 'react';

import Heading from './Heading';
import NewsList from './NewsList';
import HighlightNews from './HighlightNews';
import WikiList from './WikiList';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    const newsHeading = {
      id: 'latest-news',
      title: '新闻',
      more_text: '更多',
      more_link: '/news',
    };

    const resultsHeading = {
      id: 'latest-results',
      title: '比分',
      more_text: '更多',
      more_link: '/results',
    };

    const eventHeading = {
      id: 'event-intro',
      title: '赛事介绍',
      more_text: '更多',
      more_link: '/wiki',
    };

    this.state = {
      newsHeading: newsHeading,
      resultsHeading: resultsHeading,
      eventHeading: eventHeading,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      queryString: nextProps.location.search,
    });
      
    this.fetchData(nextProps.location.search);
  }

  componentWillMount() {
    this.fetchData(this.state.queryString);
  }

  fetchData(queries) {
    let self = this;
    let url = '/index';
    fetch(url).then(function (response) {
      return response.json();
    }).then(function (json) {
      self.setState({
        highlight: json.highlight,
        news: json.news,
        results: json.results,
      });
    });
  }

  render() {
    return (
      <div className="columns">
        <div className="column column-2-3">
          <div>
            <Heading data={this.state.newsHeading} />
            <HighlightNews data={this.state.highlight} />
            <NewsList data={this.state.news} />
          </div>
        </div>
        <div className="column column-1-3">
          <div>
            <Heading data={this.state.resultsHeading} />
            <NewsList data={this.state.results} />
          </div>
          <div>
            <Heading data={this.state.eventHeading} />
            <WikiList />
          </div>
        </div>
      </div>
    );
  }
}
