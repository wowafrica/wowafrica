import React from 'react';

import styles from './index.css';

import {
  Dropdown, Icon, Item, Menu, Text
} from 'react-semantify';

let MenuItems = ({name, subPage, onMenuClick}) => {
  if (name === 'article') {
    return <Menu />;
  }

  return (
    <Menu className={styles.dropdownMenu}>
     {subPage.map((page) => (
       <Item type="link"
             active={page.status}
             href={page.url}
             onClick={onMenuClick}>
         {page.showName}
       </Item>
     ))}
   </Menu>
  );
};

let MenuDropdown = ({section, onMenuClick}) => {
  let {showName, name, subPage, currentPage} = section;
  let dropdownSelect = false;

  if (currentPage !== '') {
    showName = currentPage;
  }

  for (let page of subPage) {
    if (page.status) {
      dropdownSelect = true;
    }
  }

  return (
    <Item id={`btn-${name}`} active={dropdownSelect}>
      <Dropdown init={true}>
        <Text style={{color: '#E8F5FF'}}>{showName}</Text>
        <Icon className="dropdown" style={{color: '#E8F5FF'}}/>
        <MenuItems name={name} subPage={subPage} onMenuClick={onMenuClick}/>
      </Dropdown>
    </Item>
  );
};

let IndexMenu = ({currentMenu, onMenuClick}) => (
  <div id={styles.indexMenu}>
    <div className="ui centered grid">
      <Menu className="secondary">
        <Item id="menu-logo" style={{paddingTop: '14px'}}>
          <a href="/">
            <img src="/images/wow_logo2.png" style={{width: '180px'}}/>
          </a>
        </Item>
        {currentMenu.map((section) =>(
          <MenuDropdown section={section} onMenuClick={onMenuClick}/>
        ))}
      </Menu>
    </div>
  </div>
);

export default IndexMenu;
