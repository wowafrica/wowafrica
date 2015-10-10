import React        from 'react/addons';
import Semantify    from 'react-semantify';
import MenuStore    from '../stores/MenuStore';
import RouteStore   from '../stores/RouteStore';
import RouteAction  from '../actions/RouteAction';

let {Dropdown, Icon, Item, Menu, Text} = Semantify;

export default React.createClass({

  getInitialState() {
    return {
      currentMenu: MenuStore.getAll()
    };
  },

  componentDidMount() {
    function toggleCatMenu() {
      $('#category-menu').slideToggle();
    }

    if (RouteStore.getCurrentRoute().name == 'index') {
      $('#btn-article').off('click', toggleCatMenu);
    }
    else {
      $('#btn-article').on('click', toggleCatMenu);
    }
  },

  render() {

    return (
      <div id="index-menu">
        <div className="ui centered grid">
          <Menu className="secondary">
            <Item id="menu-logo" style={{paddingTop: '13px'}}>
              <a href="/">
                <img src="/images/wow_logo2.png" style={{width: '200px'}}/>
              </a>
            </Item>
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
        let showName = section.showName;
        let name = section.name;
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
          <Item id={'btn-'+name} active={dropdownSelect}>
            <Dropdown init={true}>
              <Text style={{color: '#E8F5FF'}}>{showName}</Text>
              <Icon className="dropdown" style={{color: '#E8F5FF'}}/>
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
    let {pathname, hash} = e.currentTarget;
    history.pushState({pathname: pathname, hash: hash}, '', pathname);
    RouteAction.updatePath(pathname, hash);
    e.preventDefault();
  }
});
