import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class Heading extends Component {
  render() {
    let link = this.props.data.more_text;
    if (this.props.data.more_text && this.props.data.more_link) {
      link = (
        <Link href={this.props.data.more_link}>
          {this.props.data.more_text}
        </Link>
      );
    }
    return (
      <div className="heading">
        <div className="heading-more">
          {link}
        </div>
        <div className="heading-title" id={this.props.data.id}>
          {this.props.data.icon &&
            <i className={`fa fa-${this.props.data.icon}`}>&nbsp;</i>
          }
          {this.props.data.title}
        </div>
      </div>
    );
  }
}
