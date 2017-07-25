import { h, Component } from 'preact';

import { getNewsByEvent } from '../data';
import { setDocumentTitle } from '../util';
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
      2: '六国赛 Six Nations',
      3: '冠军赛 The Rugby Championship',
      4: '超级橄榄球 Super Rugby',
      5: '英超 Premiership',
      6: '法国 TOP14',
      7: 'PRO12',
      9: '橄榄球世界杯',
      10: '不列颠和爱尔兰狮子 British & Irish Lions',
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
      pageNum: props.page || 1,
    };
  }

  componentWillMount() {
    this.fetchData(this.state.pageNum, this.state.eventName);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.props.page || nextProps.name !== this.props.name) {
      this.setState({
        data: null,
        page: null,
        eventName: nextProps.name,
        eventHeading: this.getEventHeading(nextProps.name),
      });

      this.fetchData(nextProps.page, nextProps.name);
    }
  }

  getEventHeading(eventName) {
    const eventHeading = {
      id: 'event',
      title: this.eventChineseName[this.eventDict[eventName]],
      icon: 'flag-checkered',
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
    let eventId = -1;

    if (Object.prototype.hasOwnProperty.call(this.eventDict, eventName)) {
      eventId = this.eventDict[eventName];
    }
    if (eventId === -1) {
      return;
    }

    getNewsByEvent(eventId, pageNum, (json) => {
      self.setState({
        data: json.news,
        page: json.page,
      });
    });
  }

  render() {
    const prefix = 'event/' + this.state.eventName;
    setDocumentTitle(this.eventChineseName[this.eventDict[this.state.eventName]]);
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
