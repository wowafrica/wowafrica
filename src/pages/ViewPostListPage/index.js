import React           from 'react';
import IndexMenu       from '../../components/IndexMenu';
import CategoryMenu    from '../../components/CategoryMenu';
import CategorySection from '../../components/CategorySection';
import NewSection      from '../../components/NewSection';
import Footer          from '../../components/Footer';
import RouteStore      from '../../stores/RouteStore';

export default React.createClass({

  componentDidMount() {
    window.scroll(0, 0);
  },

  componentDidUpdate() {
    window.scroll(0, 0);
  },

  render() {
    let category = RouteStore.getCurrentRoute().params.category || 'news';
    // let {category} = this.props;
    // let {posts = []} = this.state.postList[category];
    return (
      <div>
        <div className="fixed-top-menu">
          <IndexMenu />
          <CategoryMenu />
        </div>
        <div className="container-content">
          {category === 'new' ?
            <NewSection/> :
            <CategorySection category={category} title={category}/>}
        </div>
        <div id="footer-divider" style={{height: '50px'}} />
        <Footer/>
        <div id="page-bottom"/>
      </div>
    );
  }
});
