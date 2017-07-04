import React from 'react';

import Loading from './Loading';
import Share from './Share';
import News from './News';

export default class NewsItemPage extends React.Component {
  static loading() {
    return (
      <Loading text="加载中..." />
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      data: null,
      id: props.match.params.id,
    };
  }

  componentDidMount() {
    const self = this;
    fetch(this.props.match.url)
      .then((response) => { return response.json(); })
      .then((json) => {
        self.setState({
          data: json.news,
        });
      });
  }

  render() {
    let newsItem = NewsItemPage.loading();
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

NewsItemPage.propTypes = {
  match: React.PropTypes.shape({
    url: React.PropTypes.string.isRequired,
    params: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
