import React from 'react';

import {Image} from 'react-semantify';

import styles from './index.css';

export default React.createClass({

  render() {
    let {pageUrl, ...childProps} = this.props;

    return (
      <div>
        <a {...childProps}
           className={styles.url}
           target="_blank"
           href={`https://www.facebook.com/share.php?u=https://wowafrica.tw${pageUrl}`}>
        <Image className="mini" src="/images/facebook_button.png"/>
        </a>
      </div>
    );
  }
});
