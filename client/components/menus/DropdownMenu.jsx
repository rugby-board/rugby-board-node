import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class DropdownMenu extends Component {
  constructor(props) {
    super(props);

    this.handleDropdown = this.handleDropdown.bind(this);
  }

  handleDropdown() {
    const { handleDropdown } = this.props;
    handleDropdown(this.props.isDropdown);
  }

  render() {
    return (
      <div className={this.props.isDropdown ? 'menu-dropdown menu-on' : 'menu-dropdown menu-off'}>
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
            <Link onClick={this.handleDropdown} href="/info">橄榄球资料</Link>
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
            <Link onClick={this.handleDropdown} href="/event/super-rugby">SuperRugby</Link>
          </div>
          <div className="menu-item">
            <Link onClick={this.handleDropdown} href="/event/premiership">Premiership</Link>
          </div>
          <div className="menu-item">
            <Link onClick={this.handleDropdown} href="/event/top14">Top14</Link></div>
          <div className="menu-item">
            <Link onClick={this.handleDropdown} href="/event/pro14">PRO14</Link>
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
          <div className="menu-item">
            <Link onClick={this.handleDropdown} href="/event/british-and-irish-lions">狮子队</Link>
          </div>
        </div>
      </div>
    );
  }
}
