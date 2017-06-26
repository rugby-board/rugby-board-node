import React from 'react';

import Heading from './Heading.jsx';
import WikiList from './WikiList.jsx';

export default class WikiPage extends React.Component {
  constructor(props) {
    super(props);

    const wikiHeading = {
      id: 'wiki',
      title: '赛事介绍',
      more_text: '',
      more_link: ''
    };

    this.state = {
      wikiHeading: wikiHeading
    };
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
