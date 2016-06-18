import React from 'react';

import {Image} from 'react-semantify';

export default React.createClass({

  render() {
    let {pageUrl, ...childProps} = this.props;

    return (
      <a {...childProps} target="_blank" href={`http://www.facebook.com/share.php?u=http://wowafrica.tw${pageUrl}`}>
        <Image className="mini" src="/images/facebook_button.png"/>
      </a>
    );
  }
});
