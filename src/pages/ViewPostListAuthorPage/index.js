import React         from 'react';
import IndexMenu     from '../../components/IndexMenu';
import CategoryMenu  from '../../components/CategoryMenu';
import AuthorSection from '../../components/AuthorSection';
import Footer        from '../../components/Footer';
import RouteStore    from '../../stores/RouteStore';

export default React.createClass({

  componentDidMount() {
    window.scroll(0, 0);
  },

  render() {
    let author = decodeURIComponent(RouteStore.getCurrentRoute().params.author) || '賴奕諭';
    return (
      <div>
        <div className="fixed-top-menu">
          <IndexMenu />
          <CategoryMenu />
        </div>
        <div className="container-content">
          <AuthorSection author={author} title={author}/>
        </div>
        <div id="footer-divider" style={{height: '50px'}} />
        <Footer/>
        <div id="page-bottom"/>
      </div>
    );
  }
});
