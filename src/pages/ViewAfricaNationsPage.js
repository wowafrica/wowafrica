"use strict";

import React      from 'react/addons';
import IndexMenu  from '../components/IndexMenu';

export default React.createClass({

  render() {
    return (
      <div>
        <div className="container">
          <IndexMenu/>
          <p>Views Africa Nations</p>
        </div>
      </div>
    );
  }
});
