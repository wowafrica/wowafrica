import React        from 'react/addons';
import Semantify    from 'react-semantify';

let {Dropdown, Icon, Item, Menu, Text} = Semantify;

export default React.createClass({

  getInitialState() {
    return {

    };
  },

  render() {
    return (
      <div className="section" id={this.props.sid}>
        <div className="header-box">
          <p className="header-title" style={{fontSize: '80px', letterSpacing: '34px', fontWeight: 'bolder'}}>{this.props.title}</p>
        </div>
      </div>
    );
  },

});
