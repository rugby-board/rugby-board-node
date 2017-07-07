import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import Heading from '../components/Heading';
import Create from '../components/admin/Create';
import Edit from '../components/admin/Edit';
import RugbyDictQuery from '../components/admin/RugbyDictQuery';
import PlanetRugbyResult from '../components/admin/PlanetRugbyResult';

export default class AdminPage extends Component {
  constructor(props) {
    super(props);

    const adminHeading = {
      id: 'admin',
      title: 'Admin',
      more_text: '',
      more_link: '',
    };

    this.state = {
      adminHeading,
      name: props.match.params.name,
    };
  }

  componentWillMount() {
    this.switchOperation(this.state.name);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.match.params.name,
    });

    this.switchOperation(nextProps.match.params.name);
  }

  switchOperation(name) {
    let operation;
    switch (name) {
      case 'create':
        operation = (
          <Create />
        );
        break;
      case 'edit':
        operation = (
          <Edit />
        );
        break;
      default:
        operation = (
          <div />
        );
        break;
    }
    this.setState({ operation });
  }

  render() {
    return (
      <div>
        <Heading data={this.state.adminHeading} />
        <div className="columns">
          <div className="column column-1-4">
            <div className="news">
              <div className="news-wrap">
                <div className="news-item">
                  <h3>News</h3>
                  <ul>
                    <li><Link href="/admin/create">Create</Link></li>
                    <li><Link href="/admin/edit">Edit</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="column column-1-2">
            {this.state.operation}
          </div>
          <div className="column column-1-4">
            <RugbyDictQuery />
            <PlanetRugbyResult />
          </div>
        </div>
      </div>
    );
  }
}