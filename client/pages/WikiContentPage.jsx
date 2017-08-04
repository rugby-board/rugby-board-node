import { h, Component } from 'preact';

import { setDocumentTitle } from '../util';
import { getEventChineseName, haveEventWiki } from '../constants/events';

import Heading from '../components/Heading';
import WikiList from '../components/WikiList';

import RugbyWorldCup from '../components/wiki/RugbyWorldCup';
import SixNations from '../components/wiki/SixNations';
import RugbyChampionship from '../components/wiki/RugbyChampionship';
import SuperRugby from '../components/wiki/SuperRugby';
import Pro14 from '../components/wiki/Pro14';
import Top14 from '../components/wiki/Top14';
import Premiership from '../components/wiki/Premiership';
import BritishIrishLions from '../components/wiki/BritishIrishLions';

export default class WikiContentPage extends Component {
  constructor(props) {
    super(props);

    const wikiHeading = {
      id: 'wiki',
      title: getEventChineseName(props.name),
      icon: 'info-circle',
      more_text: '',
      more_link: '',
    };

    this.state = {
      wikiHeading,
      eventName: props.name,
    };
  }

  componentWillMount() {
    this.getWikiPage(this.state.name);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      eventName: nextProps.name,
      wikiHeading: {
        title: getEventChineseName(nextProps.name),
      },
    });

    this.getWikiPage(nextProps.name);
  }

  getWikiPage(eventName) {
    if (!haveEventWiki(eventName)) {
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
      case 'pro14':
        data = (
          <Pro14 />
        );
        break;
      case 'top14':
        data = (
          <Top14 />
        );
        break;
      case 'premiership':
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
    setDocumentTitle('赛事介绍 - ' + getEventChineseName(this.props.name));

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
