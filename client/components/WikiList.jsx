import React from 'react';
import { Link } from 'react-router-dom';

export default class WikiContentPage extends React.Component {
  render() {
    return (
      <div className="news">
        <div className="news-wrap">
          <div className="news-item">
            <h3>国家队赛事</h3>
            <ul>
              <li><Link to="/wiki/rugby-championship">橄榄球冠军赛 The Rugby Championship</Link></li>
              <li><Link to="/wiki/six-nations">欧洲六国赛 Six Nations</Link></li>
              <li><Link to="/wiki/rugby-world-cup">橄榄球世界杯 Rugby World Cup</Link></li>
              <li><Link to="/wiki/british-and-irish-lions">不列颠和爱尔兰狮子 British &amp; Irish Lions</Link></li>
            </ul>
            <h3>俱乐部赛事</h3>
            <ul>
              <li><Link to="/wiki/super-rugby">超级橄榄球 Super Rugby</Link></li>
              <li><Link to="/wiki/pro12-rugby">PRO12（前凯尔特联赛）</Link></li>
              <li><Link to="/wiki/premiership-rugby">英格兰超级联赛 Premiership</Link></li>
              <li><Link to="/wiki/top14-rugby">法国 TOP14 联赛</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
