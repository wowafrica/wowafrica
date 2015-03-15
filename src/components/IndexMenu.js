"use strict";

import React from 'react/addons';
import Semantify from 'react-semantify';

let {Menu, Item} = Semantify;

export default React.createClass({

  render() {
    return (
      <Menu>
        <Item type="link">Test</Item>
        <Item type="link">Hi2</Item>
        <Item type="link">By2</Item>
      </Menu>
    );
  }
})
