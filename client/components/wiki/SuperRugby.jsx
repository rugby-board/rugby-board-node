import { h, Component } from 'preact';

export default class SuperRugby extends Component {
  render() {
    return (
      <div className="news">
        <div className="news-wrap" id="six-nations">
          <div className="news-item">
            <div className="news-title">
              超级橄榄球 Super Rugby
            </div>
            <div className="news-content">
              <p>
                超级橄榄球联赛是一项南半球为主的大型俱乐部赛事，目前参加的俱乐部有18个，分别来自南非、新西兰、澳大利亚、阿根廷和日本。
              </p>
              <p>
                同南半球国家队赛事橄榄球冠军赛 The Rugby Championship 一样，超级橄榄球 Super Rugby 赛事的主办方也是 SANZAAR。SANZAAR 是 South Africa, New Zealand, Australia and Argentina Rugby 的缩写，主要成员这几个国家的橄榄球协会。
              </p>
              <p>
                <b>Super 6</b> 超级橄榄球联赛的最初的前身是 SANZAR（阿根廷没有加入前的 SANZAAR）成立前的 Super 6 和 Super 10。Super 6仅在1992年举行了一届，是一个有6个省级参赛队的赛事，分别来自新西兰（奥克兰 Auckland, 坎特伯雷 Canterbury, 惠灵顿 Wellington）、澳大利亚（昆士兰 Queensland, 新南威尔士 New South Wales）和太平洋岛国斐济。比赛的冠军是昆士兰队。
              </p>
              <p>
                <b>Super 10</b> 1993年-1995年，比赛扩展到了10支队伍，更名为 Super 10。参赛球队为新西兰（怀卡托 Waikato, 奥克兰 Auckland, 奥塔戈 Otago, 北港 North Harbour）、南非（纳塔尔 Natal, 特兰士瓦 Transvaal, 北特兰士瓦 Northern Transvaal）、澳大利亚（昆士兰 Queensland、新南威尔士 New South Wales）和西萨摩亚（太平洋三国赛冠军）。
              </p>
              <p>
                <b>Super 12</b> 随着1995年8月，世界橄榄球协会 IRB（目前世界橄榄球协会 World Rugby 的前身）宣布了职业化橄榄球后，澳大利亚、新西兰和南非橄榄球协会成立了 SANZAR 联盟管理三国之间跨国的比赛，包括一年一度的三国赛 Tri Nations 和 Super 12 俱乐部联赛。Super 12 共有5支新西兰球队、4支南非球队和3支澳大利亚球队参加。在21世纪初期，新西兰和南非的球队移除了省名，如坎特伯雷十字军变成了十字军队。
              </p>
              <p>
                <b>Super 14</b> 2006-2010年期间，南非增加了猎豹队 Cheetahs（球员来自自由州和北开普省），澳大利亚增加了西部力量 Western Force 队。
              </p>
              <p>
                <b>Super Rugby（15支队）</b> 2011-2015年期间，澳大利亚增加了墨尔本背叛者队 Melbourne Rebels。
              </p>
              <p>
                <b>Super Rugby 阿根廷和日本</b> 超级橄榄球扩展了阿根廷和日本两个国家，分别加入了美洲豹 Jaguares 和太阳狼 Sunwolves 队。
              </p>
            </div>
            <div className="news-footer">
              <span className="news-channel">
                <a href="http://www.sanzarrugby.com/superrugby/">官网</a>
              </span>
              <span className="news-time">
                <a href="https://www.wikiwand.com/en/Super_Rugby">Wikipedia</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
