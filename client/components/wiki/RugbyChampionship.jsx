import { h, render, Component } from 'preact';

export default class RugbyChampionship extends Component {
  render() {
    return (
      <div className="news">
        <div className="news-wrap" id="rugby-championship">
          <div className="news-item">
            <div className="news-title">
              橄榄球冠军赛 The Rugby Championship
            </div>
            <div className="news-content">
              <p>
                橄榄球冠军赛是南北球最强的国家队赛事，它的前身是1996年开始的原来由南非、新西兰和澳大利亚三国参加的三国赛 Tri Nations。后来由于阿根廷的加入，2012年更名为橄榄球冠军赛 The Rugby Championship。
              </p>
              <p>
                橄榄球冠军赛的主办方是 SANZAAR。SANZAAR 是 South Africa, New Zealand, Australia and Argentina Rugby 的缩写，主要成员这几个国家的橄榄球协会。
              </p>
              <p>
                橄榄球冠军赛参赛四支球队实力最为均衡，其中有世界排名第一、三次世界杯冠军得主新西兰“全黑”队 All Blacks，两次世界杯冠军得主南非“跳羚”队 Springboks，以及另一支两次世界杯得主澳大利亚“小袋鼠”队 Wallabies。而被认为实力较弱的后来加入的阿根廷队，实力也不容小觑，2015年橄榄球世界杯，南半球这四支参赛队包揽了四强。
              </p>
              <p>
                橄榄球冠军赛的对决之间有四个小的锦标，分别是澳大利亚和新西兰之间的布莱迪斯罗杯 Bledisloe Cup、南非和新西兰之间的自由杯 Freedom Cup、澳大利亚和南非之间的曼德拉挑战杯 Mandela Challenge Plate，以及阿根廷和澳大利亚之间的美洲狮锦标 Puma Trophy。
              </p>
            </div>
            <div className="news-footer">
              <span className="news-channel">
                <a href="http://www.sanzarrugby.com/therugbychampionship/">官网</a>
              </span>
              <span className="news-time">
                <a href="https://www.wikiwand.com/en/The_Rugby_Championship">Wikipedia</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
