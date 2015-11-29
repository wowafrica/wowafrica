import React        from 'react';
import IndexMenu    from '../components/IndexMenu';
import CategoryMenu from '../components/CategoryMenu';
import Footer       from '../components/Footer';
import AuthorsStore from '../stores/AuthorsStore';

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
    let authorsDiv = this.state.authors.map(function(author) {
      return (
          <div className="card" key={author.id}>
            <Image src={author.photoUrl}></Image>
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
          </div>
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
  }
});

export default React.createClass({

  componentDidMount() {
    $('#category-menu').hide();
  },

  render() {
    return (
      <div>
        <div className="fixed-top-menu">
          <IndexMenu />
          <CategoryMenu />
        </div>
        <div className="container-content">
          <div className="ui page grid">
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
