import React from 'react';

export default class AdminPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputResult: '',
      errorMessage: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFormat = this.handleFormat.bind(this);
  }

  handleFormat() {
    this.setState({ errorMessage: 'Formatting' });
    var input = this.state.inputResult;
    var lines = input.split("\n");
    var formatted = "| 主队 | 比分 | 客队 |\n|----|----|----|\n";
    var teams = new Array();
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      var results = line.split("\t");
      for (var j = 0; j < results.length; j++) {
        if (j == 0) {
          continue;
        }
        if (j == 1) {
          formatted += '| ';
        }
        if (j == 1 || j == 3) {
          teams.push(results[j]);
        }
        formatted += results[j] + ' | ';
      }
      formatted += "\n";
    }
    this.setState({ inputResult: formatted });

    this.setState({ errorMessage: 'Translating' });
    var queryTeams = teams.join(' | ');
    var pos = 0

    var self = this;
    const url = '/translate/' + queryTeams;
    self.setState({ errorMessage: 'Processing' });
    fetch(url).then(function (response) {
      return response.json();
    }).then(function (json) {
      var translations = json.result;
      for (var i = 0; i < translations.length; i++) {
        var chineseWord = translations[i];
        var englishWord = teams[i];
        pos = formatted.indexOf(englishWord, pos);
        formatted = [formatted.slice(0, pos), chineseWord + ' ', formatted.slice(pos)].join('');
        self.setState({ inputResult: formatted });
        self.setState({ errorMessage: 'Done' });
      }
    });
  }

  handleChange(event) {
    this.setState({ inputResult: event.target.value });
  }

  render() {
    return (
      <div className="news" id="format-result">
        <div className="news-wrap">
          <div className="news-item">
            <div className="news-title">
              PlanetRugby Result
            </div>
            <div className="news-content admin">
              <textarea
                id="results-input"
                value={this.state.inputResult}
                onChange={this.handleChange}
              >
              </textarea>
              <div className="error-message">{this.state.errorMessage}</div>
              <button onClick={this.handleFormat}>
                Format
              </button>
            </div>
            <div className="news-content">
              {this.state.formattedResult}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
