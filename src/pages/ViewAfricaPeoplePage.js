import React      from 'react/addons';
import IndexMenu  from '../components/IndexMenu';

export default React.createClass({

  render() {
    return (
      <div>
        <div className="container-header">
          <IndexMenu/>
        </div>
        <div className="container-content">
          <p>Views Africa People</p>
        </div>
      </div>
    );
  }
});
