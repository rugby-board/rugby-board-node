import { h, Component } from 'preact';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import { getNewsItem } from '../data';
import { setDocumentTitle } from '../util';
import Heading from '../components/Heading';
import Share from '../components/Share';
import News from '../components/News';
import ErrorMessage from '../components/ErrorMessage';

export default class NewsItemPage extends Component {
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
    let newsItem = (<div />);

    NProgress.configure({ showSpinner: false });
    NProgress.start();

    if (this.state.data != null) {
      NProgress.done();
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
