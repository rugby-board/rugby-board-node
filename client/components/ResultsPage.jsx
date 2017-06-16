import React from 'react';

import Heading from './Heading.jsx';
import NewsList from './NewsList.jsx';

export default class ResultsPage extends React.Component {
  constructor(props) {
    super(props);

    const resultsHeading = {
      id: 'news',
      title: '比分',
      more_text: '',
      more_link: ''
    };

    this.state = {
      data: null,
      page: null,
      resultsHeading: resultsHeading,
      queryString: props.location.search
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.search != this.props.location.search) {
      this.setState({
        queryString: nextProps.location.search
      });
      this.fetchData(nextProps.location.search);
    }
  }

  componentWillMount() {
    this.fetchData(this.state.queryString);
  }

  render() {
    return (
      <div className="columns">
        <div className="column">
          <Heading data={this.state.resultsHeading} />
          <div>
            <NewsList data={this.state.data} prefix="results" page={this.state.page} />
          </div>
        </div>
      </div>
    );
  }

  fetchData(queries) {
    var self = this;
    const queryString = require('query-string');
    const parsedHash = queryString.parse(queries);
    var url = '/list?channel=1';
    if (parsedHash.page != null) {
      url += ('&page=' + parsedHash.page);
    }
    fetch(url).then(function (response) {
      return response.json();
    }).then(function (json) {
      self.setState({
        data: json.news,
        page: json.page
      });
    });
  }
}
