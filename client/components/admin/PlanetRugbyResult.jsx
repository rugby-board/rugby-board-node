import { h, Component } from 'preact';

export default class AdminPage extends Component {
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
    const input = this.state.inputResult;
    const lines = input.split('\n');
    const teams = [];
    let formatted = '| 主队 | 比分 | 客队 |\n|----|----|----|\n';

    this.setState({ errorMessage: 'Formatting' });
    for (let i = 0; i < lines.length; i += 1) {
      const line = lines[i];
      const results = line.split('\t');
      for (let j = 0; j < results.length; j += 1) {
        if (j === 0) {
          continue;
        }
        if (j === 1) {
          formatted += '| ';
        }
        if (j === 1 || j === 3) {
          teams.push(results[j]);
        }
        formatted += results[j] + ' | ';
      }
      formatted += '\n';
    }
    this.setState({ inputResult: formatted });

    this.setState({ errorMessage: 'Translating' });
    const queryTeams = teams.join(' | ');
    let pos = 0;

    const self = this;
    const url = '/translate/' + queryTeams;
    self.setState({ errorMessage: 'Processing' });
    fetch(url).then((response) => {
      return response.json();
    }).then((json) => {
      const translations = json.result;
      for (let i = 0; i < translations.length; i += 1) {
        const chineseWord = translations[i];
        const englishWord = teams[i];
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
              />
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
    );
  }
}
