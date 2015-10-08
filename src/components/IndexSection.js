import React          from 'react/addons';
import Semantify      from 'react-semantify';
import PostListConfig from '../configures/PostListConfig';
import PostListStore  from '../stores/PostListStore';
import PostListAction from '../actions/PostListAction';

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
    console.log('IndexSection rendering: '+this.props.category);
    console.log(this.state.posts);

    let slideDiv = this.state.posts.map(function(post) {
      return (
        <a className="card" href={'/view_post_list/posts/'+post.id}>
          <Image src={post.image}></Image>
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
      <div className="section" id={'fp'+this.props.category}>
        <div className="section-box">
          <p className="section-title">{this.props.title}</p>
        </div>
        <div className="slide">
          <div className="ui grid container">
            <div className="wide centered column">
              <div className="ui three cards">
                {slideDiv}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },

  _onChange() {
    console.log('get '+this.props.category+' update');
    this.setState({
      posts: PostListStore.getPostList(this.props.category)
    });
  }

});
