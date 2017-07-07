import React from 'react';

import Editor from './Editor';

export default class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newsId: '',
      news: '',
      result: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleGet = this.handleGet.bind(this);
    this.handleSet = this.handleSet.bind(this);
    this.handleUnset = this.handleUnset.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleRecover = this.handleRecover.bind(this);
  }

  handleGet() {
    let self = this;
    const url = '/news/' + this.state.newsId;
    fetch(url).then(function (response) {
      return response.json();
    }).then(function (json) {
      self.setState({
        news: json.news,
      });
    });
  }

  handleReset() {
    this.setState({ news: '' });
  }

  handleSet() {
  }

  handleUnset() {
  }

  handleDelete() {
  }

  handleRecover() {
  }

  handleChange(event) {
    this.setState({ newsId: event.target.value });
  }

  render() {
    return (
      <div className="news">
        <div className="news-wrap">
          <div className="news-item">
            <div className="news-title">
              Edit News
            </div>
            <div className="news-content">
              <input
                type="text"
                value={this.state.newsId}
                onChange={this.handleChange}
              />

              <button onClick={this.handleGet}>
                Get
              </button>
              <button onClick={this.handleReset}>
                Reset
              </button>
              {this.state.news &&
                <div className="admin-buttons">
                  <button onClick={this.handleGet}>
                    Update
                  </button>
                  <button onClick={this.handleSet}>
                    Highlight
                  </button>
                  <button onClick={this.handleUnset}>
                    Unhighlight
                  </button>
                  <button onClick={this.handleDelete}>
                    Delete
                  </button>
                  <button onClick={this.handleRecover}>
                    Recover
                  </button>
                </div>
              }
            </div>
          </div>
          <div className="news-item">
            {this.state.news &&
              <Editor data={this.state.news} />
            }
          </div>
        </div>
      </div>
    );
  }
}
