import React from 'react';

import styles from './index.css';

let CategoryBoxLeft = ({url, onCategoryBoxClick}) => (
  <a href={url} onClick={onCategoryBoxClick}>
    <div className={styles.categoryBoxLeftUp}/>
    <div className={styles.categoryBoxLeftBottom}/>
  </a>
);

let CategoryBoxCenter = ({url, title, onCategoryBoxClick, categoryName}) => (
  <a href={url} onClick={onCategoryBoxClick}>
    <div className={styles.categoryBoxCenterUp}/>
    <div className={styles.categoryBoxCenterBottom}>
      <div className={styles.categoryBoxTitle}>
        {title}
      </div>
      <div className="ui divider" style={{borderTop: '1px solid grey', margin: '0rem 1rem 0.3rem 1rem'}}/>
      <div className={styles.categoryBoxCategory}>
        {categoryName}
      </div>
    </div>
  </a>
);

let CategoryBoxRight = ({url, onCategoryBoxClick}) => (
  <a href={url} onClick={onCategoryBoxClick}>
    <div className={styles.categoryBoxRightUp}/>
    <div className={styles.categoryBoxRightBottom}/>
  </a>
);

let CategoryBox = ({backImg, url, onCategoryBoxClick, title, categoryName}) => (
  <div className="middle aligned column">
    <div className={styles.categoryBox} style={{backgroundImage: `url(${backImg})`}}>
      <div className="ui grid">
        <div className="four wide column" style={{paddingRight: 0}}>
          <CategoryBoxLeft url={url} onCategoryBoxClick={onCategoryBoxClick}/>
        </div>
        <div className="eight wide column" style={{paddingRight: 0, paddingLeft: 0}}>
          <CategoryBoxCenter url={url}
                             onCategoryBoxClick={onCategoryBoxClick}
                             title={title}
                             categoryName={categoryName}/>
        </div>
        <div className="four wide column" style={{paddingLeft: 0}}>
          <CategoryBoxRight url={url} onCategoryBoxClick={onCategoryBoxClick}/>
        </div>
      </div>
    </div>
  </div>
);

export default CategoryBox;
