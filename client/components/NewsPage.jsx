import React from 'react';

import Heading from './Heading';
import NewsList from './NewsList';

export default class NewsPage extends React.Component {
  constructor(props) {
    super(props);

    const newsHeading = {
      id: 'news',
      title: '新闻',
      more_text: '',
      more_link: '',
    };

    this.state = {
      data: null,
      page: null,
      newsHeading: newsHeading,
      queryString: props.location.search,
      name: props.match.params.name,
    };
  }

  componentWillMount() {
    this.fetchData(this.state.queryString);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.search != this.props.location.search) {
      this.setState({
        queryString: nextProps.location.search
      });
      this.fetchData(nextProps.location.search);
    }
  }

  fetchData(queries) {
    var self = this;
    const queryString = require('query-string');
    const parsedHash = queryString.parse(queries);
    let url = '/list?channel=0';
    if (parsedHash.page !== null) {
      url += ('&page=' + parsedHash.page);
    }
    fetch(url).then((response) => {
      return response.json();
    }).then((json) => {
      self.setState({
        data: json.news,
        page: json.page,
      });
    });
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
}
