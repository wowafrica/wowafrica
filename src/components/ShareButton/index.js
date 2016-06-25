import React from 'react';

import {Image} from 'react-semantify';

export default React.createClass({

  render() {
    let {pageUrl, ...childProps} = this.props;

    return (
      <a {...childProps} target="_blank" href={`https://www.facebook.com/share.php?u=https://wowafrica.tw${pageUrl}`}>
        <Image className="mini" src="/images/facebook_button.png"/>
      </a>
    );
  }
});
