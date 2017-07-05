import { h, Component } from 'preact';

import Heading from '../components/Heading';
import NewsList from '../components/NewsList';

export default class NewsPage extends Component {
  constructor(props) {
    super(props);

    const newsHeading = {
      id: 'news',
      title: '新闻',
      more_text: '',
      more_link: '',
    };

    console.log(props);
    console.log(this.page);

    this.state = {
      data: null,
      page: null,
      newsHeading,
      pageNum: props.page || 0,
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
    let url = '/api/list?channel=0';
    if (pageNum !== undefined) {
      url += ('&page=' + this.state.page);
    }
    fetch(url)
      .then((response) => { return response.json(); })
      .then((json) => {
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
