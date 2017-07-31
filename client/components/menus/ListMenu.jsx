import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class ListMenu extends Component {
  render() {
    return (
      <div className="menu-list">
        <div className="menu-item">
          <Link activeClassName="menu-active" href="/">首页</Link>
        </div>
        <div className="menu-item">
          <Link activeClassName="menu-active" href="/news">新闻</Link>
        </div>
        <div className="menu-item">
          <Link activeClassName="menu-active" href="/results">比分</Link>
        </div>
        <div className="menu-item">
          <Link activeClassName="menu-active" href="/event/super-rugby">SuperRugby</Link>
        </div>
        <div className="menu-item">
          <Link activeClassName="menu-active" href="/event/premiership">Premiership</Link>
        </div>
        <div className="menu-item">
          <Link activeClassName="menu-active" href="/event/top14">Top14</Link>
        </div>
        <div className="menu-item">
          <Link activeClassName="menu-active" href="/event/pro12">PRO12</Link>
        </div>
        <div className="menu-item">
          <Link activeClassName="menu-active" href="/event/international-tests">国家测试赛</Link>
        </div>
        <div className="menu-item">
          <Link activeClassName="menu-active" href="/event/rugby-championship">冠军赛</Link>
        </div>
        <div className="menu-item">
          <Link activeClassName="menu-active" href="/event/six-nations">六国赛</Link>
        </div>
        <div className="menu-item">
          <Link activeClassName="menu-active" href="/event/rugby-world-cup">世界杯</Link>
        </div>
        <div className="menu-item">
          <Link activeClassName="menu-active" href="/event/british-and-irish-lions">狮子队</Link>
        </div>
        <div className="menu-item">
          <Link activeClassName="menu-active" href="/wiki">赛事介绍</Link>
        </div>
        <div className="menu-item">
          <Link activeClassName="menu-active" href="/info">橄榄球资料</Link>
        </div>
        <div className="menu-item">
          <a href="http://eepurl.com/cU4oZH" target="_blank" rel="noopener noreferrer">
            邮件订阅
          </a>
        </div>
        <div className="menu-item">
          <Link activeClassName="menu-active" href="/about">关于</Link>
        </div>
      </div>
    );
  }
}
