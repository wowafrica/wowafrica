import React              from 'react';
import PostListConstants  from '../../constants/PostListConstants';
import ReadMoreStore      from '../../stores/PostListReadMoreStore';
import RouteAction        from '../../actions/RouteAction';
import Component          from './Component';

export default React.createClass({
  getInitialState() {
    return {
      posts: []
    };
  },

  componentDidMount() {
    ReadMoreStore.addChangeListener(this._onChange);
    ReadMoreStore.onUpdateRandomPostList(3, this.props.postId);
  },

  _onChange() {
    this.setState({
      posts: ReadMoreStore.getRandomPosts()
    });
  },

  _onClick(e) {
    let {pathname, hash} = e.currentTarget;
    history.pushState({pathname: pathname, hash: hash}, '', pathname);
    RouteAction.updatePath(pathname, hash);
    e.preventDefault();
    ReadMoreStore.onUpdateRandomPostList(3, this.props.postId);
  },

  render() {
    let {posts} = this.state;

    return (
      <Component posts={posts} onBlockClick={this._onClick} />
    );
  }
});
