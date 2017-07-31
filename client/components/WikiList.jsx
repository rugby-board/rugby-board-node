import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class WikiContentPage extends Component {
  render() {
    return (
      <div className="news">
        <div className="news-wrap">
          <div className="news-item">
            <ul><b>国家队赛事</b>
              <li>
                <Link href="/wiki/rugby-championship" activeClassName="active-link">
                  橄榄球冠军赛 The Rugby Championship
                </Link>
              </li>
              <li>
                <Link href="/wiki/six-nations" activeClassName="active-link">
                  欧洲六国赛 Six Nations
                </Link>
              </li>
              <li>
                <Link href="/wiki/rugby-world-cup" activeClassName="active-link">
                  橄榄球世界杯 Rugby World Cup
                </Link>
              </li>
              <li>
                <Link href="/wiki/british-and-irish-lions" activeClassName="active-link">
                  不列颠和爱尔兰狮子 British &amp; Irish Lions
                </Link>
              </li>
            </ul>
            <ul><b>俱乐部赛事</b>
              <li>
                <Link href="/wiki/super-rugby" activeClassName="active-link">
                  超级橄榄球 Super Rugby
                </Link>
              </li>
              <li>
                <Link href="/wiki/pro12" activeClassName="active-link">
                  PRO12（前凯尔特联赛）
                </Link>
              </li>
              <li>
                <Link href="/wiki/premiership" activeClassName="active-link">
                  英格兰超级联赛 Premiership
                </Link>
              </li>
              <li>
                <Link href="/wiki/top14" activeClassName="active-link">
                  法国 TOP14 联赛
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
