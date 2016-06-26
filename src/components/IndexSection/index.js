import React               from 'react';
import PostListConfig      from '../../configures/PostListConfig';
import PostListStore       from '../../stores/PostListStore';
import PostListTagStore    from '../../stores/PostListTagStore';
import PostListAuthorStore from '../../stores/PostListAuthorStore';
import RouteAction         from '../../actions/RouteAction';
import TumblrConfig        from '../../configures/TumblrConfig';

import styles from './index.css';

import {
  Cards, Card, Image
} from 'react-semantify';

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
        listCon: PostListTagStore.getListContainer()
      };
    }
    else if (props.category === 'author') {
      return {
        listCon: PostListAuthorStore.getListContainer(props.author)
      };
    }
    else {
      return {
        listCon: PostListStore.getListContainer(props.category)
      };
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
    let slideDiv = this.state.listCon.posts.map((post) => {
      return (
        <a className="card" href={'/view_post_list/posts/' + post.id} onClick={this._onClick}>
          <div className={styles.postListCardImg} style={{backgroundImage: 'url('+post.image+')'}}/>
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
            <div id={styles.postListLoadMoreBtn} className="ui button">
              載入更多文章
            </div>
          </div>
        </a>
      );
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
      <div className="ui container">
        <div className={styles.postListTitle}>
          {title}
        </div>
        <div className="ui centered cards">
          {slideDiv}
        </div>
      </div>
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
    $(`#${styles.postListLoadMoreBtn}`).removeClass('loading button').addClass('button');
  },

  _onClick(e) {
    let {pathname, hash} = e.currentTarget;
    history.pushState({pathname: pathname, hash: hash}, '', pathname);
    RouteAction.updatePath(pathname, hash);
    e.preventDefault();
  },

  _onLoadMoreClick(e) {
    e.preventDefault();
    $(`#${styles.postListLoadMoreBtn}`).removeClass('button').addClass('loading button');
    if (this.props.category === 'tag') {
      PostListTagStore.loadMorePosts(this.props.tag, TumblrConfig.postList.loadAmount);
    }
    else {
      PostListStore.loadMorePosts(this.props.category, TumblrConfig.postList.loadAmount);
    }
  }

});
