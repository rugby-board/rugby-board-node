import { h, Component } from 'preact';

export default class Premiership extends Component {
  render() {
    return (
      <div className="news">
        <div className="news-wrap" id="six-nations">
          <div className="news-item">
            <div className="news-title">
              英格兰超级联赛 Premiership Rugby
            </div>
            <div className="news-content">
              <p>
                英格兰橄榄球超级联赛 Premiership Rugby 历史可以追溯到1972年。于1996年开始职业化进程，并且在2000年正式更名为现有赛制的英超联赛。
              </p>
              <p>
                联赛由12支球队组成，赛制分为常规赛和季后赛。常规赛总共22轮，获胜积4分，打平积2分，失败积0分（如果比分差距不超过7分，可以获得1分的额外失利积分），获得4次达阵以上可以获得1个奖励积分。
              </p>
              <p>
                常规赛前4名会成为季后赛4强，进行单循环淘汰赛，由常规赛第一名主场对阵第四名，第二名主场对阵第三名，获胜者进入在特维克纳姆 Twickenham 球场举行的决赛。决赛获胜者夺得联赛冠军。
              </p>
              <p>
                常规赛排名前6的球队可以参加下赛季欧洲冠军杯的比赛，第七名将参加附加赛。未能进军欧洲冠军杯的球队，将会自动获得参加欧洲挑战杯的资格。
              </p>
              <p>
                英超橄榄球联赛2017-2018赛季工资帽是700万英镑，青年队是80万英镑。
              </p>
              <p>
                历史战绩排行：
              </p>
              <table>
                <tbody>
                  <tr>
                    <th>队名</th>
                    <th>夺冠次数</th>
                    <th>夺冠年份</th>
                  </tr>
                  <tr>
                    <td>Leicester Tigers</td>
                    <td>10</td>
                    <td>1987–88, 1994–95, 1998–99, 1999–00, 2000–01, 2001–02, 2006–07, 2008–09, 2009–10, 2012–13</td>
                  </tr>
                  <tr>
                    <td>Bath</td>
                    <td>6</td>
                    <td>1988–89, 1990–91, 1991–92, 1992–93, 1993–94, 1995–96</td>
                  </tr>
                  <tr>
                    <td>Wasps</td>
                    <td>6</td>
                    <td>1989–90, 1996–97, 2002–03, 2003–04, 2004–05, 2007–08</td>
                  </tr>
                  <tr>
                    <td>Saracens</td>
                    <td>3</td>
                    <td>2010–11, 2014–15, 2015–16</td>
                  </tr>
                  <tr>
                    <td>Newcastle Falcons</td>
                    <td>1</td>
                    <td>1997–98</td>
                  </tr>
                  <tr>
                    <td>Sale Sharks</td>
                    <td>1</td>
                    <td>2005–06</td>
                  </tr>
                  <tr>
                    <td>Harlequins</td>
                    <td>1</td>
                    <td>2011–12</td>
                  </tr>
                  <tr>
                    <td>Northampton Saints</td>
                    <td>1</td>
                    <td>2013–14</td>
                  </tr>
                  <tr>
                    <td>Exeter Chiefs</td>
                    <td>1</td>
                    <td>2016–17</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="news-footer">
              <span className="news-channel">
                <a href="http://www.premiershiprugby.com/">官网</a>
              </span>
              <span className="news-time">
                <a href="https://www.wikiwand.com/en/Premiership_Rugby">Wikipedia</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
