import { h, Component } from 'preact';

import { getNewsItem } from '../../data';
import Editor from './Editor';

export default class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newsId: '',
      news: '',
      result: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleGet = this.handleGet.bind(this);
    this.handleHighlight = this.handleHighlight.bind(this);
    this.handleUnhighlight = this.handleUnhighlight.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleRecover = this.handleRecover.bind(this);
  }

  handleGet() {
    const self = this;
    this.setState({ news: '' });

    getNewsItem(this.state.newsId, (json) => {
      self.setState({
        news: json.news,
      });
    });
  }

  handleReset() {
    this.setState({ news: '' });
  }

  handleUpdate() {
  }

  handleHighlight() {
  }

  handleUnhighlight() {
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
                  <button onClick={this.handleUpdate}>
                    Update
                  </button>
                  <button onClick={this.handleHighlight}>
                    Highlight
                  </button>
                  <button onClick={this.handleUnhighlight}>
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
