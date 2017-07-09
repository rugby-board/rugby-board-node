import { h, Component } from 'preact';

import { createNews } from '../../data';
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
      submitResult: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const newsForm = {
      title: this.state.news.title,
      content: this.state.news.content,
      channel: this.state.news.channel,
      event: this.state.news.event,
    };
    createNews(newsForm, (json) => {
      if (json.status === 0) {
        const submitResult = (
          <span>
            Create successfully:
            <a href={`/news/${json.news.id}`} target="_blank">
              #{json.news.id}
            </a>
          </span>
        );
        this.setState({ submitResult });
      } else {
        let message = '';
        for (const [k, v] of Object.entries(json.message)) {
          message += `${k}: ${v}; `;
        }
        this.setState({
          submitResult: `Create failed: ${json.status}: ${message}`,
        });
      }
    });
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
            <hr />
            <div className="news-title">
              Finish
            </div>
            <div className="news-content">
              <button onClick={this.handleSubmit}>
                Submit
              </button>
              <div className="submit-result">{ this.state.submitResult }</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
