import React           from 'react/addons';
import Semantify       from 'react-semantify';
import PostListConfig  from '../configures/PostListConfig';
import RouteActions    from '../actions/RouteAction';

let {Dropdown, Icon, Item, Menu, Text} = Semantify;

export default React.createClass({

  getInitialState() {
    return {
      currentMenu: PostListConfig.categories
    };
  },

  componentDidMount() {
    $('#category-menu')
    .sticky({
      offset: 37,
    })
    ;
  },

  render() {

    let visStr = this.props.hide ? 'hidden' : 'visible';

    return (
      <div className="ui sticky" id="category-menu" style={{height: '37px', backgroundColor: '#298399', letterSpacing: '15px', marginBottom: '1rem'}}>
        <div className="ui centered grid">
          <Menu className="secondary">
            {this.renderDropdown()}
          </Menu>
        </div>
      </div>
    );
  },

  renderDropdown() {
    let {currentMenu} = this.state;
    return (
      currentMenu.map((section) => {
        let showName = PostListConfig.categoryMap[section];
        let dropdownSelect = false;

        return (
          <Item active={dropdownSelect}>
              <Text style={{color: 'white'}}>{showName}</Text>
          </Item>
        );
      })
    );
  },

  renderItem(subPage) {
    return (
      subPage.map((page) => {
        return (
        <Item type="link"
              active={page.status}
              href={page.url}
              onClick={this._onClick}>
          {page.showName}
        </Item>
        );
      })
    );
  },

  _onClick(e) {
    let {pathname} = e.currentTarget;
    let {hash} = e.currentTarget;
    history.pushState({pathname: pathname, hash: hash}, '', pathname);
    RouteActions.updatePath(pathname, hash);
    e.preventDefault();
  }
});
