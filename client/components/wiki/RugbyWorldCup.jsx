import { h, render, Component } from 'preact';

export default class RugbyWorldCup extends Component {
  render() {
    return (
      <div className="news">
        <div className="news-wrap" id="rugby-world-cup">
          <div className="news-item">
            <div className="news-title">
              橄榄球世界杯 Rugby World Cup
            </div>
            <div className="news-content">
              <p>
                橄榄球世界杯是一项1987年发起的，每四年举行的国际橄榄球赛事，目前有20支队伍参加，是世界第三大大型体育赛事，仅次于奥运会和足球世界杯。冠军会获得威廉·韦伯·埃利斯 William Webb Ellis Cup 杯，韦伯·埃利斯是拉格比学校 Rugby School 的学生，据说在一场足球赛中用手抱起了球发明了由此发明了英式橄榄球。
              </p>
              <p>
                往届赛事
              </p>
              <table className="wiki">
                <tbody>
                  <tr>
                    <th>年份</th>
                    <th>主办国</th>
                    <th>冠军</th>
                    <th>亚军</th>
                    <th>季军</th>
                    <th>殿军</th>
                    <th>参赛国</th>
                  </tr>
                  <tr>
                    <td>1987</td>
                    <td>澳大利亚/新西兰</td>
                    <td>新西兰</td>
                    <td>法国</td>
                    <td>威尔士</td>
                    <td>澳大利亚</td>
                    <td>16</td>
                  </tr>
                  <tr>
                    <td>1991</td>
                    <td>英格兰/法国/爱尔兰/苏格兰/威尔士</td>
                    <td>澳大利亚</td>
                    <td>英格兰</td>
                    <td>新西兰</td>
                    <td>苏格兰</td>
                    <td>16</td>
                  </tr>
                  <tr>
                    <td>1995</td>
                    <td>南非</td>
                    <td>南非</td>
                    <td>新西兰</td>
                    <td>法国</td>
                    <td>英格兰</td>
                    <td>16</td>
                  </tr>
                  <tr>
                    <td>1999</td>
                    <td>英格兰/法国/爱尔兰/苏格兰/威尔士</td>
                    <td>澳大利亚</td>
                    <td>法国</td>
                    <td>南非</td>
                    <td>新西兰</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>2003</td>
                    <td>澳大利亚</td>
                    <td>英格兰</td>
                    <td>澳大利亚</td>
                    <td>新西兰</td>
                    <td>法国</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>2007</td>
                    <td>法国</td>
                    <td>南非</td>
                    <td>英格兰</td>
                    <td>阿根廷</td>
                    <td>法国</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>2011</td>
                    <td>新西兰</td>
                    <td>新西兰</td>
                    <td>法国</td>
                    <td>澳大利亚</td>
                    <td>威尔士</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>2015</td>
                    <td>英格兰</td>
                    <td>新西兰</td>
                    <td>澳大利亚</td>
                    <td>南非</td>
                    <td>阿根廷</td>
                    <td>20</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="news-footer">
              <span className="news-channel">
                <a href="http://www.rugbyworldcup.com/">官网</a>
              </span>
              <span className="news-time">
                <a href="https://www.wikiwand.com/en/Rugby_World_Cup">Wikipedia</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
