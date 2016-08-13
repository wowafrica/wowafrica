
import React         from 'react';
import RouteAction   from '../../actions/RouteAction';
import {fetchAuthor} from '../../actions/AuthorAction';
import {fetchPost}   from '../../actions/PostAction';

import Component from './Component';

export default React.createClass({

  contextTypes: {
    store: React.PropTypes.object
  },

  getInitialState() {
    const {store} = this.context;
    const {authors, post} = store.getState();

    return {
      loader: post.isFetching,
      post: post.post,
      authors
    };
  },

  componentDidMount() {
    const {store} = this.context;
    const {pageUrl} = this.props;

    $('#category-menu').hide();
    window.scroll(0, 0);

    this.unsubscribe = store.subscribe(() => this._handleChange());

    console.log(pageUrl.split('/')[3]);

    store.dispatch(fetchAuthor());
    store.dispatch(fetchPost(pageUrl.split('/')[3]));
  },

  componentWillUnmount() {
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

    return (
      <Component post={{body, title, image, tags, date}}
                 author={{name, description, photoUrl}}
                 pageUrl={pageUrl}
                 loader={loader}
                 onPostClick={this._onClick}/>
    );
  },

  _handleChange() {
    const {store} = this.context;
    const {authors, post} = store.getState();

    const prevAuthors = this.state.authors;
    const prePost     = this.state.post;

    if (prevAuthors === authors && prePost === post) {
      return;
    }

    this.setState({
      authors,
      post: post.post,
      loader: post.isFetching
    });
  },

  _onClick(e) {
    let {pathname, hash} = e.currentTarget;
    history.pushState({pathname: pathname, hash: hash}, '', pathname);
    RouteAction.updatePath(pathname, hash);
    e.preventDefault();
  }
});
