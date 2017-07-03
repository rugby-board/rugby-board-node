import React from 'react';

import Heading from './Heading';

export default class NotFound extends React.Component {
  constructor(props) {
    super(props);

    const aboutHeading = {
      id: '404',
      title: '错误404',
      more_text: '',
      more_link: '',
    };

    this.state = { aboutHeading };
  }

  render() {
    return (
      <div className="columns">
        <div className="column">
          <Heading data={this.state.aboutHeading} />
          <div className="article">
            <div className="article-content">
              <p>404 - 页面未找到</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
