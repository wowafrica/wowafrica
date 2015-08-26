import React        from 'react/addons';
import Semantify    from 'react-semantify';
import MenuStore    from '../stores/MenuStore';
import RouteActions from '../actions/RouteAction';

let {Dropdown, Icon, Item, Menu, Text} = Semantify;

export default React.createClass({

  getInitialState() {
    return {
      currentMenu: MenuStore.getAll()
    };
  },

  render() {

    let visStr = this.props.hide ? 'hidden' : 'visible';

    return (
        <Menu className="secondary" id="index-menu" style={{visibility: visStr}}>
          <Item id="menu-logo">
            <a href="/#firstPage">
              <img src="/images/wow_logo.png" style={{width: '104px'}}/>
            </a>
          </Item>
          {this.renderDropdown()}
        </Menu>
    );
  },

  renderDropdown() {
    let {currentMenu} = this.state;
    return (
      currentMenu.map((section) => {
        let showName = section.showName;
        let dropdownSelect = false;

        if (section.currentPage !== '') {
          showName = section.currentPage;
        }

        for (let page of section.subPage) {
          if (page.status) {
            dropdownSelect = true;
          }
        }

        return (
          <Item active={dropdownSelect}>
            <Dropdown init={true}>
              <Text>{showName}</Text>
              <Icon className="dropdown"/>
              <Menu>
                {this.renderItem(section.subPage)}
              </Menu>
            </Dropdown>
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
