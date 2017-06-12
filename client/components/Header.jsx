import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDropdown: false
    };

    this.handleDropdown = this.handleDropdown.bind(this);
  }

  handleDropdown() {
    this.setState(prevState => ({
      isDropdown: !prevState.isDropdown
    }));
  }

  render() {
    return (
      <header className="menu">
        <div className="menu-navicon">
          <a href="#" onClick={this.handleDropdown}>#</a>
        </div>
        <div className="menu-name">
          <Link to="/">Rugby News Board</Link>
        </div>
        <div className="menu-list">
          <span className="menu-item"><Link to="/">首页</Link></span>
          <span className="menu-item"><Link to="/news">新闻</Link></span>
          <span className="menu-item"><Link to="/about">关于</Link></span>
        </div>
        <div className={this.state.isDropdown ? "menu-dropdown menu-on" : "menu-dropdown menu-off"}>
          <div className="menu-dropdown-list">
            <div className="menu-item">SuperRugby</div>
            <div className="menu-item">Premiership</div>
            <div className="menu-item">Top 14</div>
            <div className="menu-item">PRO 12</div>
          </div>
          <div className="menu-dropdown-index">
            <div className="menu-item"><Link to="/">首页</Link></div>
            <div className="menu-item"><Link to="/news">新闻</Link></div>
            <div className="menu-item"><Link to="/about">关于</Link></div>
          </div>
        </div>
      </header>
    );
  }
}
