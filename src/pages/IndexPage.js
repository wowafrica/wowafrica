import React           from 'react/addons';
import IndexMenu       from '../components/IndexMenu';
import IndexSection    from '../components/IndexSection';
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

      let fpAnchors = MenuStore.getIndexAnchors();
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
            $('#fpTopArticle').css('background', '');
          }

          if (index == 2 && direction == 'up') {
            requestAnimationFrame(function() {
              $('#index-menu')
                .transition('fade out', 750)
              ;
            });
            $('#fpTopArticle').css('background', '');
          }

          if (index == 2 && direction == 'down') {

          }

          if (index == 3 && direction == 'up') {

          }
        }
      });
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

    return (
      <div>
        <div>
          <IndexMenu hide={true}/>
        </div>
        <div style={{backgroundColor: 'white'}}>
          <div id="fullpage">
            <div className="section" id="fpLanding">
              <div style={{textAlign: 'center'}}>
                <img src='/images/landing.png' style={{width: '50%'}}/>
              </div>
            </div>
            <div className="section" id="fpTopArticle">
              <div className="header-box">
                <p className="header-title" style={{fontSize: '80px', letterSpacing: '34px', fontWeight: 'bolder'}}>TOP ARTICLE</p>
              </div>
            </div>
            {sectionsDiv}
          </div>
        </div>
      </div>
    );
  }
});
