import React         from 'react';
import IndexMenu     from '../../components/IndexMenu';
import CategoryMenu  from '../../components/CategoryMenu';
import TagSection    from '../../components/TagSection';
import Footer        from '../../components/Footer';
import RouteStore    from '../../stores/RouteStore';

export default React.createClass({

  componentDidMount() {
    window.scroll(0, 0);
  },

  render() {
    let tag = decodeURIComponent(RouteStore.getCurrentRoute().params.tag) || '非洲';
    return (
      <div>
        <div className="fixed-top-menu">
          <IndexMenu />
          <CategoryMenu />
        </div>
        <div className="container-content">
          <TagSection tag={tag} title={tag}/>
        </div>
        <div id="footer-divider" style={{height: '50px'}} />
        <Footer/>
        <div id="page-bottom"/>
      </div>
    );
  }
});
