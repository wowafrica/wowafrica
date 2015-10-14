import React          from 'react/addons';
import Semantify      from 'react-semantify';
import PostListConfig from '../configures/PostListConfig';
import PostListStore  from '../stores/PostListStore';
import RouteAction    from '../actions/RouteAction';

let {Cards, Card, Image} = Semantify;

export default React.createClass({

  getInitialState() {
    return {
      posts: PostListStore.getPostList(this.props.category)
    };
  },

  componentDidMount() {
    PostListStore.addChangeListener('category', this._onChange);
  },

  componentWillUnmount() {
    PostListStore.removeChangeListener('category',this._onChange);
  },


  render() {
    let slideDiv = this.state.posts.map((post) => {
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

    return (
      <div className="ui container">
        <div className="post-list-title">
          {PostListConfig.categoryMap[this.props.title]}
        </div>
        <div className="ui centered cards">
          {slideDiv}
        </div>
      </div>
    );
  },

  _onChange() {
    this.setState({
      posts: PostListStore.getPostList(this.props.category)
    });
  },

  _onClick(e) {
    let {pathname, hash} = e.currentTarget;
    history.pushState({pathname: pathname, hash: hash}, '', pathname);
    RouteAction.updatePath(pathname, hash);
    e.preventDefault();
  }

});
