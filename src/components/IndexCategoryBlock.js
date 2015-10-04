import React          from 'react/addons';
import Semantify      from 'react-semantify';
import PostListConfig from '../configures/PostListConfig';
import PostListStore  from '../stores/PostListStore';

let {Cards, Card, Image} = Semantify;

let CategoryBox = React.createClass({

  getInitialState() {
    if (this.props.category == 'none') {
      return {
        posts: []
      };
    }
    else {
      return {
        posts: PostListStore.getPostList(this.props.category)
      };
    }
  },

  render() {
    if (this.props.category == 'none') {
      return (
        <div className="middle aligned centered column">
          <img src="/images/icon_55.png" style={{marginLeft: '25%', width: '50%'}}/>
        </div>
      );
    }
    else {
      let backImg = '';
      let title = '';
      let url = '';
      if (this.state.posts.length > 0) {
        backImg = this.state.posts[0].image;
        title = this.state.posts[0].title;
        url = '/view_post_list/posts/'+this.state.posts[0].id;
      }
      return (
        <div className="middle aligned column" style={{backgroundSize: 'cover', backgroundImage: 'url('+backImg+')'}}>
            <a href={url} style={{color: 'grey'}}>
              <div style={{width: '100%', position: 'relative'}}>
                <div style={{margin: '20% 20% 20% 20%', paddingTop: '2%', paddingBottom: '2%', backgroundColor: 'white'}}>
                  <div style={{height: '7em',textAlign: 'center', wordWrap: 'break-word', fontSize: '20px', lineHeight: '1.5em', overflow: 'hidden', margin: '1rem'}}>
                    {PostListConfig.categoryMap[this.props.category]}
                    <div className="ui divider" style={{borderTop: '2px solid grey', margin: '0.5rem 0rem 0.5rem 0rem'}}/>
                    {title}
                  </div>
                </div>
              </div>
            </a>
        </div>
      );
    }
  },

  componentDidMount() {
    PostListStore.addChangeListener('category', this._onChange);
  },

  componentWillUnmount() {
    PostListStore.removeChangeListener('category', this._onChange);
  },

  _onChange() {
    if (this.props.category == 'none') {
    }
    else {
      this.setState({
        posts: PostListStore.getPostList(this.props.category)
      });
    }
  }
});

export default React.createClass({

  getInitialState() {
    return {
    };
  },

  render() {
    let items = [];
    PostListConfig.categories.forEach((item) => {
      items.push(item);
    });
    items.splice(4, 0, 'none');
    let viewBlks = items.map((item) => {
      return (
      <CategoryBox category={item} />
      );
    });
    return (
      <div id="category-box" className="ui three column padded grid">
        {viewBlks}
      </div>
    );
  }

});
