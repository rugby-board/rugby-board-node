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
                日本国内联赛。
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
