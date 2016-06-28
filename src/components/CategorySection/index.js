import React               from 'react';
import PostListConfig      from '../../configures/PostListConfig';
import PostListStore       from '../../stores/PostListStore';
import RouteAction         from '../../actions/RouteAction';
import TumblrConfig        from '../../configures/TumblrConfig';
import PostGrid            from '../PostGrid';

export default React.createClass({

  getInitialState() {
    return {
      listCon: PostListStore.getListContainer(this.props.category),
      moreButtonLoading: false
    };
  },

  componentDidMount() {
    PostListStore.addChangeListener('category', this._onChange);
  },

  componentWillUnmount() {
    PostListStore.removeChangeListener('category', this._onChange);
  },

  componentWillReceiveProps(nextProps) {
    this.setState({
      listCon: PostListStore.getListContainer(nextProps.category),
      moreButtonLoading: false
    });
  },

  render() {
    let moreButton = false;
    let {listCon, moreButtonLoading} = this.state;
    let title = PostListConfig.categoryMap[this.props.title];

    if (listCon.parsedPostNum < listCon.totalPostNum) {
      moreButton = true;
    }

    return (
      <PostGrid
        title={title}
        posts={listCon.posts}
        moreButton={moreButton}
        moreButtonLoading={moreButtonLoading}
        onPostGridClick={this._onClick}
        onMorePostClick={this._onLoadMoreClick}/>
    );
  },

  _onChange() {
    this.setState({
      listCon: PostListStore.getListContainer(this.props.category),
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
    PostListStore.loadMorePosts(this.props.category, TumblrConfig.postList.loadAmount);
  }
});
