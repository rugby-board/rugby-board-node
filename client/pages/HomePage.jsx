import { h, Component } from 'preact';

import { getHomePage } from '../data';
import { setDocumentTitle } from '../util';
import Heading from '../components/Heading';
import Error from '../components/Error';
import NewsList from '../components/NewsList';
import HighlightNews from '../components/HighlightNews';
import WikiList from '../components/WikiList';

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    const newsHeading = {
      id: 'latest-news',
      title: '新闻',
      more_text: '更多',
      more_link: '/news',
    };

    const resultsHeading = {
      id: 'latest-results',
      title: '比分',
      more_text: '更多',
      more_link: '/results',
    };

    const eventHeading = {
      id: 'event-intro',
      title: '赛事介绍',
      more_text: '更多',
      more_link: '/wiki',
    };

    setDocumentTitle('');

    this.state = {
      newsHeading,
      resultsHeading,
      eventHeading,
      error: ''
    };
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    const self = this;

    getHomePage(
      (json) => {
        self.setState({
          highlight: json.highlight,
          news: json.news,
          results: json.results,
        });
      },
      () => {
        const error = (
          <Error text="加载失败，请刷新重试" />
        );
        this.setState({ error });
      },
    );
  }

  render() {
    return (
      <div className="columns">
        <div className="column column-2-3">
          <div>
            <Heading data={this.state.newsHeading} />
            <HighlightNews data={this.state.highlight} />
            <NewsList data={this.state.news} />
          </div>
        </div>
        <div className="column column-1-3">
          <div>
            <Heading data={this.state.resultsHeading} />
            <NewsList data={this.state.results} />
          </div>
          <div>
            <Heading data={this.state.eventHeading} />
            <WikiList />
          </div>
        </div>
        <div className="error-container">{ this.state.error }</div>
      </div>
    );
  }
}
