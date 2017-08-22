import { h, Component } from 'preact';

import { getNewsItem } from '../data';
import { setDocumentTitle } from '../util';
import Heading from '../components/Heading';
import Share from '../components/Share';
import News from '../components/News';
import RecommendNews from '../components/RecommendNews';
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
      adjacent: null,
      related: null,
      id: props.id,
      newsHeading,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentWillReceiveProps(nextProps) {
    const newsHeading = {
      id: 'news',
      title: `新闻详情 #${nextProps.id}`,
      icon: 'newspaper-o',
      more_text: '',
      more_link: '',
    };

    this.setState({
      data: null,
      adjacent: null,
      related: null,
      id: nextProps.id,
      newsHeading,
    });

    this.fetchData();
  }

  fetchData() {
    const self = this;
    getNewsItem(this.state.id,
      (json) => {
        self.setState({
          data: json.news,
          adjacent: json.adjacent,
          related: json.related,
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
          <RecommendNews id={this.state.id} adjacent={this.state.adjacent} related={this.state.related} />
        </div>
        {this.state.error &&
          <ErrorMessage error={this.state.error} />
        }
      </div>
    );
  }
}
