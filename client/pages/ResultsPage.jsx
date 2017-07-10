import { h, Component } from 'preact';

import { getNewsByChannel } from '../data';
import { setDocumentTitle } from '../util';
import Heading from '../components/Heading';
import Error from '../components/Error';
import NewsList from '../components/NewsList';

export default class ResultsPage extends Component {
  constructor(props) {
    super(props);

    const resultsHeading = {
      id: 'news',
      title: '比分',
      more_text: '',
      more_link: '',
    };

    setDocumentTitle('比分');

    this.state = {
      data: null,
      page: null,
      resultsHeading,
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

    getNewsByChannel(
      1,
      pageNum,
      (json) => {
        self.setState({
          data: json.news,
          page: json.page,
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
        <div className="column">
          <Heading data={this.state.resultsHeading} />
          <div>
            <NewsList data={this.state.data} prefix="results" page={this.state.page} />
          </div>
        </div>
        <div className="error-container">{ this.state.error }</div>
      </div>
    );
  }
}
