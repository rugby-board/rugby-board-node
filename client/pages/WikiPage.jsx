import { h, Component } from 'preact';

import WikiList from '../components/WikiList';
import Heading from '../components/Heading';

export default class WikiPage extends Component {
  constructor(props) {
    super(props);

    const wikiHeading = {
      id: 'wiki',
      title: '赛事介绍',
      more_text: '',
      more_link: '',
    };

    this.state = { wikiHeading };
  }

  render() {
    return (
      <div className="columns">
        <div className="column">
          <Heading data={this.state.wikiHeading} />
          <WikiList />
        </div>
      </div>
    );
  }
}
