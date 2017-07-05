import { h, Component } from 'preact';

export default class Top14 extends Component {
  render() {
    return (
      <div className="news">
        <div className="news-wrap" id="six-nations">
          <div className="news-item">
            <div className="news-title">
              法国 TOP14 联赛
            </div>
            <div className="news-content">
              <p>
                Coming soon.
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
