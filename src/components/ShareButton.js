import React     from 'react/addons';
import Semantify from 'react-semantify';

let {Image} = Semantify;

export default React.createClass({

  render() {
    let {pageUrl, ...childProps} = this.props;
    console.log('Share');
    console.log(pageUrl);
    return (
      <a {...childProps} target="_blank" href={`http://www.facebook.com/share.php?u=http://wowafrica.tw${pageUrl}`}>
        <Image className="mini" src="/images/facebook_button.png"/>
      </a>
    );
  }
});
