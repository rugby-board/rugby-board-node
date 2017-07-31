import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import ListMenu from './menus/ListMenu';
import DropdownMenu from './menus/DropdownMenu';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDropdown: false,
    };

    this.handleIconDropdown = this.handleIconDropdown.bind(this);
    this.handleIndexDropdown = this.handleIndexDropdown.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  handleDropdown(isDropdown) {
    this.setState({
      isDropdown: !isDropdown,
    });
  }

  handleIconDropdown() {
    this.setState(prevState => ({
      isDropdown: !prevState.isDropdown,
    }));
  }

  handleIndexDropdown() {
    if (this.state.isDropdown === true) {
      this.setState({ isDropdown: false });
    }
  }

  render() {
    const isDropdown = this.state.isDropdown;
    return (
      <header className="menu">
        <div className="menu-navicon">
          <button onClick={this.handleIconDropdown}>
            {isDropdown ? (
              <i className="fa fa-close fa-lg fa-inverse" />
            ) : (
              <i className="fa fa-navicon fa-lg fa-inverse" />
            )}
          </button>
        </div>
        <div className="menu-name">
          <Link onClick={this.handleIndexDropdown} href="/">Rugby News Board</Link>
        </div>
        <ListMenu />
        <DropdownMenu isDropdown={this.state.isDropdown} handleDropdown={this.handleDropdown} />
      </header>
    );
  }
}
