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
    return (
        <Menu className="secondary">
          <Item id="menu-logo">
            <a href="/">
              <img src="/images/a-02.jpg" />
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
    history.pushState({pathname: pathname}, '', pathname);
    RouteActions.updatePath(pathname);
    e.preventDefault();
  }
});
