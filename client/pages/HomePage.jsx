import { h, Component } from 'preact';

import { getHomePage } from '../data';
import { setDocumentTitle } from '../util';
import Heading from '../components/Heading';
import NewsList from '../components/NewsList';
import HighlightNews from '../components/HighlightNews';
import WikiList from '../components/WikiList';
import ErrorMessage from '../components/ErrorMessage';

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    const newsHeading = {
      id: 'latest-news',
      title: '新闻',
      icon: 'newspaper-o',
      more_text: '更多',
      more_link: '/news',
    };

    const resultsHeading = {
      id: 'latest-results',
      title: '比分',
      icon: 'table',
      more_text: '更多',
      more_link: '/results',
    };

    const eventHeading = {
      id: 'event-intro',
      title: '赛事介绍',
      icon: 'info-circle',
      more_text: '更多',
      more_link: '/wiki',
    };

    setDocumentTitle('');

    this.state = {
      newsHeading,
      resultsHeading,
      eventHeading,
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
        <div className="column column-3-5">
          <div>
            <Heading data={this.state.newsHeading} />
            <HighlightNews data={this.state.highlight} />
            <NewsList data={this.state.news} />
          </div>
        </div>
        <div className="column column-2-5">
          <div>
            <Heading data={this.state.resultsHeading} />
            <NewsList data={this.state.results} />
          </div>
          <div>
            <Heading data={this.state.eventHeading} />
            <WikiList />
          </div>
        </div>
        {this.state.error &&
          <ErrorMessage error={this.state.error} />
        }
      </div>
    );
  }
}
