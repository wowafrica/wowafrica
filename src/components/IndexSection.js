import React          from 'react';
import PostListConfig from '../configures/PostListConfig';
import PostListStore  from '../stores/PostListStore';
import RouteAction    from '../actions/RouteAction';
import TumblrConfig   from '../configures/TumblrConfig';

import {
  Cards, Card, Image
} from 'react-semantify';

export default React.createClass({

  getInitialState() {
    return {
      listCon: PostListStore.getListContainer(this.props.category)
    };
  },

  componentDidMount() {
    if (this.props.category === 'new') {
      PostListStore.addChangeListener('new', this._onChange);
    }
    else {
      PostListStore.addChangeListener('category', this._onChange);
    }
  },

  componentWillUnmount() {
    if (this.props.category == 'new') {
      PostListStore.removeChangeListener('new', this._onChange);
    }
    else {
      PostListStore.removeChangeListener('category', this._onChange);
    }
  },

  componentWillReceiveProps(nextProps) {
    this.setState({
      listCon: PostListStore.getListContainer(nextProps.category)
    });
  },

  render() {
    let slideDiv = this.state.listCon.posts.map((post) => {
      return (
        <a className="card" href={'/view_post_list/posts/' + post.id} onClick={this._onClick}>
          <div className="post-list-card-img" style={{backgroundImage: 'url('+post.image+')'}}/>
          <div className="content">
            <div className="header">
              {post.title}
            </div>
            <div className="meta">
              {post.brief}
            </div>
          </div>
        </a>
      );
    });
    let lCon = this.state.listCon;
    if (lCon.parsedPostNum < lCon.totalPostNum) {
      slideDiv.push(
        <a className="card" onClick={this._onLoadMoreClick} style={{boxShadow: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div>
            <div id="postList-loadMoreBtn" className="ui button">
              載入更多文章
            </div>
          </div>
        </a>
      );
    }

    let title = '';
    if (this.props.category == 'new') {
      title = '最新文章';
    }
    else {
      title = PostListConfig.categoryMap[this.props.title];
    }

    return (
      <div className="ui container">
        <div className="post-list-title">
          {title}
        </div>
        <div className="ui centered cards">
          {slideDiv}
        </div>
      </div>
    );
  },

  _onChange() {
    this.setState({
      listCon: PostListStore.getListContainer(this.props.category)
    });
    $('#postList-loadMoreBtn').removeClass('loading button').addClass('button');
  },

  _onClick(e) {
    let {pathname, hash} = e.currentTarget;
    history.pushState({pathname: pathname, hash: hash}, '', pathname);
    RouteAction.updatePath(pathname, hash);
    e.preventDefault();
  },

  _onLoadMoreClick(e) {
    e.preventDefault();
    $('#postList-loadMoreBtn').removeClass('button').addClass('loading button');
    PostListStore.loadMorePosts(this.props.category, TumblrConfig.postList.loadAmount);
  }

});
