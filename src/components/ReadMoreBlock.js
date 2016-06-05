import React              from 'react';
import PostListConstants  from '../constants/PostListConstants';
import ReadMoreStore      from '../stores/PostListReadMoreStore';


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
    console.log(this.state);
  },

  _onClick(e) {
    let {pathname, hash} = e.currentTarget;
    history.pushState({pathname: pathname, hash: hash}, '', pathname);
    RouteAction.updatePath(pathname, hash);
    e.preventDefault();
  },

  render() {
    let blocks = this.state.posts.map((post) => {
      return (
          <a className="item" href={'/view_post_list/posts/'+post.id} onClick={this._onClick}>
            <div className="ui medium image">
              <img src={post.image} style={{maxWidth: '300px', maxHeight: '200px'}}/>
            </div>
            <div className="middle aligned content">
              <div className="ui header">
                {post.title}
              </div>
              <div className="description">
                {post.brief}
              </div>
            </div>
          </a>
      );
    });
    return (
      <div className="ui divided link items">
        {blocks}
      </div>
    );
  }
});
