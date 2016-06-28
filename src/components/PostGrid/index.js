import React      from 'react';
import classnames from 'classnames';

import styles from './index.css';

let GridCard = ({id, title, brief, image, onPostGridClick}) => (
  <a className="card"
     href={`/view_post_list/posts/${id}`}
     onClick={onPostGridClick}>
    <div className={styles.postListCardImg}
         style={{backgroundImage: `url(${image})`}}/>
    <div className="content">
      <div className="header">
        {title}
      </div>
      <div className="meta">
        {brief}
      </div>
    </div>
  </a>
);

let MoreGridCard = ({moreButtonLoading, onMorePostClick}) => (
  <a className="card"
     onClick={onMorePostClick}
     style={{
       boxShadow: 'none',
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center'
     }}>
    <div>
      <div id={styles.postListLoadMoreBtn}
           className={classnames('ui button', {'loading': moreButtonLoading})}>
        載入更多文章
      </div>
    </div>
  </a>
);

let PostGrid = ({
  title, posts, onMorePostClick, moreButtonLoading, moreButton = false, onPostGridClick
}) => (
  <div className="ui container">
    <div className={styles.postListTitle}>
      {title}
    </div>
    <div className="ui centered cards">
      {posts.map((post) => (
        <GridCard id={post.id}
                  key={post.id}
                  title={post.title}
                  brief={post.brief}
                  image={post.image}
                  onPostGridClick={onPostGridClick}/>
      ))}
      {moreButton ?
        <MoreGridCard moreButtonLoading={moreButtonLoading}
                      onMorePostClick={onMorePostClick}/> :
        ''}
    </div>
  </div>
);

export default PostGrid;
