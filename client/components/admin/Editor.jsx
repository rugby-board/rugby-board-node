import { h, Component } from 'preact';

import moment from 'moment';
import News from '../News';

export default class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleChannelChange = this.handleChannelChange.bind(this);
    this.handleEventChange = this.handleEventChange.bind(this);
  }

  handleTitleChange(event) {
    this.modifyData({ title: event.target.value });
  }

  handleContentChange(event) {
    this.modifyData({ content: event.target.value });
  }

  handleChannelChange(event) {
    this.modifyData({
      channel: parseInt(event.target.value, 10),
      channel_text: event.target.options[event.target.selectedIndex].text,
    });
  }

  handleEventChange(event) {
    this.modifyData({
      event: parseInt(event.target.value, 10),
      event_text: event.target.options[event.target.selectedIndex].text,
    });
  }

  /* eslint-disable guard-for-in */
  modifyData(assignments) {
    const modifiedData = this.state.data;
    for (const key in assignments) {
      modifiedData[key] = assignments[key];
    }
    this.setState({ data: modifiedData });
  }

  render() {
    if (this.state.data.created_at === undefined) {
      this.modifyData({ created_at: moment().format() });
    }
    if (this.state.data.channel_text === undefined) {
      this.modifyData({ channel_text: '新闻' });
    }
    if (this.state.data.event_text === undefined) {
      this.modifyData({ event_text: '其它' });
    }
    return (
      <div className="admin">
        <div className="news-title">
          <input
            type="text"
            value={this.state.data.title}
            onChange={this.handleTitleChange}
          />
        </div>
        <div className="news-content">
          <textarea
            value={this.state.data.content}
            onChange={this.handleContentChange}
          />
          <div>
            <select
              value={this.state.data.channel}
              onChange={this.handleChannelChange}
            >
              <option value="0">新闻</option>
              <option value="1">比分</option>
            </select>
            <select
              value={this.state.data.event}
              onChange={this.handleEventChange}
            >
              <option value="0">其它</option>
              <option value="1">International Tests</option>
              <option value="2">Six Nations</option>
              <option value="3">Rugby Championship</option>
              <option value="4">Super Rugby</option>
              <option value="5">Premiership</option>
              <option value="6">TOP 14</option>
              <option value="7">PRO 12</option>
              <option value="8">European Champions Cup</option>
              <option value="9">Rugby World Cup</option>
              <option value="10">British and Irish Lions</option>
              <option value="11">European Challenge Cup</option>
              <option value="12">Currie Cup</option>
              <option value="13">Top League</option>
              <option value="14">Rugby Sevens</option>
              <option value="15">Women&#39;s Rugby</option>
              <option value="16">Barbarians</option>
              <option value="17">Anglo Welsh Cup</option>
              <option value="18">Mitre 10 Cup</option>
              <option value="19">National Rugby Championship</option>
            </select>
          </div>
        </div>
        <hr />
        <div className="news-title">
          Preview
        </div>
        <div className="news-content">
          <News data={this.state.data} />
        </div>
      </div>
    );
  }
}
