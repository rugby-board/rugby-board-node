import { h, Component } from 'preact';

import LoadingImg from '../assets/loading.svg';

export default class Loading extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column">
          <div className="loading">
            <img src={LoadingImg} alt={this.props.text} />
          </div>
        </div>
      </div>
    );
  }
}
