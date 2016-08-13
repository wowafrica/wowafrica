import React          from 'react';
import PostListConfig from '../../configures/PostListConfig';
import PostListStore  from '../../stores/PostListStore';
import RouteAction    from '../../actions/RouteAction';
import PostListAction from '../../actions/PostListAction';
import Elevator       from '../../vendors/elevator';
import Component      from './Component';

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
    let {posts}     = this.state;
    let displayType = this.props.type == 'new' ? '最新文章' : '最新消息' ;

    return (
      <Component posts={posts}
                 displayType={displayType}
                 onIndexWideBlockClick={this._onClick}/>
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
