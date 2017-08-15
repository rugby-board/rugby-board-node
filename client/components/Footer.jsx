import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="columns">
          <div className="footer-column">
            <div className="footer-title">关于</div>
            <div>Rugby News Board, 2017.</div>
            <div>Copyright &copy; <a href="https://crispgm.com/">David Zhang</a>.</div>
          </div>
          <div className="footer-column">
            <div className="footer-title">资讯板块</div>
            <div><Link href="/news">新闻</Link></div>
            <div><Link href="/results">比分</Link></div>
            <div><Link href="/wiki">赛事介绍</Link></div>
            <div><Link href="/info">橄榄球资料</Link></div>
          </div>
          <div className="footer-column">
            <div className="footer-title">精彩赛事</div>
            <div className="menu-item"><Link href="/event/super-rugby">SuperRugby</Link></div>
            <div className="menu-item"><Link href="/event/premiership">Premiership</Link></div>
            <div className="menu-item"><Link href="/event/top14">Top 14</Link></div>
            <div className="menu-item"><Link href="/event/pro14">PRO 14</Link></div>
            <div className="menu-item"><Link href="/event/international-tests">国家测试赛</Link></div>
            <div className="menu-item"><Link href="/event/rugby-championship">冠军赛</Link></div>
            <div className="menu-item"><Link href="/event/six-nations">六国赛</Link></div>
            <div className="menu-item"><Link href="/event/rugby-world-cup">世界杯</Link></div>
            <div className="menu-item">
              <Link href="/event/british-and-irish-lions">不列颠和爱尔兰狮子</Link>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-title">关注我们</div>
            <div className="menu-item">
              <a href="http://eepurl.com/cU4oZH" target="_blank" rel="noopener noreferrer">
                邮件订阅
              </a>
            </div>
            <div className="menu-item">
              <a
                href="https://rugby-board.herokuapp.com/news/feed"
                target="_blank"
                rel="noopener noreferrer"
              >
                RSS 订阅
              </a>
            </div>
            <div>
              <a href="https://twitter.com/RugbyNewsBoard" target="_blank" rel="noopener noreferrer">
                Twitter @RugbyNewsBoard
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
