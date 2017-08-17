import { h, Component } from 'preact';

export default class Mitre10Cup extends Component {
  render() {
    return (
      <div className="news">
        <div className="news-wrap" id="six-nations">
          <div className="news-item">
            <div className="news-title">
              新西兰 Mitre 10 Cup
            </div>
            <div className="news-content">
              <p>
                新西兰国内省级赛事。
              </p>
            </div>
            <div className="news-footer">
              <span className="news-channel">
                <a href="http://www.mitre10cup.co.nz/">官网</a>
              </span>
              <span className="news-time">
                <a href="https://www.wikiwand.com/en/Mitre_10_Cup">Wikipedia</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
