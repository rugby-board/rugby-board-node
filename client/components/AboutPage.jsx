import React from 'react';

import Heading from './Heading.jsx';

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props);

    const aboutHeading = {
      id: 'about',
      title: '关于',
      more_text: '',
      more_link: ''
    };

    this.state = {
      aboutHeading: aboutHeading,
    };
  }

  render() {
    return (
      <div className="columns">
        <div className="column">
          <Heading data={this.state.aboutHeading} />
          <div className="article">
            <div className="article-content">
              <h3>Rugby News Board 中文英式橄榄球资讯</h3>
              <p>Copyright &copy; David Zhang.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
