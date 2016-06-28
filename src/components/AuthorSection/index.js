import React               from 'react';
import PostListAuthorStore from '../../stores/PostListAuthorStore';
import RouteAction         from '../../actions/RouteAction';
import PostGrid            from '../PostGrid';

export default React.createClass({

  getInitialState() {
    return {
      listCon: PostListAuthorStore.getListContainer(this.props.author)
    };
  },

  componentDidMount() {
    PostListAuthorStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    PostListAuthorStore.removeChangeListener(this._onChange);
  },

  componentWillReceiveProps(nextProps) {
    this.setState({
      listCon: PostListAuthorStore.getListContainer(nextProps.author)
    });
  },

  render() {
    let {listCon} = this.state;
    let {title} = this.props;

    return (
      <PostGrid
        title={title}
        posts={listCon.posts}
        onPostGridClick={this._onClick}/>
    );
  },

  _onChange() {
    this.setState({
      listCon: PostListAuthorStore.getListContainer(this.props.author)
    });
  },

  _onClick(e) {
    let {pathname, hash} = e.currentTarget;
    history.pushState({pathname: pathname, hash: hash}, '', pathname);
    RouteAction.updatePath(pathname, hash);
    e.preventDefault();
  }
});
