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
  },

  _onClick(e) {
    let {pathname, hash} = e.currentTarget;
    history.pushState({pathname: pathname, hash: hash}, '', pathname);
    RouteAction.updatePath(pathname, hash);
    e.preventDefault();
  },

  render() {
    let blocks = this.state.posts.map((post, idx) => {
      let style = idx == 0 ? {borderTop: '1px solid rgba(34, 36, 38, 0.15)', padding: '1em 0em !important'} : {};
      return (
          <a className="item" href={'/view_post_list/posts/'+post.id} onClick={this._onClick} style={style}>
            <div className="ui medium image">
              <img src={post.image} style={{maxWidth: '300px', maxHeight: '200px'}}/>
            </div>
            <div className="middle aligned content">
              <div className="ui header">
                {post.title}
              </div>
              <div className="description">
                {post.brief.length > 80 ? post.brief.substr(0, 80)+'...' : post.brief}
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
