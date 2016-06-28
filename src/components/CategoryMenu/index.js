import React           from 'react';
import PostListConfig  from '../../configures/PostListConfig';
import RouteAction     from '../../actions/RouteAction';
import Component       from './Component';

export default React.createClass({

  getInitialState() {
    return {
      categories: PostListConfig.categories,
      nameMap: PostListConfig.categoryMap
    };
  },

  render() {
    let {categories, nameMap} = this.state;

    return (
      <Component categories={categories}
                 nameMap={nameMap}
                 onCategoryClick={this._onClick}/>
    );
  },

  _onClick(e) {
    let {pathname, hash} = e.currentTarget;
    history.pushState({pathname: pathname, hash: hash}, '', pathname);
    RouteAction.updatePath(pathname, hash);
    e.preventDefault();
  }
});
