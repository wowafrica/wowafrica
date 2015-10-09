import React              from 'react/addons';
import IndexMenu          from '../components/IndexMenu';
import CategoryMenu       from '../components/CategoryMenu';
import IndexSection       from '../components/IndexSection';
import IndexWideBlock     from '../components/IndexWideBlock';
import IndexCategoryBlock from '../components/IndexCategoryBlock';
import Footer             from '../components/Footer'
import MenuStore          from '../stores/MenuStore';
import RouteStore         from '../stores/RouteStore';
import RouteConstants     from '../constants/RouteConstants';
import AppDispatcher      from '../dispatcher/AppDispatcher';

export default React.createClass({

  IndexDispatch: '',

  getInitialState() {
    return ({targetSection: ''});
  },

  componentDidMount() {
    this.IndexDispatch = AppDispatcher.register((action) => {
      switch (action.actionType) {
        case RouteConstants.ROUTE_HASHTAG:
          break;
      }
    });

    $('#category-menu').show();

    $('#category-menu-anchor')
    .sticky({
      offset: 40,
      onStick: function() {
        $('#category-block-divider').css('margin-top', '40px');
      },
      onUnstick: function() {
        $('#category-block-divider').css('margin-top', '0px');
      }
    });

    let elevator = new Elevator({
      element: document.querySelector('#btn-article'),
      targetElement: document.querySelector('#category-block-divider'),
      duration: 1500
    });

    let elevator_about = new Elevator({
      element: document.querySelector('#btn-about'),
      targetElement: document.querySelector('#index-bottom'),
      duration: 1500
    });
  },

  componentWillUnmount() {
    AppDispatcher.unregister(this.IndexDispatch);
  },

  render() {
    let sectionsDiv = MenuStore.getArticleSubPages().map((page) => {
      return (
          <IndexSection category={page.url.substring(2)} title={page.showName}/>
      );
    });

    return (
      <div>
        <div className="fixed-top-menu">
          <IndexMenu/>
        </div>
        <div style={{backgroundColor: 'white'}}>
          <div>
            <IndexWideBlock type='new'/>
            <IndexWideBlock type='top'/>
            <div className="ui basic segment">
              <div className="ui sticky" id="category-menu-anchor">
                <CategoryMenu/>
              </div>
              <div id="category-block-divider" style={{height: '15px'}} />
              <div className="ui container">
                <IndexCategoryBlock/>
              </div>
            </div>
          </div>
        </div>
        <div id="footer-divider" style={{height: '50px'}} />
        <Footer/>
        <div id="index-bottom"/>
      </div>
    );
  }
});
