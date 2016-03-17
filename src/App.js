import React      from 'react';
import RouteStore from './stores/RouteStore';
import IndexPage  from './pages/IndexPage';

export default React.createClass({

  getInitialState() {
    return {
      currentRoute: RouteStore.getCurrentRoute()
    };
  },

  componentDidMount() {
    RouteStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    RouteStore.removeChangeListener(this._onChange);
  },

  render() {
    let {currentRoute} = this.state;
    let CurrentPage = currentRoute.config['page'];
    return (
      <div>
        <div id="side-menu" className="ui vertical fixed icon inverted menu sidebar-trans">
          <a className="item" onClick={this._onSideBarClick}>
            <i className="sidebar icon"></i>
          </a>
        </div>
        <CurrentPage pageUrl={currentRoute.url}/>
      </div>
    );
  },

  _onChange() {
    this.setState({
      currentRoute: RouteStore.getCurrentRoute()
    });
  },

  _onSideBarClick(e) {
    e.preventDefault();
    $('.ui.sidebar').sidebar('toggle');
  }
});
