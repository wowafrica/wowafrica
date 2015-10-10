import React          from 'react/addons';
import Semantify      from 'react-semantify';
import PostListConfig from '../configures/PostListConfig';
import PostListStore  from '../stores/PostListStore';
import RouteAction    from '../actions/RouteAction';

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
        <div className="middle aligned column">
            <div className="category-box" style={{backgroundImage: 'url('+backImg+')'}}>
              <div className="ui grid">
                <div className="four wide column" style={{paddingRight: '0'}}>
                  <a href={url} onClick={this._onClick}>
                    <div className="category-box-left-up"/>
                    <div className="category-box-left-bottom"/>
                  </a>
                </div>
                <div className="eight wide column" style={{paddingRight: '0', paddingLeft: '0'}}>
                  <a href={url} onClick={this._onClick}>
                    <div className="category-box-center-up"/>
                    <div className="category-box-center-bottom">
                      <div className="category-box-title">
                        {title}
                      </div>
                      <div className="ui divider" style={{borderTop: '1px solid grey', margin: '0rem 1rem 0.3rem 1rem'}}/>
                      <div className="category-box-category">
                        {PostListConfig.categoryMap[this.props.category]}
                      </div>
                    </div>
                  </a>
                </div>
                <div className="four wide column" style={{paddingLeft: '0'}}>
                  <a href={url} onClick={this._onClick}>
                    <div className="category-box-right-up"/>
                    <div className="category-box-right-bottom"/>
                  </a>
                </div>
              </div>
            </div>
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
  },

  _onClick(e) {
    let {pathname, hash} = e.currentTarget;
    history.pushState({pathname: pathname, hash: hash}, '', pathname);
    RouteAction.updatePath(pathname, hash);
    e.preventDefault();
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
