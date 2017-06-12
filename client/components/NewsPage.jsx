import React from 'react';

import Heading from './Heading.jsx';
import NewsList from './NewsList.jsx';

export default class NewsPage extends React.Component {
  constructor(props) {
    super(props);

    const newsHeading = {
      id: 'news',
      title: '新闻',
      more_text: '',
      more_link: ''
    };

    this.state = {
      data: null,
      page: null,
      newsHeading: newsHeading
    };
  }

  componentDidMount() {
    var self = this;
    fetch('/list').then(function (response) {
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
          <Heading data={this.state.newsHeading} />
          <div>
            <NewsList data={this.state.data} page={this.state.page} />
          </div>
        </div>
      </div>
    );
  }
}
