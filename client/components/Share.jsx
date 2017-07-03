import React from 'react';
import { Link } from 'react-router-dom';

export default class Share extends React.Component {
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
        <Link to="/">返回</Link>
        &nbsp;
        <a
          href="#"
          onClick={this.handleClick}
          className="tb">
          分享到 Twitter
        />
      </div>
    );
  }
}
