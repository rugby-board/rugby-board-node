import { h, Component } from 'preact';

import { setDocumentTitle } from '../util';
import Heading from '../components/Heading';

export default class NotFound extends Component {
  constructor(props) {
    super(props);

    const notFoundHeading = {
      id: '404',
      title: '错误 404',
      icon: 'chain-broken',
      more_text: '',
      more_link: '',
    };

    setDocumentTitle('错误 404');

    this.state = { notFoundHeading };
  }

  render() {
    return (
      <div className="columns">
        <div className="column">
          <Heading data={this.state.notFoundHeading} />
          <div className="article">
            <div className="article-content">
              <div className="not-found">
                <p>404 Not Found</p>
                <img src="https://source.unsplash.com/random" alt="Unsplash Random" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
