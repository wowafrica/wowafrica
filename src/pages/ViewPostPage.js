import React from 'react/addons';
import Semantify from 'react-semantify';
import IndexMenu from '../components/IndexMenu';

let {Segment} = Semantify;

export default React.createClass({

  render() {
    let {postID} = this.props;
    return (
      <div>
        <div className="container-header">
          <IndexMenu/>
        </div>
        <div className="container-content">
          <div className="container-map">
            <Segment>
              {postID}
            </Segment>
          </div>
        </div>
      </div>
    );
  }
});
