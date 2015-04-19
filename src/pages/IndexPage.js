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
          <div className="header" style={{marginTop: '1%', minHeight: '600px', textAlign: 'center', backgroundPosition: 'top center', backgroundImage: 'url(https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xpa1/t31.0-8/11154796_779010435550566_7018350735656129504_o.jpg)'}}>
            <div className="hearder-box" style={{paddingTop: '50px'}}>
              <p className="header-title" style={{fontSize: '100px', letterSpacing: '38px', fontWeight: 'bolder', marginBottom: '0'}}>WOW!</p>
              <p className="header-title" style={{fontSize: '80px', letterSpacing: '34px', fontWeight: 'bolder'}}>AFRICA</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
