import React from 'react';

import styles from './index.css';

let CategoryBoxMore = ({onCategoryBoxClick}) => (
  <div className="middle aligned centered column">
    <div className={styles.categoryBoxMore}>
      <a href={'/view_post_list/category/new'} onClick={onCategoryBoxClick}>
        <div className={styles.categoryBoxMoreTitle}>
          閱讀更多文章
        </div>
      </a>
    </div>
  </div>
);

export default CategoryBoxMore;
