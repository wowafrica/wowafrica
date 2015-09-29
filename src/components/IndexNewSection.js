import React          from 'react/addons';
import PostListConfig from '../configures/PostListConfig';
import PostListStore  from '../stores/PostListStore';
import PostListAction from '../actions/PostListAction';

export default React.createClass({

  getInitialState() {
    return {
      posts: PostListStore.getPostList('new')
    };
  },

  componentDidMount() {
    PostListStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    PostListStore.removeChangeListener(this._onChange);
  },

  render() {
    let newSection = this.state.posts.map((post) => {
      return (
        <div className="section" style={{background: 'url('+post.image+')'}}>
          <div className="section-box">
            <p className="section-title">{post.title}</p>
          </div>
        </div>
      );
    });
    return (
      <div>
        {newSection}
      </div>
    );
  },

  _onChange() {
    this.setState({
      posts: PostListStore.getPostList('new')
    });
  }

});
