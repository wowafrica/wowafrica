import React             from 'react';
import PostListConstants from '../../constants/PostListConstants';
import ReadMoreStore     from '../../stores/PostListReadMoreStore';
import RouteAction       from '../../actions/RouteAction';
import {fetchPost}       from '../../actions/PostAction';
import Component         from './Component';

export default React.createClass({

  contextTypes: {
    store: React.PropTypes.object
  },

  getInitialState() {
    return {
      posts: []
    };
  },

  componentDidMount() {
    ReadMoreStore.addChangeListener(this._onChange);
    ReadMoreStore.onUpdateRandomPostList(3, this.props.postId);
  },

  componentWillUnmount() {
    ReadMoreStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    this.setState({
      posts: ReadMoreStore.getRandomPosts()
    });
  },

  _onClick(e) {
    let {store} = this.context;
    let {pathname, hash} = e.currentTarget;

    store.dispatch(fetchPost(pathname.split('/')[3]));

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
