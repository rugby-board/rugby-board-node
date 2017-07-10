import { h, Component } from 'preact';

export default class Error extends Component {
  render() {
    return (
      <div className="error">
        <div className="error-message">
          {this.props.text}
        </div>
      </div>
    );
  }
}
