import React        from 'react/addons';
import classNames   from 'classnames';
import Semantify    from 'react-semantify';
import IndexMenu    from '../components/IndexMenu';
import CategoryMenu from '../components/CategoryMenu';
import Footer       from '../components/Footer';
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
    window.scroll(0, 0);
    PostStore.addChangeListener(this._onChange);
    AuthorsStore.addChangeListener(this._onAuthorChange);
    let elevatorAbout = new Elevator({
      element: document.querySelector('#btn-about'),
      targetElement: document.querySelector('#page-bottom'),
      duration: 1500
    });

  },

  componentWillUnmount() {
    PostStore.removeChangeListener(this._onChange);
    AuthorsStore.removeChangeListener(this._onAuthorChange);
  },

  componentDidUpdate() {
    let elevatorAbout = new Elevator({
      element: document.querySelector('#btn-about'),
      targetElement: document.querySelector('#page-bottom'),
      duration: 1500
    });

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
    let {body, title, image, tags = [], date = ''} = post;
    let {name, description, photoUrl} = this.getAuthor();
    // console.log(JSON.stringify(post, null, 2));
    let largeImage = image ? image.replace(/_540.jpg/g, '_1280.jpg') : image;
    return (
      <div>
        <div className="fixed-top-menu">
          <IndexMenu />
          <CategoryMenu />
        </div>
        <div className="post-image" style={{backgroundImage: `url(${largeImage})`}}>
          <div className="inner">
            {title}
          </div>
        </div>
        <div className="ui stackable three column grid">
          <div className="four wide column"></div>
          <div className="eight wide column">
            <Segment className="very padded container-post basic">
              <div className={classNames('ui inverted dimmer', {active: loader})}>
                <div className="ui text loader">Loading</div>
              </div>
              <div><em style={{color: 'rgba(0, 0, 0, 0.3)'}}>{date.substring(0, 10).replace(/-/g, '.')}</em></div>
              <br/>
              <div dangerouslySetInnerHTML={{__html: body}}></div>
              <br/>
              <div className="ui brown tag labels">
                {tags.map(tag => <Label>{tag}</Label>)}
              </div>
            </Segment>
          </div>
          <div className="four wide column">
            <Segment className="center aligned basic container-post-author" style={{backgroundColor: '#305775', height: '100%', position: 'absolute'}}>
              <Image className="small centered circular" src={photoUrl}/>
              <div>{name}</div>
              <div style={{padding: '0 1rem', textAlign: 'left'}}>{description}</div>
            </Segment>
          </div>
        </div>
        <div id="footer-divider" style={{height: '50px'}} />
        <Footer/>
        <div id="page-bottom"/>
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
