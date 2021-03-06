import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class Heading extends Component {
  render() {
    let link = this.props.data.more_text;
    if (this.props.data.more_text && this.props.data.more_link) {
      if (this.props.data.use_router === 0) {
        link = (
          <a
            href={this.props.data.more_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.data.more_text}
          </a>
        );
      } else {
        link = (
          <Link href={this.props.data.more_link}>
            {this.props.data.more_text}
          </Link>
        );
      }
    }
    return (
      <div className="heading">
        <div className="heading-more">
          {link}
        </div>
        <div className="heading-title" id={this.props.data.id}>
          {this.props.data.icon &&
            <i className={`fa fa-fw fa-${this.props.data.icon}`} />
          }
          &nbsp;{this.props.data.title}
        </div>
      </div>
    );
  }
}
