import React from 'react';
import { Link } from 'react-router-dom';

import Heading from './Heading.jsx';
import Create from './admin/Create.jsx';
import Edit from './admin/Edit.jsx';
import RugbyDictQuery from './admin/RugbyDictQuery.jsx';
import PlanetRugbyResult from './admin/PlanetRugbyResult.jsx';

export default class AdminPage extends React.Component {
  constructor(props) {
    super(props);

    const adminHeading = {
      id: 'admin',
      title: 'Admin',
      more_text: '',
      more_link: ''
    };

    this.state = {
      adminHeading: adminHeading,
      name: props.match.params.name
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.match.params.name
    });
      
    this.switchOperation(nextProps.match.params.name);
  }

  componentWillMount() {
    this.switchOperation(this.state.name);
  }

  switchOperation(name) {
    var operation;
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
    this.setState({
      operation: operation
    });
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
                    <li><Link to="/admin/create">Create</Link></li>
                    <li><Link to="/admin/edit">Edit</Link></li>
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
