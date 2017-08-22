import { h, Component } from 'preact';
import Portal from 'preact-portal';

export default class ErrorMessage extends Component {
  render() {
    return (
      <Portal into="body">
        <div className="error">
          <div className="error-wrap">
            <div className="error-message">
              {this.props.error.message}
            </div>
          </div>
        </div>
      </Portal>
    );
  }
}
