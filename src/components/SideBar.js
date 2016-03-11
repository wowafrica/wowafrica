import React      from 'react';
import MenuStore  from '../stores/MenuStore';

import {
  Sidebar, Menu, Item, Dropdown, Icon, Text
}  from 'react-semantify';

export default React.createClass({

  getInitialState() {
    return {
      currentMenu: MenuStore.getAll()
    };
  },

  render() {
    return (
      <Sidebar className="inverted vertical menu" init='hide'>
        <Item id="menu-logo" style={{paddingTop: '14px'}}>
          <a href="/">
            <img src="/images/logo_color_trans.png" style={{width: '180px'}}/>
          </a>
        </Item>
        {this.renderMenu()}
      </Sidebar>
    );
  },

  renderMenu() {
    let {currentMenu} = this.state;
    return (
      currentMenu.map((section) => {
        return (
          <Item>
            <div className="header">
              {section.showName}
              {this.renderItem(section)}
            </div>
          </Item>
        );
      })
    );
  },

  renderItem(section) {
    let items = section.subPage.map((page) => {
      return (
      <Item type="link"
            href={page.url}
            onClick={this._onClick}>
        {page.showName}
      </Item>
      );
    });

    return (
      <Menu className="inverted vertical">
        {items}
      </Menu>
    );
  },

  _onClick(e) {
    let {pathname, hash} = e.currentTarget;
    history.pushState({pathname: pathname, hash: hash}, '', pathname);
    RouteAction.updatePath(pathname, hash);
    e.preventDefault();
  }
});
