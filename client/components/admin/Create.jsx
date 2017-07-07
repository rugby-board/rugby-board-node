import React from 'react';

import Editor from './Editor.jsx';

export default class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      news: {
        title: '',
        content: '',
        channel: 0,
        event: 0
      }
    }
  }

  render() {
    return (
      <div className="news">
        <div className="news-wrap">
          <div className="news-item">
            <div className="news-title">
              Create News
            </div>
            <div className="news-content">
            </div>
          </div>
          <div className="news-item">
            <Editor data={this.state.news} />
          </div>
        </div>
      </div>
    );
  }
}
