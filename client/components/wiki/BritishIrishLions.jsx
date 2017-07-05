import { h, render, Component } from 'preact';

export default class BritishIrishLions extends Component {
  render() {
    return (
      <div className="news">
        <div className="news-wrap" id="six-nations">
          <div className="news-item">
            <div className="news-title">
              不列颠和爱尔兰狮子 British &amp; Irish Lions
            </div>
            <div className="news-content">
              <p>
                不列颠和爱尔兰狮子 British and Irish Lions 是一个特别的国际测试赛，球员可以从英伦四国（英格兰、威尔士、苏格兰和爱尔兰）挑选，通常会挑选有国家队经历的球员，理论上也可以挑选没代表国家队出场的球员。狮子队每四年举办一次，对手在南半球三国新西兰、澳大利亚和南非之间循环。
              </p>
              <p>
                不列颠和爱尔兰狮子起源于1888年，首次赛事是商业赛事，最初名字叫做 Shaw &amp; Shrewsbury Team。此后，球队更名为不列颠诸岛队。从1950年新西兰之旅开始，首次被命名为不列颠狮子队。
              </p>
              <p>
                起初，球队代表的是不列颠和爱尔兰联合王国。后来，由于爱尔兰独立战争、爱尔兰内战和后来爱尔兰共和国的建立，球队代表的是联合王国和爱尔兰。从2001年澳大利亚之旅开始，官方名称变为不列颠和爱尔兰狮子队，简称狮子队。
              </p>
              <table>
                <thead>
                  <tr>
                    <th>对手</th>
                    <th>比赛</th>
                    <th>胜</th>
                    <th>负</th>
                    <th>平</th>
                    <th>胜率</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>阿根廷</td>
                    <td>3</td>
                    <td>3</td>
                    <td>0</td>
                    <td>0</td>
                    <td>100%</td>
                  </tr>
                  <tr>
                    <td>澳大利亚</td>
                    <td>9</td>
                    <td>7</td>
                    <td>2</td>
                    <td>0</td>
                    <td>78%</td>
                  </tr>
                  <tr>
                    <td>新西兰</td>
                    <td>11</td>
                    <td>1</td>
                    <td>10</td>
                    <td>0</td>
                    <td>9%</td>
                  </tr>
                  <tr>
                    <td>南非</td>
                    <td>13</td>
                    <td>4</td>
                    <td>8</td>
                    <td>1</td>
                    <td>31%</td>
                  </tr>
                  <tr>
                    <td>总共</td>
                    <td>36</td>
                    <td>15</td>
                    <td>20</td>
                    <td>1</td>
                    <td>42%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="news-footer">
              <span className="news-channel">
                <a href="https://www.lionsrugby.com/">官网</a>
              </span>
              <span className="news-time">
                <a href="https://www.wikiwand.com/en/British_and_Irish_Lions">Wikipedia</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
