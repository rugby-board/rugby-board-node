import { h, Component } from 'preact';

import Heading from '../components/Heading';
import NewsList from '../components/NewsList';

export default class EventPage extends Component {
  constructor(props) {
    super(props);

    this.eventDict = {
      'international-tests': 1,
      'six-nations': 2,
      'rugby-championship': 3,
      'super-rugby': 4,
      premiership: 5,
      top14: 6,
      pro12: 7,
      'rugby-world-cup': 9,
      'british-and-irish-lions': 10,
    };

    this.eventChineseName = {
      1: '国际测试赛',
      2: '六国赛',
      3: '冠军赛',
      4: '超级橄榄球',
      5: '英超 Premiership',
      6: '法国 TOP14',
      7: 'PRO12',
      9: '橄榄球世界杯',
      10: '不列颠和爱尔兰狮子',
    };

    this.eventWithWiki = {
      'six-nations': 'six-nations',
      'rugby-championship': 'rugby-championship',
      'super-rugby': 'super-rugby',
      premiership: 'premiership-rugby',
      top14: 'top14-rugby',
      pro12: 'pro12-rugby',
      'rugby-world-cup': 'rugby-world-cup',
      'british-and-irish-lions': 'british-and-irish-lions',
    };

    this.state = {
      data: null,
      page: null,
      eventHeading: this.getEventHeading(props.name),
      eventName: props.name,
      pageNum: props.page || 0,
    };
  }

  componentWillMount() {
    this.fetchData(this.state.pageNum, this.state.eventName);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      eventName: nextProps.name,
      eventHeading: this.getEventHeading(nextProps.name),
    });

    this.fetchData(nextProps.page, nextProps.name);
  }

  getEventHeading(eventName) {
    const eventHeading = {
      id: 'event',
      title: '赛事 / ' + this.eventChineseName[this.eventDict[eventName]],
      more_text: '',
      more_link: '',
    };

    if (Object.prototype.hasOwnProperty.call(this.eventWithWiki, eventName)) {
      eventHeading.more_text = '赛事介绍';
      eventHeading.more_link = '/wiki/' + this.eventWithWiki[eventName];
    }

    return eventHeading;
  }


  fetchData(pageNum, eventName) {
    const self = this;
    let event = -1;
    if (Object.prototype.hasOwnProperty.call(this.eventDict, eventName)) {
      event = this.eventDict[eventName];
    }
    if (event === -1) {
      return;
    }
    let url = '/api/list?event=' + event;
    if (pageNum !== undefined) {
      url += ('&page=' + pageNum);
    }
    fetch(url).then((response) => {
      return response.json();
    }).then((json) => {
      self.setState({
        data: json.news,
        page: json.page,
      });
    });
  }

  render() {
    const prefix = 'event/' + this.state.eventName;
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
}