import React        from 'react';
import IndexMenu    from '../../components/IndexMenu';
import CategoryMenu from '../../components/CategoryMenu';
import Footer       from '../../components/Footer';
import AuthorsStore from '../../stores/AuthorsStore';
import RouteAction  from '../../actions/RouteAction';

import styles from './index.css';

import {
  Cards, Card, Image
} from 'react-semantify';

let AuthorsBox = React.createClass({

  getInitialState() {
    return ({authors: AuthorsStore.getAll()});
  },

  componentDidMount() {
    AuthorsStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    AuthorsStore.removeChangeListener(this._onChange);
  },

  componentDidUpdate() {
  },

  render() {
    let authorsDiv = this.state.authors.map((author) => {
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

  _onChange() {
    this.setState({
      authors: AuthorsStore.getAll()
    });
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
