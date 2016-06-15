import React         from 'react';
import IndexMenu     from '../../components/IndexMenu';
import CategoryMenu  from '../../components/CategoryMenu';
import IndexSection  from '../../components/IndexSection';
import Footer        from '../../components/Footer';
import RouteStore    from '../../stores/RouteStore';
import PostListStore from '../../stores/PostListStore';

export default React.createClass({

  getInitialState() {
    return {
    };
  },

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
          <IndexSection category="author" author={author} title={author}/>
        </div>
        <div id="footer-divider" style={{height: '50px'}} />
        <Footer/>
        <div id="page-bottom"/>
      </div>
    );
  },

  _onChange() {
    this.setState({
    });
  }
});