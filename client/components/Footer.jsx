import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="columns">
          <div className="column column-1-4 footer-column">
            <h3>关于</h3>
            <div>Rugby News Board, 2017.</div>
            <div>Copyright &copy; <a href="https://crispgm.com/">David Zhang</a>.</div>
          </div>
          <div className="column column-1-4 footer-column">
            <h3>资讯板块</h3>
            <div>新闻</div>
            <div>赛事比分</div>
          </div>
          <div className="column column-1-4 footer-column">
            <h3>精彩赛事</h3>
            <div>超级橄榄球</div>
            <div>英超联赛</div>
            <div>TOP14</div>
            <div>PRO12</div>
            <div>橄榄球世界杯</div>
          </div>
          <div className="column column-1-4 footer-column">
            <h3>社交网络</h3>
            <div>Twitter</div>
          </div>
        </div>
      </footer>
    );
  }
}
