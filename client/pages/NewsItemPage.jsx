import { h, Component } from 'preact';

import { getNewsItem } from '../data';
import { setDocumentTitle } from '../util';
import Loading from '../components/Loading';
import Share from '../components/Share';
import News from '../components/News';

export default class NewsItemPage extends Component {
  static loading() {
    return (
      <Loading text="加载中..." />
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      data: null,
      id: props.id,
    };
  }

  componentDidMount() {
    const self = this;
    getNewsItem(this.state.id, (json) => {
      self.setState({
        data: json.news,
      });
    });
  }

  render() {
    let newsItem = NewsItemPage.loading();
    if (this.state.data != null) {
      newsItem = (
        <div className="news">
          <News key={this.state.id} data={this.state.data} />
          <Share data={this.state.data} />
        </div>
      );

      setDocumentTitle(this.state.data.title);
    }


    return (
      <div className="columns">
        <div className="column">
          {newsItem}
        </div>
      </div>
    );
  }
}
