import { h, Component } from 'preact';

import Heading from '../components/Heading';
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
    let url = '/api/list?channel=1';
    if (pageNum !== undefined) {
      url += ('&page=' + this.state.pageNum);
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
          <Heading data={this.state.resultsHeading} />
          <div>
            <NewsList data={this.state.data} prefix="results" page={this.state.page} />
          </div>
        </div>
      </div>
    );
  }
}
