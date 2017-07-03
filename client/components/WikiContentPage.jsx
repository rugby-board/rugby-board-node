import React from 'react';

import Heading from './Heading';
import WikiList from './WikiList';

import RugbyWorldCup from './wiki/RugbyWorldCup';
import SixNations from './wiki/SixNations';
import RugbyChampionship from './wiki/RugbyChampionship';
import SuperRugby from './wiki/SuperRugby';
import Pro12 from './wiki/Pro12';
import Top14 from './wiki/Top14';
import Premiership from './wiki/Premiership';
import BritishIrishLions from './wiki/BritishIrishLions';

export default class WikiContentPage extends React.Component {
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
      title: '赛事介绍 / ' + this.eventDict[props.match.params.name],
      more_text: '',
      more_link: '',
    };

    this.state = {
      wikiHeading,
      name: props.match.params.name,
    };
  }

  componentWillMount() {
    this.fetchData(this.state.name);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.match.params.name,
      wikiHeading: {
        title: '赛事介绍 / ' + this.eventDict[nextProps.match.params.name],
      },
    });

    this.fetchData(nextProps.match.params.name);
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

WikiContentPage.propTypes = {
  match: React.PropTypes.shape({
    params: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
