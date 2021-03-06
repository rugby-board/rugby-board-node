import { h, Component } from 'preact';

export default class Top14 extends Component {
  render() {
    return (
      <div className="news">
        <div className="news-wrap" id="six-nations">
          <div className="news-item">
            <div className="news-title">
              法国 Top 14 联赛
            </div>
            <div className="news-content">
              <p>
                Top 14 联赛成立于1892年，是法国橄榄球协会举办的最高级别橄榄球联赛。最初的对决发生在法兰西竞技场 Stade Français 和法国竞技 Racing Club de France （现在的竞技92）之间。
              </p>
            </div>
            <div className="news-footer">
              <span className="news-channel">
                <a href="http://www.lnr.fr/rugby-top-14">官网</a>
              </span>
              <span className="news-time">
                <a href="https://www.wikiwand.com/en/Top_14">Wikipedia</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
