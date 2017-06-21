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
      newsHeading: newsHeading,
      queryString: props.location.search,
      name: props.match.params.name
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
          <Heading data={this.state.newsHeading} />
          <div>
            <NewsList data={this.state.data} prefix="news" page={this.state.page} />
          </div>
        </div>
      </div>
    );
  }

  fetchData(queries) {
    var self = this;
    const queryString = require('query-string');
    const parsedHash = queryString.parse(queries);
    var url = '/list?channel=0';
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
