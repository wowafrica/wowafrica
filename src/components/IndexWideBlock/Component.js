import React from 'react';

import styles from './index.css';

let Section = ({image, title, id, displayType, onIndexWideBlockClick}) => (
  <div>
    <a href={`/view_post_list/posts/${id}`} onClick={onIndexWideBlockClick}>
      <div className={styles.indexWide}
           style={{
             backgroundImage:    `url(${image})`,
             backgroundPosition: 'center'
           }}>
        <div className={styles.indexWideBoxBefore}/>
      <div className={styles.indexWideBox}>
        <div className={styles.indexWideType}>
          {displayType}
        </div>
        <div className="ui divider"
             style={{
               width:     '175px',
               borderTop: '1px solid white',
               margin:    '0.3rem 0rem 0.3rem 0rem'
             }}/>
          <div className={styles.indexWideTitle}>
            {title}
          </div>
        </div>
      </div>
    </a>
  </div>
);

let IndexWideBlock = ({posts, displayType, onIndexWideBlockClick}) => (
  <div>
    {
      posts.slice(0, 2).map((post) => (
        <Section
          image={post.image.replace(/_540.jpg/g, '_1280.jpg')}
          title={post.title}
          id={post.id}
          displayType={displayType}
          onIndexWideBlockClick={onIndexWideBlockClick}
          />
      ))
    }
  </div>
);

export default IndexWideBlock;
