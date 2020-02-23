import React        from 'react';
import classnames   from 'classnames';
import IndexMenu    from '../../components/IndexMenu';
import CategoryMenu from '../../components/CategoryMenu';
import Footer       from '../../components/Footer';
import ShareButton  from '../../components/ShareButton';
import ReadMoreBlk  from '../../components/ReadMoreBlock';
import PostStore    from '../../stores/PostStore';
import AuthorsStore from '../../stores/AuthorsStore';
import RouteAction  from '../../actions/RouteAction';

import styles from './index.css';

import {
  Segment, Header, Label, Divider, Rail, Image
} from 'react-semantify';

export default React.createClass({

  getInitialState() {
    return {
      authors: AuthorsStore.getAll(),
      post: PostStore.getPost(),
      loader: PostStore.getLoader()
    };
  },

  componentDidMount() {
    $('#category-menu').hide();
    window.scroll(0, 0);
    PostStore.addChangeListener(this._onChange);
    AuthorsStore.addChangeListener(this._onAuthorChange);

    let {name} = this.getAuthor();

    this.smallFarmer.setAttribute('hb-width', '50');
    this.smallFarmer.setAttribute('hb-height', '50');
    this.smallFarmer.setAttribute('hb-author', name);

    this.normalFarmer.setAttribute('hb-width', '100');
    this.normalFarmer.setAttribute('hb-height', '50');
    this.normalFarmer.setAttribute('hb-icon', 'https://mediafarmers.org/api/images/icon_2.png');
    this.normalFarmer.setAttribute('hb-author', name);

    // inject mediafarmers script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.onload = function() {};
    script.src = 'https://mediafarmers.org/api/api.js';
    this.pageRoot.appendChild(script);
  },

  componentWillUnmount() {
    PostStore.removeChangeListener(this._onChange);
    AuthorsStore.removeChangeListener(this._onAuthorChange);
  },

  componentDidUpdate() {
    window.scroll(0, 0);

    let {name} = this.getAuthor();

    this.smallFarmer.setAttribute('hb-author', name);
    this.normalFarmer.setAttribute('hb-author', name);
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
    let {pageUrl} = this.props;

    // console.log(JSON.stringify(post, null, 2));
    let largeImage = image ? image.replace(/_540.jpg/g, '_1280.jpg') : image;
    return (
      <div ref={ref => this.pageRoot = ref}>
        <div className="fixed-top-menu">
          <IndexMenu />
          <CategoryMenu />
        </div>
        <div className={styles.postImage} style={{backgroundImage: `url(${largeImage})`, backgroundPosition: 'center'}}>
          <div className={styles.inner}>
            <div className={styles.innerTitle}>
              {title}
            </div>
          </div>
        </div>
        <div className="ui stackable four column grid">
          <div className="one wide column"></div>
          <div className="ten wide column">
            <Segment className={classnames('very padded basic', styles.containerPost, styles.antiVeryPadded)}>
              <div className={classnames('ui inverted dimmer', {active: loader})}>
                <div className="ui text loader">Loading</div>
              </div>
              <div className={styles.pageHead}>
                <em style={{color: 'rgba(0, 0, 0, 0.3)'}}>{date.substring(0, 10).replace(/-/g, '.')}</em>
                <div
                  ref={ref => this.smallFarmer = ref}
                  name="manyherbsapi"
                ></div>
              </div>
              <br/>
              <div dangerouslySetInnerHTML={{__html: body}}></div>
              <br/>
              <div className="ui brown tag labels">
                {tags.map(tag =>
                  <a className="ui tag label" href={'/view_post_list/tag/'+tag} onClick={this._onClick}>
                    {tag}
                  </a>
                )}
              </div>
              <br/>
              <div className={styles.pageShare}>
                <ShareButton pageUrl={pageUrl}/>
                <div
                  ref={ref => this.normalFarmer = ref}
                  name="manyherbsapi"
                ></div>
                <div className={styles.shareHint}>
                  <div>喜歡我們的文章嗎?</div>
                  <div>歡迎以行動支持我們持續推出好文章喔!</div>
                </div>
              </div>
              <div style={{height: '10px'}}/>
              <ReadMoreBlk postId={pageUrl.substr(pageUrl.lastIndexOf('/')+1)}/>
            </Segment>
          </div>
          <div className="one wide column"></div>
          <div className={classnames('four wide column', styles.sectionPostAuthor)} style={{backgroundColor: '#305775'}}>
            <Segment className={classnames('center aligned basic', styles.containerPostAuthor)} style={{height: '100%', position: 'absolute'}}>
              <a href={'/view_post_list/author/'+name} onClick={this._onClick}>
                <Image className="small centered circular" src={photoUrl}/>
                <div>{name}</div>
              </a>
              <div style={{padding: '0 1rem', textAlign: 'left'}}>{description}</div>
            </Segment>
          </div>
        </div>
        <div id="footer-divider"/>
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
  },

  _onClick(e) {
    let {pathname, hash} = e.currentTarget;
    history.pushState({pathname: pathname, hash: hash}, '', pathname);
    RouteAction.updatePath(pathname, hash);
    e.preventDefault();
  }
});
