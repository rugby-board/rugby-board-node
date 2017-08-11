import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class DropdownMenu extends Component {
  constructor(props) {
    super(props);

    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleEventsList = this.handleEventsList.bind(this);

    this.state = { sublist: false };
  }

  handleDropdown() {
    const { handleDropdown } = this.props;
    handleDropdown(this.props.isDropdown);
  }

  handleEventsList(e) {
    this.setState({ sublist: !this.state.sublist });
    e.preventDefault();
  }

  render() {
    return (
      <div className={this.props.isDropdown ? 'menu-dropdown menu-on' : 'menu-dropdown menu-off'}>
        <div className="menu-dropdown-wrapper">
          <div className="menu-item">
            <Link onClick={this.handleDropdown} href="/news">新闻</Link>
          </div>
          <div className="menu-item">
            <Link onClick={this.handleDropdown} href="/results">比分</Link>
          </div>
          <div className="menu-item">
            <Link onClick={this.handleEventsList} href="#">全部列表</Link>
          </div>
          <div className="menu-item">
            <Link onClick={this.handleDropdown} href="/wiki">赛事介绍</Link>
          </div>
          <div className="menu-item">
            <Link onClick={this.handleDropdown} href="/info">相关资料</Link>
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

        <div className={`menu-dropdown-sublist ${this.state.sublist ? 'menu-on' : 'menu-off'}`}>
          <div className={`menu-dropdown-wrapper menu-dropdown-flex ${this.state.sublist ? 'menu-on' : 'menu-off'}`}>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} href="/event/super-rugby">SuperRugby</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} href="/event/premiership">Premiership</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} href="/event/top14">Top14</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} href="/event/pro14">PRO14</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} href="/event/international-tests">国际测试赛</Link>
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
              <Link onClick={this.handleDropdown} href="/event/european-champions-cup">欧洲冠军杯</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} href="/event/european-challenge-cup">欧洲挑战杯</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} href="/event/currie-cup">CurrieCup</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} href="/event/mitre-10-cup">Mitre10Cup</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} href="/event/national-rugby-championship">NRC</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} href="/event/top-league">TopLeague</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} href="/event/anglo-welsh-cup">盎格鲁威尔士杯</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} href="/event/british-and-irish-lions">狮子队</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} href="/event/barbarians">野蛮人</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} href="/event/rugby-sevens">7人制</Link>
            </div>
            <div className="menu-item">
              <Link onClick={this.handleDropdown} href="/event/womens-rugby">女子赛事</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
