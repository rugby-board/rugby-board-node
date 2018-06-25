import { h, Component } from 'preact';

import { getNewsByChannel } from '../data';
import { setDocumentTitle } from '../util';
import Heading from '../components/Heading';
import NewsList from '../components/NewsList';
import ErrorMessage from '../components/ErrorMessage';

export default class NewsPage extends Component {
  constructor(props) {
    super(props);

    const newsHeading = {
      id: 'news',
      title: '新闻',
      icon: 'newspaper-o',
      more_text: '',
      more_link: '',
    };

    setDocumentTitle('新闻');

    this.state = {
      data: null,
      page: null,
      newsHeading,
      pageNum: props.page || 1,
    };
  }

  componentWillMount() {
    this.fetchData(this.state.pageNum);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.props.page) {
      this.setState({
        pageNum: nextProps.page,
      });
      this.fetchData(nextProps.page);
      window.scrollTo(0, 0);
    }
  }

  fetchData(pageNum) {
    const self = this;

    getNewsByChannel(0, pageNum,
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

  render() {
    return (
      <div className="columns">
        <div className="column">
          <Heading data={this.state.newsHeading} />
          <NewsList data={this.state.data} prefix="news" page={this.state.page} />
        </div>
        {this.state.error &&
          <ErrorMessage error={this.state.error} />
        }
      </div>
    );
  }
}
