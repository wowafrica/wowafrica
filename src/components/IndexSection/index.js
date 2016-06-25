import React               from 'react';
import PostListConfig      from '../../configures/PostListConfig';
import PostListStore       from '../../stores/PostListStore';
import PostListTagStore    from '../../stores/PostListTagStore';
import PostListAuthorStore from '../../stores/PostListAuthorStore';
import RouteAction         from '../../actions/RouteAction';
import TumblrConfig        from '../../configures/TumblrConfig';
import PostGrid            from '../PostGrid';

export default React.createClass({

  getInitialState() {
    return this.getListContainer(this.props);
  },

  componentDidMount() {
    this.addChangeListener(this.props.category);
  },

  componentWillUnmount() {
    this.removeCurrentChangeListener();
  },

  componentWillReceiveProps(nextProps) {
    if (this.props.category !== nextProps) {
      this.removeCurrentChangeListener();
      this.addChangeListener(nextProps.category);
    }
    this.getListContainer(nextProps);
  },

  getListContainer(props) {
    if (props.category === 'tag') {
      return {
        listCon: PostListTagStore.getListContainer(),
        moreButtonLoading: false
      };
    }
    else if (props.category === 'author') {
      return {
        listCon: PostListAuthorStore.getListContainer(props.author),        moreButtonLoading: false      };
    }
    else {
      return {
        listCon: PostListStore.getListContainer(props.category),        moreButtonLoading: false      };
    }
  },

  addChangeListener(category) {
    if (category === 'tag') {
      PostListTagStore.addChangeListener(this._onChange);
    }
    else if (category === 'author') {
      PostListAuthorStore.addChangeListener(this._onChange);
    }
    else if (category === 'new') {
      PostListStore.addChangeListener('new', this._onChange);
    }
    else {
      PostListStore.addChangeListener('category', this._onChange);
    }
  },

  removeCurrentChangeListener() {
    if (this.props.category == 'tag') {
      PostListTagStore.removeChangeListener(this._onChange);
    }
    else if (this.props.category == 'author') {
      PostListAuthorStore.removeChangeListener(this._onChange);
    }
    else if (this.props.category == 'new') {
      PostListStore.removeChangeListener('new', this._onChange);
    }
    else {
      PostListStore.removeChangeListener('category', this._onChange);
    }
  },

  render() {
    let moreButton = false;
    let {listCon, moreButtonLoading} = this.state;
    if (listCon.parsedPostNum < listCon.totalPostNum) {
      moreButton = true;
    }

    let title = '';
    if (this.props.category == 'tag') {
      title = this.props.title;
    }
    else if (this.props.category == 'author') {
      title = this.props.title;
    }
    else if (this.props.category == 'new') {
      title = '最新文章';
    }
    else {
      title = PostListConfig.categoryMap[this.props.title];
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
    if (this.props.category == 'tag') {
      this.setState({
        listCon: PostListTagStore.getListContainer()
      });
    }
    else if (this.props.category == 'author') {
      this.setState({
        listCon: PostListAuthorStore.getListContainer(this.props.author)
      });
    }
    else {
      this.setState({
        listCon: PostListStore.getListContainer(this.props.category)
      });
    }
    this.setState({moreButtonLoading: false});
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
    if (this.props.category === 'tag') {
      PostListTagStore.loadMorePosts(this.props.tag, TumblrConfig.postList.loadAmount);
    }
    else {
      PostListStore.loadMorePosts(this.props.category, TumblrConfig.postList.loadAmount);
    }
  }

});
