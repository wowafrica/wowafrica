import React               from 'react';
import PostListStore       from '../../stores/PostListStore';
import RouteAction         from '../../actions/RouteAction';
import TumblrConfig        from '../../configures/TumblrConfig';
import PostGrid            from '../PostGrid';

export default React.createClass({

  getInitialState() {
    return {
      listCon: PostListStore.getListContainer('new'),
      moreButtonLoading: false
    };
  },

  componentDidMount() {
    PostListStore.addChangeListener('new', this._onChange);
  },

  componentWillUnmount() {
    PostListStore.removeChangeListener('new', this._onChange);
  },

  render() {
    let moreButton = false;
    let {listCon, moreButtonLoading} = this.state;

    if (listCon.parsedPostNum < listCon.totalPostNum) {
      moreButton = true;
    }

    return (
      <PostGrid
        title={'最新文章'}
        posts={listCon.posts}
        moreButton={moreButton}
        moreButtonLoading={moreButtonLoading}
        onPostGridClick={this._onClick}
        onMorePostClick={this._onLoadMoreClick}/>
    );
  },

  _onChange() {
    this.setState({
      listCon: PostListStore.getListContainer('new'),
      moreButtonLoading: false
    });
  },

  _onClick(e) {
    let {pathname, hash} = e.currentTarget;
    history.pushState({pathname: pathname, hash: hash}, '', pathname);
    RouteAction.updatePath(pathname, hash);
    e.preventDefault();
  },

  _onLoadMoreClick(e) {
    e.preventDefault();
    this.setState({moreButtonLoading: true});
    PostListStore.loadMorePosts('new', TumblrConfig.postList.loadAmount);
  }
});
