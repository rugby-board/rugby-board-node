import { h, Component } from 'preact';

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

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data,
    });
  }

  handleTitleChange(event) {
    this.setState({ data: { title: event.target.value } });
  }

  handleContentChange(event) {
    this.setState({ data: { content: event.target.value } });
  }

  handleChannelChange(event) {
    this.setState({ data: { channel: event.target.value } });
  }

  handleEventChange(event) {
    this.setState({ data: { event: event.target.value } });
  }

  render() {
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
          <select
            value={this.state.data.channel}
            onChange={this.handleChannelChange}
          >Channel
            <option value="0">新闻</option>
            <option value="1">比分</option>
          </select>
          <select
            value={this.state.data.event}
            onChange={this.handleEventChange}
          >Event
            <option value="0">其它</option>
            <option value="1">国际测试赛</option>
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
    );
  }
}
