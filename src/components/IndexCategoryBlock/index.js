import React           from 'react';
import PostListConfig  from '../../configures/PostListConfig';
import RouteAction     from '../../actions/RouteAction';
import CategoryBox     from '../CategoryBox';
import CategoryBoxMore from '../CategoryBoxMore';

export default React.createClass({

  render() {
    let items = PostListConfig.categories;

    return (
      <div className="ui three column stackable padded grid">
        {items.map(item => (
          <CategoryBox category={item} onCategoryBoxClick={this._onClick}/>
        ))}
        <CategoryBoxMore onCategoryBoxClick={this._onClick}/>
      </div>
    );
  },

  _onClick(e) {
    let {pathname, hash} = e.currentTarget;
    history.pushState({pathname: pathname, hash: hash}, '', pathname);
    RouteAction.updatePath(pathname, hash);
    e.preventDefault();
  }
});
