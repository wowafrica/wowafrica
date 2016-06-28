import React          from 'react';
import PostListConfig from '../../configures/PostListConfig';
import PostListStore  from '../../stores/PostListStore';
import Component      from './Component';

export default React.createClass({

  getInitialState() {
    return {
      posts: PostListStore.getPostList(this.props.category)
    };
  },

  render() {
    let {posts}                        = this.state;
    let {category, onCategoryBoxClick} = this.props;
    let url          = '';
    let title        = '';
    let backImg      = '';
    let categoryName = PostListConfig.categoryMap[category];


    if (this.state.posts.length > 0) {
      url     = `/view_post_list/posts/${posts[0].id}`;
      title   = posts[0].title;
      backImg = posts[0].image;
    }

    return (
      <Component url={url}
                 backImg={backImg}
                 title={title}
                 categoryName={categoryName}
                 onCategoryBoxClick={onCategoryBoxClick}/>
    );
  },

  componentDidMount() {
    PostListStore.addChangeListener('category', this._onChange);
  },

  componentWillUnmount() {
    PostListStore.removeChangeListener('category', this._onChange);
  },

  _onChange() {
    this.setState({
      posts: PostListStore.getPostList(this.props.category)
    });
  }
});
