'use strict';

import React        from 'react/addons';
import Semantify    from 'react-semantify';
import NationsStore from '../stores/NationsStore';

let {Modal, Icon, Header} = Semantify;

export default React.createClass({

  getInitialState() {
    return {
      currentNation: NationsStore.getCurrentNation()
    };
  },

  render() {
    let {currentNation} = this.state;
    console.log(currentNation);
    return (
      <Modal init={true}>
        <Icon className="close"/>
        <Header>Test</Header>
      </Modal>
    )
  }
});
