import { h, render, Component } from 'preact';

export default class Loading extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column">
          <div className="loading">
            {this.props.text}
          </div>
        </div>
      </div>
    );
  }
}
