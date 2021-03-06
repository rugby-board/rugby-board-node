import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class Share extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    const shareUrl = 'https://twitter.com/intent/tweet?url='
      + encodeURIComponent(window.location.href)
      + '&text='
      + encodeURIComponent(this.props.data.title)
      + '&button_hashtag=rugbynewsboard';

    window.open(shareUrl, '_blank', 'width=550,height=370');
  }

  render() {
    return (
      <div className="share">
        <Link href="/">
          <i className="fa fa-fw fa-reply" />
        </Link>
        <a
          href="#share"
          onClick={this.handleClick}
          className="tb"
        >
          <i className="fa fa-fw fa-twitter" />
        </a>
      </div>
    );
  }
}
