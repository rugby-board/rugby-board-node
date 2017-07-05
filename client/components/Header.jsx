import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDropdown: false,
      buttonText: '#',
    };

    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleIndexDropdown = this.handleIndexDropdown.bind(this);
  }

  handleDropdown() {
    this.setState(prevState => ({
      isDropdown: !prevState.isDropdown,
    }));
  }

  handleIndexDropdown() {
    if (this.state.isDropdown === true) {
      this.setState({ isDropdown: false });
    }
  }

  render() {
    const isDropdown = this.state.isDropdown;
    return (
      <header className="menu">
        <div className="menu-navicon">
          <button onClick={this.handleDropdown}>
            {isDropdown ? (
              <i className="fa fa-close fa-lg fa-inverse" />
            ) : (
              <i className="fa fa-navicon fa-lg fa-inverse" />
            )}
          </button>
        </div>
        <div className="menu-name">
          <Link onClick={this.handleIndexDropdown} to="/">Rugby News Board</Link>
        </div>
        <div className="menu-list">
          <div className="menu-item">
            <NavLink activeClassName="menu-active" to="/news">新闻</NavLink>
          </div>
          <div className="menu-item">
            <NavLink activeClassName="menu-active" to="/results">比分</NavLink>
          </div>
          <div className="menu-item">
            <NavLink activeClassName="menu-active" to="/event/british-and-irish-lions">狮子队</NavLink>
          </div>
          <div className="menu-item">
            <NavLink activeClassName="menu-active" to="/event/super-rugby">SuperRugby</NavLink>
          </div>
          <div className="menu-item">
            <NavLink activeClassName="menu-active" to="/event/premiership">Premiership</NavLink>
          </div>
          <div className="menu-item">
            <NavLink activeClassName="menu-active" to="/event/top14">Top14</NavLink>
          </div>
          <div className="menu-item">
            <NavLink activeClassName="menu-active" to="/event/pro12">PRO12</NavLink>
          </div>
          <div className="menu-item">
            <NavLink activeClassName="menu-active" to="/event/international-tests">国家测试赛</NavLink>
          </div>
          <div className="menu-item">
            <NavLink activeClassName="menu-active" to="/event/rugby-championship">冠军赛</NavLink></div>
          <div className="menu-item">
            <NavLink activeClassName="menu-active" to="/event/six-nations">六国赛</NavLink></div>
          <div className="menu-item">
            <NavLink activeClassName="menu-active" to="/event/rugby-world-cup">世界杯</NavLink></div>
          <div className="menu-item">
            <NavLink activeClassName="menu-active" to="/wiki">赛事介绍</NavLink>
          </div>
          <div className="menu-item">
            <a href="http://eepurl.com/cU4oZH" target="_blank" rel="noopener noreferrer">
              邮件订阅
            </a>
          </div>
          <div className="menu-item">
            <NavLink activeClassName="menu-active" to="/about">关于</NavLink>
          </div>
        </div>
        <div className={this.state.isDropdown ? 'menu-dropdown menu-on' : 'menu-dropdown menu-off'}>
          <div className="menu-dropdown-index">
            <div className="menu-item">
              <Link onClick={this.handleDropdown} to="/news">新闻</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} to="/results">比分</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} to="/wiki">赛事介绍</Link>
            </div>
            <div className="menu-item">
              <a
                onClick={this.handleDropdown}
                href="http://eepurl.com/cU4oZH"
                target="_blank"
                rel="noopener noreferrer"
              >
                邮件订阅
              </a>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} to="/about">关于</Link>
            </div>
          </div>
          <div className="menu-dropdown-list">
            <div className="menu-item">
              <Link onClick={this.handleDropdown} to="/event/british-and-irish-lions">狮子队</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} to="/event/super-rugby">SuperRugby</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} to="/event/premiership">Premiership</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} to="/event/top14">Top14</Link></div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} to="/event/pro12">PRO12</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} to="/event/international-tests">国家测试赛</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} to="/event/rugby-championship">冠军赛</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} to="/event/six-nations">六国赛</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} to="/event/rugby-world-cup">世界杯</Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
