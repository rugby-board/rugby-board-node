import { h, Component } from 'preact';

import Editor from './Editor';

export default class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: {
        title: 'Title',
        content: 'Content',
        channel: 0,
        event: 0,
      },
    };
  }

  render() {
    return (
      <div className="news">
        <div className="news-wrap">
          <div className="news-item">
            <div className="news-title">
              Create News
            </div>
            <div className="news-content" />
          </div>
          <div className="news-item">
            <Editor data={this.state.news} />
          </div>
        </div>
      </div>
    );
  }
}
