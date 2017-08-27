import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import { getHomePage } from '../data';
import Heading from '../components/Heading';
import Create from '../components/admin/Create';
import Edit from '../components/admin/Edit';
import RugbyDictQuery from '../components/admin/RugbyDictQuery';
import PlanetRugbyResult from '../components/admin/PlanetRugbyResult';
import ToolBox from '../components/admin/ToolBox';

export default class AdminPage extends Component {
  constructor(props) {
    super(props);

    const adminHeading = {
      id: 'admin',
      title: 'Admin',
      icon: 'dashboard',
      more_text: 'Back',
      more_link: '/',
      use_router: 0,
    };

    this.state = {
      adminHeading,
      name: props.name,
      recent: null,
      newsId: 0,
    };

    this.getRecentNews();
  }

  componentWillMount() {
    this.switchOperation(this.state.name);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.name,
    });

    this.switchOperation(nextProps.name);
  }

  getRecentNews() {
    const self = this;
    getHomePage(
      (json) => {
        self.setState({
          recent: [
            ...json.highlight,
            ...json.news.slice(10),
            ...json.results,
          ],
        });
      },
      () => {},
    );
  }

  switchOperation(name) {
    let operation;
    switch (name) {
      case 'create':
        operation = (
          <Create />
        );
        this.setState({ recent: null });
        break;
      case 'edit':
        operation = (
          <Edit />
        );
        this.setState({ recent: null });
        break;
      default:
        operation = (
          <div />
        );
        if (this.state.recent === null) {
          this.getRecentNews();
        }
        break;
    }
    this.setState({ operation });
  }

  render() {
    let recentNews = '';
    if (this.state.recent !== null) {
      recentNews = this.state.recent.map((news) => (
        <div>{ news.id }#{ news.title }</div>
      ));
    }
    return (
      <div>
        <Heading data={this.state.adminHeading} />
        <div className="columns">
          <div className="column column-1-5">
            <div className="news">
              <div className="news-wrap">
                <div className="news-item">
                  <h3>News</h3>
                  <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/create">Create</Link></li>
                    <li><Link href="/edit">Edit</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="column column-2-5">
            {this.state.operation}
            {this.state.recent &&
              <div className="news">
                <div className="news-wrap">
                  <div className="news-item">
                    <div className="news-title">
                      最近新闻
                    </div>
                    <div className="news-content">
                      { recentNews }
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
          <div className="column column-2-5">
            <RugbyDictQuery />
            <PlanetRugbyResult />
            <ToolBox />
          </div>
        </div>
      </div>
    );
  }
}
