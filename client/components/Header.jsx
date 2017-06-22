import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDropdown: false,
      buttonText: '#'
    };

    this.handleDropdown = this.handleDropdown.bind(this);
  }

  handleDropdown() {
    this.setState(prevState => ({
      isDropdown: !prevState.isDropdown,
    }));
  }

  render() {
    const icon = this.state.isDropdown ? 'fa fa-close' : 'fa fa-navicon';
    return (
      <header className="menu">
        <div className="menu-navicon">
          <button onClick={this.handleDropdown}>
            <i className={icon}></i>
          </button>
        </div>
        <div className="menu-name">
          <Link to="/">Rugby News Board</Link>
        </div>
        <div className="menu-list">
          <div className="menu-item"><Link to="/">首页</Link></div>
          <div className="menu-item"><Link to="/news">新闻</Link></div>
          <div className="menu-item"><Link to="/results">比分</Link></div>
          <div className="menu-item"><Link to="/event/british-and-irish-lions">狮子队</Link></div>
          <div className="menu-item"><Link to="/event/super-rugby">SuperRugby</Link></div>
          <div className="menu-item"><Link to="/event/premiership">Premiership</Link></div>
          <div className="menu-item"><Link to="/event/top14">Top 14</Link></div>
          <div className="menu-item"><Link to="/event/pro12">PRO 12</Link></div>
          <div className="menu-item"><Link to="/event/international-tests">国家测试赛</Link></div>
          <div className="menu-item"><Link to="/event/rugby-championship">冠军赛</Link></div>
          <div className="menu-item"><Link to="/event/six-nations">六国赛</Link></div>
          <div className="menu-item"><Link to="/event/rugby-world-cup">世界杯</Link></div>
          <div className="menu-item"><Link to="/wiki">赛事介绍</Link></div>
          <div className="menu-item"><Link to="/rss">邮件订阅</Link></div>
          <div className="menu-item"><Link to="/about">关于</Link></div>
        </div>
        <div className={this.state.isDropdown ? "menu-dropdown menu-on" : "menu-dropdown menu-off"}>
          <div className="menu-dropdown-list">
            <div className="menu-item"><Link to="/event/british-and-irish-lions">狮子队</Link></div>
            <div className="menu-item"><Link to="/event/super-rugby">SuperRugby</Link></div>
            <div className="menu-item"><Link to="/event/premiership">Premiership</Link></div>
            <div className="menu-item"><Link to="/event/top14">Top 14</Link></div>
            <div className="menu-item"><Link to="/event/pro12">PRO 12</Link></div>
            <div className="menu-item"><Link to="/event/international-tests">国家测试赛</Link></div>
            <div className="menu-item"><Link to="/event/rugby-championship">冠军赛</Link></div>
            <div className="menu-item"><Link to="/event/six-nations">六国赛</Link></div>
            <div className="menu-item"><Link to="/event/rugby-world-cup">世界杯</Link></div>
          </div>
          <div className="menu-dropdown-index">
            <div className="menu-item"><Link to="/">首页</Link></div>
            <div className="menu-item"><Link to="/news">新闻</Link></div>
            <div className="menu-item"><Link to="/results">比分</Link></div>
            <div className="menu-item"><Link to="/wiki">赛事介绍</Link></div>
            <div className="menu-item"><Link to="/rss">邮件订阅</Link></div>
            <div className="menu-item"><Link to="/about">关于</Link></div>
          </div>
        </div>
      </header>
    );
  }
}
