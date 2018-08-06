import { h, Component } from 'preact';

export default class MajorLeagueRugby extends Component {
  render() {
    return (
      <div className="news">
        <div className="news-wrap" id="six-nations">
          <div className="news-item">
            <div className="news-title">
              美国橄榄球大联盟
            </div>
            <div className="news-content">
              <p>
                美国橄榄球大联盟 Major League Rugby。
              </p>
            </div>
            <div className="news-footer">
              <span className="news-channel">
                <a href="https://www.usmlr.com/">官网</a>
              </span>
              <span className="news-time">
                <a href="https://en.wikipedia.org/wiki/Major_League_Rugby">Wikipedia</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
