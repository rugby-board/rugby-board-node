import { h, Component } from 'preact';

export default class ErrorMessage extends Component {
  render() {
    return (
      <div className="error">
        <div className="error-wrap">
          <div className="error-message">
            {this.props.error.message}
          </div>
        </div>
      </div>
    );
  }
}
