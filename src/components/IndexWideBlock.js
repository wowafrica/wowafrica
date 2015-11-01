import React          from 'react/addons';
import PostListConfig from '../configures/PostListConfig';
import PostListStore  from '../stores/PostListStore';
import RouteAction    from '../actions/RouteAction';
import PostListAction from '../actions/PostListAction';

export default React.createClass({

  getInitialState() {
    switch (this.props.type) {
      case 'new':
        return {
          posts: PostListStore.getPostList('new')
        };
        break;

      case 'top':
        return {
          posts: PostListStore.getPostList('top')
        };
        break;

      default:
        break;
    }
  },

  componentDidUpdate() {
    let elevatorArticle = new Elevator({
      element: document.querySelector('#btn-article'),
      targetElement: document.querySelector('#category-block-divider'),
      duration: 1500
    });
  },

  componentDidMount() {
    PostListStore.addChangeListener(this.props.type, this._onChange);
  },

  componentWillUnmount() {
    PostListStore.removeChangeListener(this.props.type, this._onChange);
  },

  render() {
    let displayType = this.props.type == 'new' ? '最新文章' : '最新消息' ;
    let newSection = this.state.posts.slice(0,2).map((post) => {
      let image = post.image.replace(/_540.jpg/g, '_1280.jpg');
      return (
        <div className="index-wide" style={{backgroundImage: 'url('+image+')'}}>
        <div className="index-wide-box-before"/>

          <div className="index-wide-box">
            <a href={'/view_post_list/posts/'+post.id} onClick={this._onClick}>
              <div className="index-wide-type">
                {displayType}
              </div>
            </a>
            <div className="ui divider" style={{width: '175px', borderTop: '1px solid white', margin: '0.3rem 0rem 0.3rem 0rem'}}/>
            <a href={'/view_post_list/posts/'+post.id} onClick={this._onClick}>
              <div className="index-wide-title">
                {post.title}
              </div>
            </a>
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
    switch (this.props.type) {
      case 'new':
        this.setState({
          posts: PostListStore.getPostList('new')
        });
        break;

      case 'top':
        this.setState({
          posts: PostListStore.getPostList('top')
        });
        break;

      default:
        break;
    }
  },

  _onClick(e) {
    let {pathname, hash} = e.currentTarget;
    history.pushState({pathname: pathname, hash: hash}, '', pathname);
    RouteAction.updatePath(pathname, hash);
    e.preventDefault();
  }

});
