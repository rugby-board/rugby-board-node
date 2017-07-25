import { h, Component } from 'preact';

import { getNewsByChannel } from '../data';
import { setDocumentTitle } from '../util';
import Heading from '../components/Heading';
import NewsList from '../components/NewsList';

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
    }
  }

  fetchData(pageNum) {
    const self = this;

    getNewsByChannel(0, pageNum, (json) => {
      self.setState({
        data: json.news,
        page: json.page,
      });
    });
  }

  render() {
    return (
      <div className="columns">
        <div className="column">
          <Heading data={this.state.newsHeading} />
          <div>
            <NewsList data={this.state.data} prefix="news" page={this.state.page} />
          </div>
        </div>
      </div>
    );
  }
}
