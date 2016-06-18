import React      from 'react';
import IndexMenu  from '../../components/IndexMenu';

import styles from './index.css';

export default React.createClass({

  render() {
    return (
      <div>
        <div className={styles.containerHeader}>
          <IndexMenu/>
        </div>
        <div className="container-content">
          <p>Views Africa People</p>
        </div>
      </div>
    );
  }
});
