'use strict';

import $            from 'jquery';
import React        from 'react/addons';
import Semantify    from 'react-semantify';
import NationsStore from '../stores/NationsStore';

let {Modal, Icon, Header} = Semantify;

export default React.createClass({

  getInitialState() {
    return {
      nation: NationsStore.getCurrentNation()
    };
  },

  componentDidMount() {
    NationsStore.addShowListener(this._onShow);
  },

  componentWillUnmount() {
    NationsStore.removeShowListener(this._onShow);
  },

  _onShow() {
    this.setState({
      nation: NationsStore.getCurrentNation()
    });
    $(React.findDOMNode(this.refs.modal)).modal('show');
  },

  render() {
    let {nation} = this.state;
    console.log('Modal Show: ' + JSON.stringify(nation));
    return (
      <Modal ref="modal" init={true}>
        <Icon className="close"/>
        <Header>{nation.iso}</Header>
      </Modal>
    );
  }
});
