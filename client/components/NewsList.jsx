import { h, Component } from 'preact';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import News from './News';
import Pagination from './Pagination';

export default class NewsList extends Component {
  render() {
    let newsList = (<div />);
    let pagination = '';

    NProgress.configure({ showSpinner: false });
    NProgress.start();

    if (this.props.data != null) {
      newsList = this.props.data.map((news) =>
        <News key={news.id} data={news} />,
      );

      NProgress.done();
    }

    if (this.props.page != null) {
      pagination = <Pagination prefix={this.props.prefix} data={this.props.page} />;
    }

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
