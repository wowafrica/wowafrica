import React          from 'react';
import ReactDOM       from 'react-dom';
import RouteActions   from '../../src/actions/RouteAction';
import App            from '../../src/App';
import NationModal    from '../../src/components/NationModal';
import SideBar        from '../../src/components/SideBar';
import Provider       from '../../src/utility/Provider';
import configureStore from '../../src/stores';

import '../styles/index.css';

let pathName = location.pathname;
console.log(pathName);

const store = configureStore(undefined);

ReactDOM.render(<SideBar />, document.getElementById('side_bar'));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('content')
);
ReactDOM.render(<NationModal />, document.getElementById('nation_modal'));

RouteActions.updatePath(pathName);

window.onpopstate = (e) => {
  let pathname = location.pathname;

  if (e.state !== null && typeof e.state.pathname !== 'undefined') {
    pathname = e.state.pathname;
  }
  // let {pathname} = e.state || {pathname: '/'};
  console.log(pathname);
  RouteActions.updatePath(pathname);
};
