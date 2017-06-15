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
      resultsHeading: resultsHeading
    };
  }

  componentDidMount() {
    var self = this;
    fetch('/list?channel=1').then(function (response) {
      return response.json();
    }).then(function (json) {
      self.setState({
        data: json.news,
        page: json.page
      });
    });
  }

  render() {
    return (
      <div className="columns">
        <div className="column">
          <Heading data={this.state.resultsHeading} />
          <div>
            <NewsList data={this.state.data} page={this.state.page} />
          </div>
        </div>
      </div>
    );
  }
}
