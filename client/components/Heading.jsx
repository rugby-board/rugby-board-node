import React from 'react';
import { Link } from 'react-router-dom';

export default class Heading extends React.Component {
  render() {
    var link = this.props.data.more_text;
    if (this.props.data.more_text && this.props.data.more_link) {
      link = (
        <Link to={this.props.data.more_link}>{this.props.data.more_text}</Link>
      );
    }
    return (
      <div className="heading">
        <div className="heading-more">
          {link}
        </div>
        <div className="heading-title" id={this.props.data.id}>
          {this.props.data.title}
        </div>
      </div>
    );
  }
}
