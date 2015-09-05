import React      from 'react/addons';
import classNames from 'classnames';
import Semantify  from 'react-semantify';
import IndexMenu  from '../components/IndexMenu';
import PostStore  from '../stores/PostStore';

let {Segment, Header, Label, Divider} = Semantify;

export default React.createClass({

  getInitialState() {
    return {
      post: PostStore.getPost(),
      loader: true
    };
  },

  componentDidMount() {
    PostStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    PostStore.removeChangeListener(this._onChange);
  },

  render() {
    let {post ,loader} = this.state;
    let {body, title, image, tags = [], author, date} = post;
    // console.log(JSON.stringify(post, null, 2));
    return (
      <div>
        <div className="ui sticky container" style={{position: 'fixed', left: '0', right: '0'}}>
          <div className="ui centered grid">
            <IndexMenu/>
          </div>
        </div>
        <div className="post-image" style={{backgroundImage: `url(${image})`}}>
          <div className="inner">
            {title}
          </div>
        </div>
        <div className="container-content">
          <div className="container-map">
            <Segment className="very padded container-post">
              <div className={classNames('ui inverted dimmer', {active: loader})}>
                <div className="ui text loader">Loading</div>
              </div>
              <div dangerouslySetInnerHTML={{__html: body}}></div>
              <br/>
              <div className="ui brown tag labels">
                {tags.map(tag => <Label>{tag}</Label>)}
              </div>
              <Divider/>
              <div>作者: {author}</div>
              <div>時間: {date}</div>
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
  }
});
