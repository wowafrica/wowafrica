
import React        from 'react';
import PostStore    from '../../stores/PostStore';
import RouteAction  from '../../actions/RouteAction';
import {fetchAuthor} from '../../actions/AuthorAction';

import Component from './Component';

export default React.createClass({

  contextTypes: {
    store: React.PropTypes.object
  },

  getInitialState() {
    const {store} = this.context;
    const {authors} = store.getState();

    return {
      post: PostStore.getPost(),
      loader: PostStore.getLoader(),
      authors
    };
  },

  componentDidMount() {
    const {store} = this.context;

    $('#category-menu').hide();
    window.scroll(0, 0);
    PostStore.addChangeListener(this._onChange);

    this.unsubscribe = store.subscribe(() => this._handleChange());

    store.dispatch(fetchAuthor());
  },

  componentWillUnmount() {
    PostStore.removeChangeListener(this._onChange);
    this.unsubscribe();
  },

  componentDidUpdate() {
    window.scroll(0, 0);
  },

  getAuthor() {
    let {authors: {authors = []}, post} = this.state;
    let result = {
      'name': 'wowAfrica',
      'description': '',
      'photoUrl': ''
    };
    if (authors.length > 0) {
      let matchAuthor = authors.filter(author => author.name === post.author);
      if (matchAuthor.length > 0) {
        result = matchAuthor[0];
      }
    }
    return result;
  },

  render() {
    let {post ,loader} = this.state;
    let {body, title, image, tags = [], date = ''} = post;
    let {name, description, photoUrl} = this.getAuthor();
    let {pageUrl} = this.props;

    let largeImage = image ? image.replace(/_540.jpg/g, '_1280.jpg') : image;
    return (
      <Component post={{body, title, largeImage, tags, date}}
                 author={{name, description, photoUrl}}
                 pageUrl={pageUrl}
                 loader={loader}
                 onPostClick={this._onClick}/>
    );
  },

  _onChange() {
    this.setState({
      post: PostStore.getPost(),
      loader: false
    });
  },

  _handleChange() {
    const {store} = this.context;
    const {authors} = store.getState();

    const prevAuthors = this.state.authors;

    if (prevAuthors === authors) {
      return;
    }

    this.setState({authors});
  },

  _onClick(e) {
    let {pathname, hash} = e.currentTarget;
    history.pushState({pathname: pathname, hash: hash}, '', pathname);
    RouteAction.updatePath(pathname, hash);
    e.preventDefault();
  }
});
