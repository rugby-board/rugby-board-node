import React from 'react';
import NewsList from './NewsList.jsx';

export default class NewsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    var self = this;
    fetch('/list').then(function (response) {
      return response.json();
    }).then(function (json) {
      const newsList = json.news;
      self.setState({data: newsList});
    });
  }

  render() {
    return (
      <NewsList data={this.state.data} />
    );
  }
}
