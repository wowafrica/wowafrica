
import React from 'react';

import {Image} from 'react-semantify';

let AuthorCard = ({
  name, id, photoUrl, from, description, onAuthorClick
}) => (
  <a className="card"
     href={`/view_post_list/author/${name}`}
     onClick={onAuthorClick}>
    <Image src={photoUrl} style={{minHeight: 0, minWidth: 0}}/>
    <div className="content">
      <div className="header">
        {name}
      </div>
      <div className="meta">
        {from}
      </div>
      <div className="description">
        {description}
      </div>
    </div>
  </a>
);

let AuthorCards = ({authors, onAuthorClick}) => (
  <div className="ui centered cards">
    {authors.map(
      author => <AuthorCard {...author} key={author.id} onAuthorClick={onAuthorClick}/>
    )}
  </div>
);

export default AuthorCards;
