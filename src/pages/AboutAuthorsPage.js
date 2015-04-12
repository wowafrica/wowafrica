'use strict';

import React        from 'react/addons';
import Semantify    from 'react-semantify';
import IndexMenu    from '../components/IndexMenu';
import AuthorsStore from '../stores/AuthorsStore';

let {Cards, Card, Image} = Semantify;

let AuthorsBox = React.createClass({

  getInitialState() {
    return ({posts: AuthorsStore.getAll()});
  },

  componentDidMount() {
    AuthorsStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    AuthorsStore.removeChangeListener(this._onChange);
  },

  render() {
    let authors = this.state.posts.map(function(post) {
      let contents = post.caption.split('\n\n');
      return (
        <div className="card" key={post.id}>
          <Image src={post.photos[0].original_size.url}></Image>
          <div className="content">
            <div className="header">
              {contents[0]}
            </div>
            <div className="meta">
              {contents[1]}
            </div>
            <div className="description">
              {contents[2]}
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="ui cards" style={{justifyContent: 'center'}}>
        {authors}
      </div>
    );
  },

  _onChange() {
    this.setState({
      posts: AuthorsStore.getAll()
    });
  }
});

export default React.createClass({

  render() {

    return (
      <div>
        <div className="container">
          <IndexMenu/>
        </div>
        <div className="ui page grid">
          <div className="wide centered column">
            <AuthorsBox/>
          </div>
        </div>
      </div>
    );
  }
});
