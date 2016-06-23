import React from 'react';

import styles from './index.css';

let Block = ({post, idx, onBlockClick}) => (
  <a className={`item ${styles.block}`}
     href={`/view_post_list/posts/${post.id}`}
     onClick={onBlockClick}>

    <div className="ui medium image">
      <img src={post.image} style={{maxWidth: '300px', maxHeight: '200px'}}/>
    </div>

    <div className="middle aligned content">
      <div className="ui header">
        {post.title}
      </div>
      <div className="description">
        {post.brief.length > 80 ? post.brief.substr(0, 80) + '...' : post.brief}
      </div>
    </div>
  </a>
);

let ReadMoreBlock = ({posts}) => (
  <div className="ui divided link items">
    {posts.map((post, idx) => <Block post={post} idx={idx}/>)}
  </div>
);

export default ReadMoreBlock;
