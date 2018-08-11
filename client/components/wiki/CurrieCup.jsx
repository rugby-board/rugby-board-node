import { h, Component } from 'preact';

export default class CurrieCup extends Component {
  render() {
    return (
      <div className="news">
        <div className="news-wrap" id="six-nations">
          <div className="news-item">
            <div className="news-title">
              南非库里杯 Currie Cup
            </div>
            <div className="news-content">
              <p>
                南非国内省级赛事。
              </p>
            </div>
            <div className="news-footer">
              <span className="news-channel">
                <a href="https://twitter.com/thecurriecup">官方 Twitter</a>
              </span>
              <span className="news-time">
                <a href="https://www.wikiwand.com/en/Currie_Cup">Wikipedia</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
