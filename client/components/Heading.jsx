import React from 'react';

export default class Heading extends React.Component {
  render() {
    var link = this.props.data.more_text;
    if (this.props.data.more_text != '') {
      link = <a href={this.props.data.more_link}>{this.props.data.more_text}</a>;
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
