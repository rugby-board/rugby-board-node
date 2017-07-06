import { h, Component } from 'preact';

import Heading from '../components/Heading';
import WikiList from '../components/WikiList';

import RugbyWorldCup from '../components/wiki/RugbyWorldCup';
import SixNations from '../components/wiki/SixNations';
import RugbyChampionship from '../components/wiki/RugbyChampionship';
import SuperRugby from '../components/wiki/SuperRugby';
import Pro12 from '../components/wiki/Pro12';
import Top14 from '../components/wiki/Top14';
import Premiership from '../components/wiki/Premiership';
import BritishIrishLions from '../components/wiki/BritishIrishLions';

export default class WikiContentPage extends Component {
  constructor(props) {
    super(props);

    this.eventDict = {
      'six-nations': '六国赛',
      'rugby-championship': '冠军赛',
      'super-rugby': '超级橄榄球',
      'premiership-rugby': '英超 Premiership',
      'top14-rugby': '法国 TOP14',
      'pro12-rugby': 'PRO12',
      'rugby-world-cup': '橄榄球世界杯',
      'british-and-irish-lions': '不列颠和爱尔兰狮子',
    };

    const wikiHeading = {
      id: 'wiki',
      title: '赛事介绍 / ' + this.eventDict[props.name],
      more_text: '',
      more_link: '',
    };

    this.state = {
      wikiHeading,
      eventName: props.name,
    };
  }

  componentWillMount() {
    this.fetchData(this.state.name);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      eventName: nextProps.name,
      wikiHeading: {
        title: '赛事介绍 / ' + this.eventDict[nextProps.name],
      },
    });

    this.fetchData(nextProps.name);
  }

  fetchData(eventName) {
    if (!Object.prototype.hasOwnProperty.call(this.eventDict, eventName)) {
      return false;
    }

    let data;
    switch (eventName) {
      case 'rugby-world-cup':
        data = (
          <RugbyWorldCup />
        );
        break;
      case 'six-nations':
        data = (
          <SixNations />
        );
        break;
      case 'rugby-championship':
        data = (
          <RugbyChampionship />
        );
        break;
      case 'super-rugby':
        data = (
          <SuperRugby />
        );
        break;
      case 'pro12-rugby':
        data = (
          <Pro12 />
        );
        break;
      case 'top14-rugby':
        data = (
          <Top14 />
        );
        break;
      case 'premiership-rugby':
        data = (
          <Premiership />
        );
        break;
      case 'british-and-irish-lions':
        data = (
          <BritishIrishLions />
        );
        break;
      default:
        break;
    }

    this.setState({ data });

    return true;
  }

  render() {
    return (
      <div>
        <Heading data={this.state.wikiHeading} />
        <div className="columns">
          <div className="column column-1-3">
            <WikiList />
          </div>
          <div className="column column-2-3">
            {this.state.data}
          </div>
        </div>
      </div>
    );
  }
}
