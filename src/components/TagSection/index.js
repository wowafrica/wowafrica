import React            from 'react';
import PostListTagStore from '../../stores/PostListTagStore';
import RouteAction      from '../../actions/RouteAction';
import TumblrConfig     from '../../configures/TumblrConfig';
import PostGrid         from '../PostGrid';

export default React.createClass({

  getInitialState() {
    return {
      listCon: PostListTagStore.getListContainer(),
      moreButtonLoading: false
    };
  },

  componentDidMount() {
    PostListTagStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    PostListTagStore.removeChangeListener(this._onChange);
  },

  componentWillReceiveProps(nextProps) {
    this.setState({
      listCon: PostListTagStore.getListContainer()
    });
  },

  render() {
    let {listCon, moreButtonLoading} = this.state;
    let {title} = this.props;
    let moreButton = false;
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
      listCon: PostListTagStore.getListContainer(),
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
    PostListTagStore.loadMorePosts(this.props.tag, TumblrConfig.postList.loadAmount);
  }
});
