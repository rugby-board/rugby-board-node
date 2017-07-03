import React from 'react';

import Loading from './Loading';
import Share from './Share';
import News from './News';

export default class NewsItemPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      id: props.match.params.id,
    };
  }

  loading() {
    return (
      <Loading text="加载中..." />
    );
  }

  componentDidMount() {
    let self = this;
    fetch(this.props.match.url).then(function (response) {
      return response.json();
    }).then(function (json) {
      self.setState({
        data: json.news
      });
    });
  }

  render() {
    let newsItem = this.loading();
    if (this.state.data != null) {
      newsItem = (
        <div className="news">
          <News key={this.state.id} data={this.state.data} />
          <Share data={this.state.data} />
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
