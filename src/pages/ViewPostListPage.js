import React         from 'react/addons';
import IndexMenu     from '../components/IndexMenu';
import CategoryMenu  from '../components/CategoryMenu';
import IndexSection  from '../components/IndexSection';
import Footer        from '../components/Footer';
import RouteStore    from '../stores/RouteStore';
import PostListStore from '../stores/PostListStore';

export default React.createClass({

  getInitialState() {
    return {
    };
  },

  componentDidMount() {
    window.scroll(0, 0);
    let elevatorAbout = new Elevator({
      element: document.querySelector('#btn-about'),
      targetElement: document.querySelector('#page-bottom'),
      duration: 1500
    });

  },

  componentDidUpdate() {
    let elevatorAbout = new Elevator({
      element: document.querySelector('#btn-about'),
      targetElement: document.querySelector('#page-bottom'),
      duration: 1500
    });
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
          <IndexSection category={category} title={category}/>
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
