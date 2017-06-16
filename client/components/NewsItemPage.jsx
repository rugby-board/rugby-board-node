import React from 'react';

import Heading from './Heading.jsx';
import Loading from './Loading.jsx';
import Share from './Share.jsx';
import News from './News.jsx';

export default class NewsItemPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      id: props.match.params.id
    };
  }

  loading() {
    return (
      <Loading text="加载中..." />
    );
  }

  componentDidMount() {
    var self = this;
    fetch(this.props.match.url).then(function (response) {
      return response.json();
    }).then(function (json) {
      self.setState({
        data: json.news
      });
    });
  }

  render() {
    var newsItem = this.loading();
    if (this.state.data != null) {
      newsItem = (
        <div className="news">
          <News key={this.state.id} data={this.state.data} />
          <Share />
        </div>
      );
    }

    return (
      <div className="columns">
        <div className="column">
          {newsItem}
        </div>
      </div>
    );
  }
}
