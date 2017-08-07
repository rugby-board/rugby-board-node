import { h, Component } from 'preact';

import { getNewsByEvent } from '../data';
import { setDocumentTitle } from '../util';
import { getEventChineseName, haveEventWiki, getEventId } from '../constants/events';
import Heading from '../components/Heading';
import NewsList from '../components/NewsList';
import ErrorMessage from '../components/ErrorMessage';

export default class EventPage extends Component {
  static getEventHeading(eventName) {
    const eventHeading = {
      id: 'event',
      title: getEventChineseName(eventName),
      icon: 'flag-checkered',
      more_text: '',
      more_link: '',
    };

    if (haveEventWiki(eventName)) {
      eventHeading.more_text = '赛事介绍';
      eventHeading.more_link = '/wiki/' + eventName;
    }

    return eventHeading;
  }

  constructor(props) {
    super(props);

    this.state = {
      data: null,
      page: null,
      eventHeading: EventPage.getEventHeading(props.name),
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
        eventHeading: EventPage.getEventHeading(nextProps.name),
      });

      this.fetchData(nextProps.page, nextProps.name);
    }
  }

  fetchData(pageNum, eventName) {
    const self = this;
    const eventId = getEventId(eventName);
    if (eventId === -1) {
      return;
    }

    getNewsByEvent(
      eventId,
      pageNum,
      (json) => {
        self.setState({
          data: json.news,
          page: json.page,
        });
      },
      () => {
        self.setState({
          error: {
            message: '加载数据缓慢，请刷新再试',
          },
        });
      },
    );
  }

  render() {
    const prefix = 'event/' + this.state.eventName;
    setDocumentTitle(getEventChineseName(this.state.eventName));
    return (
      <div className="columns">
        <div className="column">
          <Heading data={this.state.eventHeading} />
          <div>
            <NewsList data={this.state.data} prefix={prefix} page={this.state.page} />
          </div>
        </div>
        {this.state.error &&
          <ErrorMessage error={this.state.error} />
        }
      </div>
    );
  }
}
