import React from 'react';

import {
  Menu, Item
}  from 'react-semantify';

let SectionItem = ({showName, url, onMenuClick}) => (
  <Item type="link"
        href={url}
        onClick={onMenuClick}>
    {showName}
  </Item>
);

let Section = ({showName, subPage, onMenuClick}) => (
  <Item>
    <div className="ui inverted large header">
      {showName}
      {subPage.map((page) => (
        <SectionItem showName={page.showName}
                     url={page.url}
                     onMenuClick={onMenuClick}/>
      ))}
    </div>
  </Item>
);

export default React.createClass({

  componentDidMount() {
    $('.ui.sidebar').sidebar('hide');
    //$('.ui.sidebar').sidebar('setting', 'debug', true);
    $('.ui.sidebar').sidebar('setting', 'onHide', () => {
      $('#side-menu').addClass('sidebar-trans');
    });
    $('.ui.sidebar').sidebar('setting', 'onVisible', () => {
      $('#side-menu').removeClass('sidebar-trans');
    });
    //document.querySelectorAll('.ui.sidebar')[0].sidebar();
    //document.querySelectorAll('.ui.sidebar')[0].style.background = 'blue';
    //document.querySelectorAll('#side-menu')[0].sidebar('get oninput');
    //document.querySelectorAll('#side-menu')[0].onHidden = () => {
    //  console.log('hidden!');
    //};
  },

  render() {
    let {currentMenu, onMenuClick} = this.props;

    return (
      <div>
        <Item id="sidebar-menu-logo" style={{paddingTop: '14px'}}>
          <a href="/">
            <img src="/images/logo_color_trans.png" style={{width: '180px'}}/>
          </a>
        </Item>
        {currentMenu.map((section) =>(
          <Section showName={section.showName}
                   subPage={section.subPage}
                   onMenuClick={onMenuClick}/>
        ))}
      </div>
    );
  }
});
