import React        from 'react/addons';
import classNames   from 'classnames';
import Semantify    from 'react-semantify';
import IndexMenu    from '../components/IndexMenu';
import CategoryMenu from '../components/CategoryMenu';
import PostStore    from '../stores/PostStore';
import AuthorsStore from '../stores/AuthorsStore';

let {Segment, Header, Label, Divider, Rail, Image} = Semantify;

export default React.createClass({

  getInitialState() {
    return {
      authors: AuthorsStore.getAll(),
      post: PostStore.getPost(),
      loader: true
    };
  },

  componentDidMount() {
    PostStore.addChangeListener(this._onChange);
    AuthorsStore.addChangeListener(this._onAuthorChange);
  },

  componentWillUnmount() {
    PostStore.removeChangeListener(this._onChange);
    AuthorsStore.removeChangeListener(this._onAuthorChange);
  },

  getAuthor() {
    let {authors, post} = this.state;
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
    let {body, title, image, tags = [], date} = post;
    let {name, description, photoUrl} = this.getAuthor();
    // console.log(JSON.stringify(post, null, 2));
    return (
      <div>
        <div className="fixed-top-menu">
          <IndexMenu />
          <CategoryMenu />
        </div>
        <div className="post-image" style={{backgroundImage: `url(${image})`}}>
          <div className="inner">
            {title}
          </div>
        </div>
        <div className="container-content">
          <div className="container-map">
            <Segment className="very padded container-post">
              <Rail className="right close">
                <Segment className="center aligned container-post-author" style={{backgroundColor: '#305775'}}>
                  <Image className="small centered circular" src={photoUrl}/>
                  <div>{name}</div>
                  <div>{description}</div>
                </Segment>
              </Rail>
              <div className={classNames('ui inverted dimmer', {active: loader})}>
                <div className="ui text loader">Loading</div>
              </div>
              <div>時間: {date}</div>
              <br/>
              <div style={{fontSize: '20px'}} dangerouslySetInnerHTML={{__html: body}}></div>
              <br/>
              <div className="ui brown tag labels">
                {tags.map(tag => <Label>{tag}</Label>)}
              </div>
            </Segment>
          </div>
        </div>
      </div>
    );
  },

  _onChange() {
    this.setState({
      post: PostStore.getPost(),
      loader: false
    });
  },

  _onAuthorChange() {
    this.setState({
      authors: AuthorsStore.getAll()
    });
  }
});
