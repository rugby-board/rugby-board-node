import { h, Component } from 'preact';

import { translateWord } from '../../data';

export default class AdminPage extends Component {
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
    const self = this;
    translateWord(this.state.translationInput, (json) => {
      self.setState({
        translationResult: json.result.join(' '),
      });
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
