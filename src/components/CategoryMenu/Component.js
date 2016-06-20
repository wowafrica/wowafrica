import React from 'react';

import {
  Item, Menu, Text
} from 'react-semantify';

let CategoryMenu = ({categories, nameMap, onCategoryClick}) => (
  <div id="category-menu">
    <Menu className="secondary">
      {
        categories.map((section) => (
          <Item type="link"
                key={section}
                href={`/view_post_list/category/${section}`}
                onClick={onCategoryClick}
                active={false}>
            <Text style={{color: '#E8F5FF'}}>
              {nameMap[section]}
            </Text>
          </Item>
        ))
      }
    </Menu>
  </div>
);

export default CategoryMenu;
