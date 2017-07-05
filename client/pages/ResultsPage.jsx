import { h, Component } from 'preact';
import * as queryString from 'query-string';

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
    };
  }

  componentWillMount() {
    this.fetchData(this.state.queryString);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.search !== this.props.location.search) {
      this.setState({
        queryString: nextProps.location.search,
      });
      this.fetchData(nextProps.location.search);
    }
  }

  fetchData(queries) {
    const self = this;
    const parsedHash = queryString.parse(queries);
    let url = '/api/list?channel=1';
    if (parsedHash.page != null) {
      url += ('&page=' + parsedHash.page);
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
