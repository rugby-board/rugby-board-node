import React from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="columns">
          <div className="footer-column">
            <h3>关于</h3>
            <div>Rugby News Board, 2017.</div>
            <div>Copyright &copy; <a href="https://crispgm.com/">David Zhang</a>.</div>
          </div>
          <div className="footer-column">
            <h3>资讯板块</h3>
            <div><Link to="/news">新闻</Link></div>
            <div><Link to="/results">比分</Link></div>
            <div><Link to="/wiki">赛事介绍</Link></div>
          </div>
          <div className="footer-column">
            <h3>精彩赛事</h3>
            <div className="menu-item"><Link to="/event/british-and-irish-lions">不列颠和爱尔兰狮子</Link></div>
            <div className="menu-item"><Link to="/event/super-rugby">SuperRugby</Link></div>
            <div className="menu-item"><Link to="/event/premiership">Premiership</Link></div>
            <div className="menu-item"><Link to="/event/top14">Top 14</Link></div>
            <div className="menu-item"><Link to="/event/pro12">PRO 12</Link></div>
            <div className="menu-item"><Link to="/event/international-tests">国家测试赛</Link></div>
            <div className="menu-item"><Link to="/event/rugby-championship">冠军赛</Link></div>
            <div className="menu-item"><Link to="/event/six-nations">六国赛</Link></div>
            <div className="menu-item"><Link to="/event/rugby-world-cup">世界杯</Link></div>
          </div>
          <div className="footer-column">
            <h3>社交网络</h3>
            <div className="menu-item"><Link to="/rss">邮件订阅</Link></div>
            <div><a href="https://twitter.com/RugbyNewsBoard">Twitter @RugbyNewsBoard</a></div>
          </div>
        </div>
      </footer>
    );
  }
}
