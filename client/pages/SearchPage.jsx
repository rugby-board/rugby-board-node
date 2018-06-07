import { h, Component } from 'preact';

import { searchNews } from '../data';
import { setDocumentTitle } from '../util';
import Heading from '../components/Heading';
import NewsList from '../components/NewsList';
import ErrorMessage from '../components/ErrorMessage';

export default class SearchPage extends Component {
  constructor(props) {
    super(props);

    const searchHeading = {
      id: 'news',
      title: '搜索 (预览版)',
      icon: 'search',
      more_text: '',
      more_link: '',
    };

    setDocumentTitle('搜索');

    this.state = {
      searchHeading,
      data: null,
      page: null, // paginating info, not props.page
      pageNum: props.page || 1,
      title: props.title || '',
      content: props.content || '',
      channel: props.channel || -1,
      event: props.event || -1,
      error: null,
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleChannelChange = this.handleChannelChange.bind(this);
    this.handleEventChange = this.handleEventChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleReturn = this.handleReturn.bind(this);
  }

  componentWillMount() {
    if (this.props.page !== undefined) {
      this.fetchData(this.state.title, this.state.content, this.state.channel, this.state.event, this.state.pageNum);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.props.page) {
      this.setState({
        pageNum: nextProps.page,
      });
      this.fetchData(this.state.title, this.state.content, this.state.channel, this.state.event, nextProps.page);
      window.scrollTo(0, 0);
    }
  }

  fetchData(title, content, channel, event, pageNum) {
    const self = this;

    searchNews(title, content, channel, event, pageNum,
      (json) => {
        self.setState({
          data: json.news,
          page: json.page,
        });
      },
      () => {
        self.setState({
          error: {
            message: '加载数据缓慢，请刷新再试',
          },
        });
      },
    );
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleContentChange(event) {
    this.setState({ content: event.target.value });
  }

  handleChannelChange(event) {
    this.setState({ channel: event.target.value });
  }

  handleEventChange(event) {
    this.setState({ event: event.target.value });
  }

  handleSubmit() {
    const self = this;
    if (this.state.title || this.state.content) {
      this.fetchData(this.state.title, this.state.content, this.state.channel, this.state.event, this.state.pageNum);
    } else {
      this.setState({
        error: {
          message: '请输入搜索内容',
        },
      });
      setTimeout(() => {
        self.setState({ error: null });
      }, 2000);
    }
  }

  handleReturn(event) {
    if (event.keyCode === 13) {
      if (event.target.name === 'title') {
        this.setState({ title: event.target.value });
      }
      if (event.target.name === 'content') {
        this.setState({ content: event.target.value });
      }
      this.handleSubmit();
    }
  }

  handleReset() {
    this.setState({
      title: '',
      content: '',
      channel: -1,
      event: -1,
    });
  }

  render() {
    return (
      <div className="columns">
        <div className="column">
          <Heading data={this.state.searchHeading} />
          <div className="news">
            <div className="news-wrap">
              <div className="news-item search">
                <div className="search-panel">
                  <div className="search-item">
                    <label htmlFor="title">标题</label>
                    <input name="title" type="text" onChange={this.handleTitleChange} onKeyPress={this.handleReturn} value={this.state.title} />
                  </div>
                  <div className="search-item">
                    <label htmlFor="content">内容</label>
                    <input name="content" type="text" onChange={this.handleContentChange} onKeyPress={this.handleReturn} value={this.state.content} />
                  </div>
                  <div className="search-item">
                    <label htmlFor="channel">分类</label>
                    <select name="channel" onChange={this.handleChannelChange} value={this.state.channel}>
                      <option value="-1">全部</option>
                      <option value="0">新闻</option>
                      <option value="1">比分</option>
                    </select>
                  </div>
                  <div className="search-item">
                    <label htmlFor="event">赛事</label>
                    <select name="event" onChange={this.handleEventChange} value={this.state.event}>
                      <option value="-1">全部</option>
                      <option value="1">International Tests</option>
                      <option value="2">Six Nations</option>
                      <option value="3">Rugby Championship</option>
                      <option value="4">Super Rugby</option>
                      <option value="5">Premiership</option>
                      <option value="6">TOP 14</option>
                      <option value="7">PRO 14</option>
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
                      <option value="20">Major League Rugby</option>
                      <option value="0">其它</option>
                    </select>
                  </div>
                </div>
                <div className="search-panel">
                  <div className="search-item">
                    <button onClick={this.handleSubmit}>搜索</button>
                    <button onClick={this.handleReset}>清空</button>
                  </div>
                </div>
              </div>
            </div>
            {this.state.data && this.state.data.length > 0 &&
              <NewsList data={this.state.data} prefix="search" page={this.state.page} />
            }
          </div>
        </div>
        {this.state.error &&
          <ErrorMessage error={this.state.error} />
        }
      </div>
    );
  }
}
