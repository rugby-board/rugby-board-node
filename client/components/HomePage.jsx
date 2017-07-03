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
      newsHeading,
      resultsHeading,
      eventHeading,
    };
  }

  componentWillMount() {
    this.fetchData(this.state.queryString);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      queryString: nextProps.location.search,
    });

    this.fetchData(nextProps.location.search);
  }

  fetchData() {
    let self = this;
    const url = '/index';
    fetch(url)
      .then((response) => { return response.json(); })
      .then((json) => {
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

HomePage.propTypes = {
  location: React.PropTypes.shape({
    search: React.PropTypes.string.isRequired,
  }).isRequired,
};
