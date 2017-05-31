import React from 'react';
import News from './News.jsx';

require('./css/main.scss')

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <News id="0"
          title="asdasd"
          content="asdasdasd"
          channel="新闻 | TOP 14"
          created_at="01:09 2017-05-29" />
        <News id="1"
          title="bbbb"
          content="ccccc"
          channel="新闻 | PRO 12"
          created_at="01:09 2017-05-29" />
      </div>
    );
  }
}
