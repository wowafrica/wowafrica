import React      from 'react/addons';
import classNames from 'classnames';
import Semantify  from 'react-semantify';
import IndexMenu  from '../components/IndexMenu';
import PostStore  from '../stores/PostStore';

let {Segment, Header} = Semantify;

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
    return (
      <div>
        <div className="container-header">
          <IndexMenu/>
        </div>
        <div className="container-content">
          <div className="container-map">
            <Segment className="very padded container-post">
              <div className={classNames('ui inverted dimmer', {active: loader})}>
                <div className="ui text loader">Loading</div>
              </div>
              <Header className="large">{post.title}</Header>
              <div dangerouslySetInnerHTML={{__html: post.body}}></div>
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
