import { h, render, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class Header extends Component {
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
          <Link onClick={this.handleIndexDropdown} href="/">Rugby News Board</Link>
        </div>
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
            <Link activeClassName="menu-active" href="/event/british-and-irish-lions">狮子队</Link>
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
            <Link activeClassName="menu-active" href="/event/rugby-championship">冠军赛</Link></div>
          <div className="menu-item">
            <Link activeClassName="menu-active" href="/event/six-nations">六国赛</Link></div>
          <div className="menu-item">
            <Link activeClassName="menu-active" href="/event/rugby-world-cup">世界杯</Link></div>
          <div className="menu-item">
            <Link activeClassName="menu-active" href="/wiki">赛事介绍</Link>
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
        <div className={this.state.isDropdown ? 'menu-dropdown menu-on' : 'menu-dropdown menu-off'}>
          <div className="menu-dropdown-index">
            <div className="menu-item">
              <Link onClick={this.handleDropdown} href="/news">新闻</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} href="/results">比分</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} href="/wiki">赛事介绍</Link>
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
              <Link onClick={this.handleDropdown} href="/about">关于</Link>
            </div>
          </div>
          <div className="menu-dropdown-list">
            <div className="menu-item">
              <Link onClick={this.handleDropdown} href="/event/british-and-irish-lions">狮子队</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} href="/event/super-rugby">SuperRugby</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} href="/event/premiership">Premiership</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} href="/event/top14">Top14</Link></div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} href="/event/pro12">PRO12</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} href="/event/international-tests">国家测试赛</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} href="/event/rugby-championship">冠军赛</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} href="/event/six-nations">六国赛</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} href="/event/rugby-world-cup">世界杯</Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
