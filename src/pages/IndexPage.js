'use strict';

import React          from 'react/addons';
import IndexMenu      from '../components/IndexMenu';
import RouteConstants from '../constants/RouteConstants';

export default React.createClass({

  render() {

    return (
      <div>
        <div className="container-header">
          <IndexMenu />
        </div>
        <div className="container-content">
        </div>
      </div>
    );
  }
});
