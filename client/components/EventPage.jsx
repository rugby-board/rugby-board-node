import React from 'react';

import Heading from './Heading.jsx';
import NewsList from './NewsList.jsx';

export default class EventPage extends React.Component {
  constructor(props) {
    super(props);

    this.eventDict = {
      'international-tests': 1,
      'six-nations': 2,
      'rugby-championship': 3,
      'super-rugby': 4,
      'premiership': 5,
      'top14': 6,
      'pro12': 7,
      'rugby-world-cup': 9
    };
    
    this.eventChineseName = {
      1: '国际测试赛',
      2: '六国赛',
      3: '冠军赛',
      4: '超级橄榄球',
      5: '英超 Premiership',
      6: '法国 TOP14',
      7: 'PRO12',
      9: '橄榄球世界杯'
    };

    const eventHeading = {
      id: 'event',
      title: '赛事 / ' + this.eventChineseName[this.eventDict[props.match.params.name]],
      more_text: '',
      more_link: ''
    };

    this.state = {
      data: null,
      page: null,
      eventHeading: eventHeading,
      queryString: props.location.search,
      name: props.match.params.name
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      queryString: nextProps.location.search,
      name: nextProps.match.params.name,
      eventHeading: {
        title: '赛事 / ' + this.eventChineseName[this.eventDict[nextProps.match.params.name]]
      }
    });
      
    this.fetchData(nextProps.location.search, nextProps.match.params.name);
  }

  componentWillMount() {
    this.fetchData(this.state.queryString, this.state.name);
  }

  render() {
    const prefix = 'event/' + this.state.name;
    return (
      <div className="columns">
        <div className="column">
          <Heading data={this.state.eventHeading} />
          <div>
            <NewsList data={this.state.data} prefix={prefix} page={this.state.page} />
          </div>
        </div>
      </div>
    );
  }

  fetchData(queries, eventName) {
    var self = this;
    const queryString = require('query-string');
    const parsedHash = queryString.parse(queries);
    var event = -1;
    if (this.eventDict.hasOwnProperty(eventName)) {
      event = this.eventDict[eventName];
    }
    if (event == -1) {
      return;
    }
    var url = '/list?event=' + event;
    if (parsedHash.page != null) {
      url += ('&page=' + parsedHash.page);
    }
    fetch(url).then(function (response) {
      return response.json();
    }).then(function (json) {
      self.setState({
        data: json.news,
        page: json.page
      });
    });
  }
}
