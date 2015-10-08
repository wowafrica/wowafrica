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

  },

  render() {

    let visStr = this.props.hide ? 'hidden' : 'visible';

    return (
      <div id="category-menu" style={{display: 'none'}}>
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
          <Item type="link" href={'/view_post_list/category/'+section} onClick={this._onClick} active={dropdownSelect}>
              <Text style={{color: '#E8F5FF'}}>{showName}</Text>
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
