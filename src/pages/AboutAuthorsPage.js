'use strict';

import React      from 'react/addons';
import IndexMenu  from '../components/IndexMenu';
import Semantify  from 'react-semantify';

let {Cards, Card, Image} = Semantify;

let AuthorsBox = React.createClass({
  getInitialState: function() {
    return ({posts: []});
  },
  componentDidMount: function() {
    this.loadAuthorData();
  },
  render: function() {
    let authors = this.state.posts.map(function(post) {
      let contents = post.caption.split('\n\n');
      return (
        <div className="center aligned card" key={post.id}>
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
      <div className="ui center aligned cards">
        {authors}
      </div>
    );
  },
  loadAuthorData: function() {
    let thisComponent = this;

    let tumblr = require('tumblr.js');
    let client = tumblr.createClient({consumer_key: 'M5o8MnMmq8jAwmmj82HhkyPNkiI6mq9VccTZzYZZLZPgfl08Hi'});

    client.posts('exploreafrica-tw.tumblr.com', {tag: 'exploreafrica-tw-author', filter: 'text'}, function(err, data) {
      if (err) {
        console.log(err.stack);
      }
      thisComponent.setState({posts: data.posts});
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
