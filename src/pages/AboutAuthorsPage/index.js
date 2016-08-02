import React        from 'react';
import IndexMenu    from '../../components/IndexMenu';
import CategoryMenu from '../../components/CategoryMenu';
import Footer       from '../../components/Footer';
import RouteAction  from '../../actions/RouteAction';

import {fetchAuthor} from '../../actions/AuthorAction';

import styles from './index.css';

import {
  Cards, Card, Image
} from 'react-semantify';

let AuthorsBox = React.createClass({

  contextTypes: {
    store: React.PropTypes.object
  },

  getInitialState() {
    const {store} = this.context;
    const {authors} = store.getState();
    return {authors};
  },

  componentDidMount() {
    const {store} = this.context;

    this.unsubscribe = store.subscribe(() => this._handleChange());

    store.dispatch(fetchAuthor());
  },

  componentWillUnmount() {
    this.unsubscribe();
  },

  render() {
    const {authors: {authors = []}} = this.state;

    let authorsDiv = authors.map((author) => {
      return (
          <a className="card" href={'/view_post_list/author/'+author.name} onClick={this._onClick} key={author.id}>
            <Image src={author.photoUrl} style={{minHeight: 0, minWidth: 0}}></Image>
            <div className="content">
              <div className="header">
                {author.name}
              </div>
              <div className="meta">
                {author.from}
              </div>
              <div className="description">
                {author.description}
              </div>
            </div>
          </a>
        );
    });
    return (
      <div className="ui centered cards">
        {authorsDiv}
      </div>
    );
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

export default React.createClass({

  componentDidMount() {
    $('#category-menu').hide();
    window.scroll(0, 0);
  },

  render() {
    return (
      <div>
        <div className="fixed-top-menu">
          <IndexMenu />
          <CategoryMenu />
        </div>
        <div className="container-content">
          <div className={`ui page grid ${styles.overrideGrid}`}>
            <div className="wide centered column">
              <AuthorsBox/>
            </div>
          </div>
        </div>
        <div id="footer-divider" style={{height: '50px'}} />
        <Footer/>
        <div id="page-bottom"/>
      </div>
    );
  }
});
