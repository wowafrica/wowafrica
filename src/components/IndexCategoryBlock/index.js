import React          from 'react';
import PostListConfig from '../../configures/PostListConfig';
import PostListStore  from '../../stores/PostListStore';
import RouteAction    from '../../actions/RouteAction';

import styles from './index.css';

import {
  Cards, Card, Image
} from 'react-semantify';

let CategoryBox = React.createClass({

  getInitialState() {
    if (this.props.category == 'more') {
      return {
        posts: []
      };
    }
    else {
      return {
        posts: PostListStore.getPostList(this.props.category)
      };
    }
  },

  render() {
    if (this.props.category == 'more') {
      return (
        <div className="middle aligned centered column">
          <div className={styles.categoryBoxMore}>
            <a href={'/view_post_list/category/new'} onClick={this._onClick}>
              <div className={styles.categoryBoxMoreTitle}>
                閱讀更多文章
              </div>
            </a>
          </div>
        </div>
      );
    }
    else {
      let backImg = '';
      let title = '';
      let url = '';
      if (this.state.posts.length > 0) {
        backImg = this.state.posts[0].image;
        title = this.state.posts[0].title;
        url = '/view_post_list/posts/'+this.state.posts[0].id;
      }

      return (
        <div className="middle aligned column">
            <div className={styles.categoryBox} style={{backgroundImage: 'url('+backImg+')'}}>
              <div className="ui grid">
                <div className="four wide column" style={{paddingRight: 0}}>
                  <a href={url} onClick={this._onClick}>
                    <div className={styles.categoryBoxLeftUp}/>
                    <div className={styles.categoryBoxLeftBottom}/>
                  </a>
                </div>
                <div className="eight wide column" style={{paddingRight: 0, paddingLeft: 0}}>
                  <a href={url} onClick={this._onClick}>
                    <div className={styles.categoryBoxCenterUp}/>
                    <div className={styles.categoryBoxCenterBottom}>
                      <div className={styles.categoryBoxTitle}>
                        {title}
                      </div>
                      <div className="ui divider" style={{borderTop: '1px solid grey', margin: '0rem 1rem 0.3rem 1rem'}}/>
                      <div className={styles.categoryBoxCategory}>
                        {PostListConfig.categoryMap[this.props.category]}
                      </div>
                    </div>
                  </a>
                </div>
                <div className="four wide column" style={{paddingLeft: 0}}>
                  <a href={url} onClick={this._onClick}>
                    <div className={styles.categoryBoxRightUp}/>
                    <div className={styles.categoryBoxRightBottom}/>
                  </a>
                </div>
              </div>
            </div>
        </div>
      );
    }
  },

  componentDidMount() {
    PostListStore.addChangeListener('category', this._onChange);
  },

  componentWillUnmount() {
    PostListStore.removeChangeListener('category', this._onChange);
  },

  _onChange() {
    if (this.props.category == 'more') {
    }
    else {
      this.setState({
        posts: PostListStore.getPostList(this.props.category)
      });
    }
  },

  _onClick(e) {
    let {pathname, hash} = e.currentTarget;
    history.pushState({pathname: pathname, hash: hash}, '', pathname);
    RouteAction.updatePath(pathname, hash);
    e.preventDefault();
  }
});

export default React.createClass({

  getInitialState() {
    return {
    };
  },

  render() {
    let items = [];
    PostListConfig.categories.forEach((item) => {
      items.push(item);
    });
    items.push('more');
    let viewBlks = items.map((item) => {
      return (
      <CategoryBox category={item} />
      );
    });
    return (
      <div id={styles.categoryBox} className="ui three column stackable padded grid">
        {viewBlks}
      </div>
    );
  }

});
