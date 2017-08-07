import { h, Component } from 'preact';

import { getNewsItem } from '../data';
import { setDocumentTitle } from '../util';
import Heading from '../components/Heading';
import Loading from '../components/Loading';
import Share from '../components/Share';
import News from '../components/News';
import ErrorMessage from '../components/ErrorMessage';

export default class NewsItemPage extends Component {
  static loading() {
    return (
      <Loading text="加载中..." />
    );
  }

  constructor(props) {
    super(props);

    const newsHeading = {
      id: 'news',
      title: `新闻详情 #${props.id}`,
      icon: 'newspaper-o',
      more_text: '',
      more_link: '',
    };

    this.state = {
      data: null,
      id: props.id,
      newsHeading,
    };
  }

  componentDidMount() {
    const self = this;
    getNewsItem(this.state.id,
      (json) => {
        self.setState({
          data: json.news,
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
    let newsItem = NewsItemPage.loading();
    if (this.state.data != null) {
      newsItem = (
        <div className="news">
          <News key={this.state.id} data={this.state.data} nolink />
          <Share data={this.state.data} />
        </div>
      );

      setDocumentTitle(this.state.data.title);
    }


    return (
      <div className="columns">
        <div className="column">
          <Heading data={this.state.newsHeading} />
          {newsItem}
        </div>
        {this.state.error &&
          <ErrorMessage error={this.state.error} />
        }
      </div>
    );
  }
}
