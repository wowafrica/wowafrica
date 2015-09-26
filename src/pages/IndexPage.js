import React           from 'react/addons';
import IndexMenu       from '../components/IndexMenu';
import CategoryMenu    from '../components/CategoryMenu';
import IndexSection    from '../components/IndexSection';
import IndexNewSection from '../components/IndexNewSection';
import MenuStore       from '../stores/MenuStore';
import RouteStore      from '../stores/RouteStore';
import RouteConstants  from '../constants/RouteConstants';
import AppDispatcher   from '../dispatcher/AppDispatcher';

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
    if (typeof $.fn.fullpage.destroy =='function') {
      $.fn.fullpage.destroy('all');
    }
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
            <div className="section post-image" id="fpTopArticle" style={{backgroundImage: 'url(http://40.media.tumblr.com/0763b9dc5821f0bcdbd8240c4857b19b/tumblr_inline_nu77zaiQb61tpohgw_540.jpg)'}}>
              <div className="header-box">
                <p className="header-title" style={{fontSize: '80px', letterSpacing: '34px', fontWeight: 'bolder', color: 'white'}}>眼中不應該只有敵人和利益：辛巴威給我們的啟示</p>
              </div>
            </div>
            <div className="section post-image" id="fpNewArticle" style={{backgroundImage: 'url(http://40.media.tumblr.com/0456d26e0a3aa33612f522637d5fe74b/tumblr_inline_nu78v4zuIy1tpohgw_540.jpg)'}}>
              <div className="header-box">
                <p className="header-title" style={{fontSize: '80px', letterSpacing: '34px', fontWeight: 'bolder', color: 'white'}}>獅子山共和國新法令，不准未成年懷孕青少女上學</p>
              </div>
            </div>
            <div className="ui basic segment">
              <CategoryMenu />
              {sectionsDiv}
            </div>
          </div>
        </div>
      </div>
    );
  }
});
