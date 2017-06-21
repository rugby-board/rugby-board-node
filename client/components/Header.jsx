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
          <span className="menu-item"><Link to="/">首页</Link></span>
          <span className="menu-item"><Link to="/news">新闻</Link></span>
          <span className="menu-item"><Link to="/results">比分</Link></span>
          <span className="menu-item"><a href="">SuperRugby</a></span>
          <span className="menu-item"><a href="">Premiership</a></span>
          <span className="menu-item"><a href="">Top 14</a></span>
          <span className="menu-item"><a href="">PRO 12</a></span>
          <span className="menu-item"><a href="">国家测试赛</a></span>
          <span className="menu-item"><a href="">冠军赛</a></span>
          <span className="menu-item"><a href="">六国赛</a></span>
          <span className="menu-item"><a href="">世界杯</a></span>
          <span className="menu-item"><Link to="/wiki">赛事介绍</Link></span>
          <span className="menu-item"><Link to="/rss">邮件订阅</Link></span>
          <span className="menu-item"><Link to="/about">关于</Link></span>
        </div>
        <div className={this.state.isDropdown ? "menu-dropdown menu-on" : "menu-dropdown menu-off"}>
          <div className="menu-dropdown-list">
            <div className="menu-item"><a href="">SuperRugby</a></div>
            <div className="menu-item"><a href="">Premiership</a></div>
            <div className="menu-item"><a href="">Top 14</a></div>
            <div className="menu-item"><a href="">PRO 12</a></div>
            <div className="menu-item"><a href="">国家测试赛</a></div>
            <div className="menu-item"><a href="">冠军赛</a></div>
            <div className="menu-item"><a href="">六国赛</a></div>
            <div className="menu-item"><a href="">世界杯</a></div>
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
