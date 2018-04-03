import { h, Component } from 'preact';

export default class Top14 extends Component {
  render() {
    return (
      <div className="news">
        <div className="news-wrap" id="six-nations">
          <div className="news-item">
            <div className="news-title">
              日本 Top League 联赛
            </div>
            <div className="news-content">
              <p>
                Top League 是日本国内顶级橄榄球赛事，参赛队伍均由日本大企业支持。Top League 由于其世界顶级的丰厚薪水，以及和主流联赛“错峰”的时间，吸引了许多国外知名球星加盟，但大部分运动员是业余球员。
              </p>
              <p>
                <ul>参赛球队：
                  <li>佳能鹰 Canon Eagles</li>
                  <li>可口可乐红火花 Coca-Cola Red Sparks</li>
                  <li>日野红海豚 Hino Red Dolphins</li>
                  <li>本田热火 Honda Heat</li>
                  <li>神户钢铁人 Kobelco Steelers</li>
                  <li>久保田长矛 Kubota Spears</li>
                  <li>宗像 Sanix 蓝 Munakata Sanix Blues</li>
                  <li>NEC 绿色火箭 NEC Green Rockets</li>
                  <li>NTT 闪弧 NTT Communications Shining Arcs</li>
                  <li>松下狂野骑士 Panasonic Wild Knights</li>
                  <li>理光黑公羊 Ricoh Black Rams</li>
                  <li>三得利太阳巨人 Suntory Sungoliath</li>
                  <li>东芝勇敢天狼 Toshiba Brave Lupus</li>
                  <li>丰田自动织机 Toyota Industries Shuttles</li>
                  <li>丰田闪电 Toyota Verblitz</li>
                  <li>磐田喜悦 Yamaha Júbilo</li>
                </ul>
              </p>
            </div>
            <div className="news-footer">
              <span className="news-channel">
                <a href="http://www.top-league.jp/">官网</a>
              </span>
              <span className="news-time">
                <a href="https://www.wikiwand.com/en/Top_League">Wikipedia</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
