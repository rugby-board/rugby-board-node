import { h, Component } from 'preact';

import { translateWord } from '../../data';

export default class RugbyDictQuery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      translationInput: '',
      translationResult: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleTranslate = this.handleTranslate.bind(this);
  }

  handleTranslate() {
    if (this.state.translationInput === '') {
      return;
    }

    const self = this;
    translateWord(this.state.translationInput, (json) => {
      if (!json.result.length) {
        self.setState({ translationResult: 'No result' });
      } else {
        self.setState({ translationResult: json.result.join(' ') });
      }
    });
  }

  handleChange(event) {
    this.setState({ translationInput: event.target.value });
  }

  render() {
    return (
      <div className="news" id="translate-result">
        <div className="news-wrap">
          <div className="news-item">
            <div className="news-title">
              Rugby Dictionary
            </div>
            <div className="news-content admin">
              <input
                type="text"
                className="dict-input"
                value={this.state.translationInput}
                onChange={this.handleChange}
              />
              <button onClick={this.handleTranslate}>
                Translate
              </button>
            </div>
            <div className="news-content">
              {this.state.translationResult}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
