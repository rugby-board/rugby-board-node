import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class RecommendNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      adjacent: this.props.adjacent,
      related: this.props.related,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: this.props.id,
      adjacent: nextProps.adjacent,
      related: nextProps.related,
    });
  }

  render() {
    let adjacent = '';
    let related = '';
    const curList = {};
    curList[this.state.id] = 1;

    if (this.state.adjacent && this.state.adjacent.length > 0) {
      adjacent = this.state.adjacent.map((news) => {
        curList[news.id] = 1;
        return (
          <div>
            <Link href={`/news/${news.id}`}>
              {news.title}
            </Link>
          </div>
        );
      });
    }

    let counter = 0;
    if (this.state.related && this.state.related.length > 0) {
      related = this.state.related.map((news) => {
        if (counter >= 2 || curList[news.id] !== undefined) {
          return false;
        }
        counter += 1;
        return (
          <div>
            <a href={`#/news/${news.id}`}>
              {news.title}
            </a>
          </div>
        );
      });
    }
    return (
      <div className="news">
        <div className="news-wrap">
          <div className="news-item news-recommend">
            <div className="news-recommend-channel">
              <div className="news-recommend-channel-name">
                <i className="fa fa-exchange" /> 前后看看
              </div>
              <div className="news-recommend-channel-list">
                {adjacent}
              </div>
            </div>
            <div className="news-recommend-channel">
              <div className="news-recommend-channel-name">
                <i className="fa fa-history" /> 相关推荐
              </div>
              <div className="news-recommend-channel-list">
                {related}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
