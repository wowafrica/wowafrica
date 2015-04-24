'use strict';

import React        from 'react/addons';
import Semantify    from 'react-semantify';
import IndexMenu    from '../components/IndexMenu';
import AuthorsStore from '../stores/AuthorsStore';

let {Cards, Card, Image} = Semantify;

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
      <div className="ui cards" style={{justifyContent: 'center'}}>
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

  render() {

    return (
      <div>
        <div className="container-header">
          <IndexMenu/>
        </div>
        <div className="container-content">
          <div className="ui page grid">
            <div className="wide centered column">
              <AuthorsBox/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
