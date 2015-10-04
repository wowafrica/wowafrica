import React              from 'react/addons';
import IndexMenu          from '../components/IndexMenu';
import CategoryMenu       from '../components/CategoryMenu';
import IndexSection       from '../components/IndexSection';
import IndexWideBlock     from '../components/IndexWideBlock';
import IndexCategoryBlock from '../components/IndexCategoryBlock';
import MenuStore          from '../stores/MenuStore';
import RouteStore         from '../stores/RouteStore';
import RouteConstants     from '../constants/RouteConstants';
import AppDispatcher      from '../dispatcher/AppDispatcher';

export default React.createClass({

  IndexDispatch: '',

  moveFullPageSection() {
    if (RouteStore.currentHash.length > 0) {
      $.fn.fullpage.moveTo(RouteStore.currentHash, 0);
      RouteStore.currentHash = '';
    }
  },

  getInitialState() {
    return ({targetSection: ''});
  },

  componentDidMount() {
    $(document).ready(function() {
/*
      let fpAnchors = MenuStore.getIndexAnchors();
      fpAnchors.unshift('newArticle');
      fpAnchors.unshift('topArticle');
      fpAnchors.unshift('landing');

      $('#fullpage').fullpage({

        anchors: fpAnchors,

        onLeave: function(index, nextIndex, direction) {
          if (index == 1 && direction == 'down') {
            requestAnimationFrame(function() {
              $('#index-menu')
                .transition('fade in', 750)
              ;
            });
          }

          if (index == 2 && direction == 'up') {
            requestAnimationFrame(function() {
              $('#index-menu')
                .transition('fade out', 750)
              ;
            });
          }

          if (index == 2 && direction == 'down') {

          }

          if (index == 3 && direction == 'up') {

          }
        }
      });*/
    });
    this.moveFullPageSection();
    this.IndexDispatch = AppDispatcher.register((action) => {
      switch (action.actionType) {
        case RouteConstants.ROUTE_HASHTAG:
          this.moveFullPageSection();
          break;
      }
    });
  },

  componentWillUnmount() {
    AppDispatcher.unregister(this.IndexDispatch);
    /*
    if (typeof $.fn.fullpage.destroy =='function') {
      $.fn.fullpage.destroy('all');
    }
    */
  },

  render() {
    let sectionsDiv = MenuStore.getArticleSubPages().map((page) => {
      return (
          <IndexSection category={page.url.substring(2)} title={page.showName}/>
      );
    });
    /*
      <div className="section" id="fpLanding">
        <div style={{textAlign: 'center'}}>
          <img src='/images/landing.png' style={{width: '50%'}}/>
        </div>
      </div>
    */
    return (
      <div>
        <div>
          <IndexMenu hide={false}/>
        </div>
        <div style={{backgroundColor: 'white'}}>
          <div id="fullpage">
            <IndexWideBlock type='new'/>
            <IndexWideBlock type='top'/>
            <div className="ui basic segment">
              <CategoryMenu />
              <div id="category-block-divider" style={{height: '15px'}} />
              <IndexCategoryBlock />
            </div>
          </div>
        </div>
        <div style={{textAlign: 'center', marginTop: '15px', paddingTop: '100px', fontSize: '44px', letterSpacing: '12px', height: '320px', backgroundColor: 'aliceblue'}}>
        WOW！AFRICA
        </div>
      </div>
    );
  }
});
