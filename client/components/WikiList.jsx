import React from 'react';
import { NavLink } from 'react-router-dom';

export default class WikiContentPage extends React.Component {
  render() {
    return (
      <div className="news">
        <div className="news-wrap">
          <div className="news-item">
            <h3>国家队赛事</h3>
            <ul>
              <li><NavLink to="/wiki/rugby-championship" activeClassName="active-link">橄榄球冠军赛 The Rugby Championship</NavLink></li>
              <li><NavLink to="/wiki/six-nations" activeClassName="active-link">欧洲六国赛 Six Nations</NavLink></li>
              <li><NavLink to="/wiki/rugby-world-cup" activeClassName="active-link">橄榄球世界杯 Rugby World Cup</NavLink></li>
              <li><NavLink to="/wiki/british-and-irish-lions" activeClassName="active-link">不列颠和爱尔兰狮子 British &amp; Irish Lions</NavLink></li>
            </ul>
            <h3>俱乐部赛事</h3>
            <ul>
              <li><NavLink to="/wiki/super-rugby" activeClassName="active-link">超级橄榄球 Super Rugby</NavLink></li>
              <li><NavLink to="/wiki/pro12-rugby" activeClassName="active-link">PRO12（前凯尔特联赛）</NavLink></li>
              <li><NavLink to="/wiki/premiership-rugby" activeClassName="active-link">英格兰超级联赛 Premiership</NavLink></li>
              <li><NavLink to="/wiki/top14-rugby" activeClassName="active-link">法国 TOP14 联赛</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
