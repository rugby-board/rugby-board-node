import { h, Component } from 'preact';

export default class SixNations extends Component {
  render() {
    return (
      <div className="news">
        <div className="news-wrap" id="six-nations">
          <div className="news-item">
            <div className="news-title">
              欧洲六国赛 Six Nations
            </div>
            <div className="news-content">
              <p>
                六国赛 Six Nations 是一项国际橄榄球比赛，参赛的是欧洲六国：英格兰、法国、爱尔兰、意大利、苏格兰和威尔士。六国赛的前身是大不列颠和爱尔兰诸国参加的 Home Nations，后来随着法国的加入（1910–1931和1947之后），更名为五国赛 Five Nations。2000年，意大利队加入成为现在的六国赛格局。
              </p>
              <p>
                六国赛有两个主要锦标，首先是冠军锦标，就是赛事积分最高的球队。其次是“三重冠 Triple Crown”锦标，参与竞争者是有英格兰、苏格兰、威尔士和爱尔兰，必须全部取胜另外三个对手才可以获得。除此之外，还有一些小的锦标，英格兰和苏格兰之间的比赛称为卡尔库塔杯 Calcutta Cup。
              </p>
              <p>
                战绩：大满贯
              </p>
              <ul>
                <li>英格兰：13次</li>
                <li>威尔士：11次</li>
                <li>法国：9次</li>
                <li>苏格兰：3次</li>
                <li>爱尔兰：2次</li>
                <li>意大利：0次</li>
              </ul>
              <p>
                与政治上划分不同的是，参加橄榄球比赛的爱尔兰是由爱尔兰共和国和北爱尔兰联合组队参加，因此在主场时会播放爱尔兰国歌《士兵之歌》 &quot;Amhrán na bhFiann&quot;和队歌《爱尔兰的召唤》&quot;Ireland&#39;s Call&quot;。
              </p>
            </div>
            <div className="news-footer">
              <span className="news-channel">
                <a href="http://www.rbs6nations.com/">官网</a>
              </span>
              <span className="news-time">
                <a href="https://www.wikiwand.com/en/Six_Nations_Championship">Wikipedia</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
