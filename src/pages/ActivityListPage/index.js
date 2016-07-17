import React           from 'react';
import IndexMenu       from '../../components/IndexMenu';
import CategoryMenu    from '../../components/CategoryMenu';
import Footer          from '../../components/Footer';
import ActivitySection from '../../components/ActivitySection';

export default React.createClass({

  componentDidMount() {
    window.scroll(0, 0);
  },

  componentDidUpdate() {
  },

  componentWillUnmount() {
    this.unsubscribe();
  },

  render() {
    return (
      <div>
        <div className="fixed-top-menu">
          <IndexMenu/>
          <CategoryMenu/>
        </div>
        <div className="container-content">
          <ActivitySection/>
        </div>
        <div id="footer-divider" style={{height: '50px'}}/>
          <Footer/>
        <div id="page-bottom"/>
      </div>
    );
  }
});
