import { h, Component } from 'preact';

import News from './News';
import Pagination from './Pagination';

export default class NewsList extends Component {
  render() {
    let newsList = (<div />);
    let pagination = '';

    if (this.props.data != null) {
      newsList = this.props.data.map((news) =>
        <News key={news.id} data={news} />,
      );
    }

    if (this.props.page != null) {
      pagination = <Pagination prefix={this.props.prefix} data={this.props.page} />;
    }
    console.log(newsList);

    return (
      <div className="columns">
        <div className="column">
          <div className="news">
            {newsList}
          </div>
          <div className="news">
            {pagination}
          </div>
        </div>
      </div>
    );
  }
}
