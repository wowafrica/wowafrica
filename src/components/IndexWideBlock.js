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
    let newSection = this.state.posts.map((post) => {
      return (
        <div className="section post-image" style={{backgroundImage: 'url('+post.image+')'}}>
          <div className="header-box">
            <p className="header-title" style={{fontSize: '36px', marginBottom: '0rem'}}>
              <a href={'/view_post_list/posts/'+post.id} onClick={this._onClick}>{displayType}</a>
            </p>
            <p className="header-title" style={{fontSize: '24px'}}>
              <a href={'/view_post_list/posts/'+post.id} onClick={this._onClick}>{post.title}</a>
            </p>
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
