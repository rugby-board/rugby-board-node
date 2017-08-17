import { h, Component } from 'preact';

export default class CurrieCup extends Component {
  render() {
    return (
      <div className="news">
        <div className="news-wrap" id="six-nations">
          <div className="news-item">
            <div className="news-title">
              南非库里杯
            </div>
            <div className="news-content">
              <p>
                南非国内省级赛事。
              </p>
            </div>
            <div className="news-footer">
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
