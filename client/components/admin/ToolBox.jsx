import { h, Component } from 'preact';

import moment from 'moment';

export default class ToolBox extends Component {
  constructor(props) {
    super(props);

    this.state = { output: '' };
    this.handleTable = this.handleTable.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleToday = this.handleToday.bind(this);
  }

  handleTable() {
    this.setState({
      output: `| 主队 | 比分 | 客队 |
|----|----|----|
|  |  |  |
|  |  |  |
|  |  |  |`,
    });
  }

  handleTitle() {
    this.setState({
      output: [
        '英超 Premiership 橄榄球联赛',
        '法国 TOP14 联赛',
        'PRO14 联赛',
        '超级橄榄球 Super Rugby',
        '国际测试赛',
        '欧洲冠军杯 European Champions Cup',
        '欧洲挑战杯 European Challenge Cup',
        '库里杯 Currie Cup 超级组',
        '新西兰 Mitre 10 Cup',
        '澳大利亚国家橄榄球冠军赛 NRC',
        '美国职业橄榄球大联盟 MLR',
        '',
      ].join(' ' + moment().format('M.D') + '\n'),
    });
  }

  handleToday() {
    this.setState({
      output: [
        moment().format('MM.DD'),
        moment().format('YYYY-MM-DD'),
        moment().format('YYYYMMDD'),
      ].join('\n'),
    });
  }

  render() {
    return (
      <div className="news" id="format-result">
        <div className="news-wrap">
          <div className="news-item">
            <div className="news-title">
              Tool Box
            </div>
            <div className="news-content admin">
              <textarea>{ this.state.output }</textarea>
            </div>
            <div className="news-content">
              <a onClick={this.handleTable} role="button" tabIndex="0">
                <i className="fa fa-table" />
              </a>
              &nbsp;
              <a onClick={this.handleTitle} role="button" tabIndex="0">
                <i className="fa fa-flag-checkered" />
              </a>
              &nbsp;
              <a onClick={this.handleToday} role="button" tabIndex="0">
                <i className="fa fa-calendar-check-o" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
