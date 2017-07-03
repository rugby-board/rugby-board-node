import React from 'react';
import PropTypes from 'prop-types';

export default class Loading extends React.Component {
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

Loading.propTypes = {
  text: PropTypes.string.isRequired,
};
