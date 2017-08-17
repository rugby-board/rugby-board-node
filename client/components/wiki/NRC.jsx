import { h, Component } from 'preact';

export default class NRC extends Component {
  render() {
    return (
      <div className="news">
        <div className="news-wrap" id="six-nations">
          <div className="news-item">
            <div className="news-title">
              澳大利亚国家橄榄球冠军赛 National Rugby Championship
            </div>
            <div className="news-content">
              <p>
                澳大利亚国内省级赛事。
              </p>
            </div>
            <div className="news-footer">
              <span className="news-channel">
                <a href="http://www.rugby.com.au/competitions/nrc">官网</a>
              </span>
              <span className="news-time">
                <a href="https://www.wikiwand.com/en/National_Rugby_Championship">Wikipedia</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
