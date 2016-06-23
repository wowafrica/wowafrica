import React              from 'react';

let Block = ({post, idx, onBlockClick}) => {

  let style = {};

  if (idx == 0) {
    style = {
      borderTop: '1px solid rgba(34, 36, 38, 0.15)',
      padding: '1em 0em !important'
    };
  }

  return (
    <a className="item" href={`/view_post_list/posts/${post.id}`} onClick={onBlockClick} style={style}>
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
  )
};

let ReadMoreBlock = ({posts}) => (
  <div className="ui divided link items">
    {posts.map((post, idx) => <Block post={post} idx={idx}/>)}
  </div>
);

export default ReadMoreBlock;
