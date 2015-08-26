import React          from 'react/addons';
import IndexMenu      from '../components/IndexMenu';
import IndexSection   from '../components/IndexSection';
import MenuStore      from '../stores/MenuStore';
import RouteStore     from '../stores/RouteStore';
import RouteConstants from '../constants/RouteConstants';
import AppDispatcher  from '../dispatcher/AppDispatcher';
import $              from 'jquery';

let firstFPbg = 'https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xpa1/t31.0-8/11154796_779010435550566_7018350735656129504_o.jpg';

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
                .transition('scale in', 750)
              ;
            });
            $('#fpTopArticle').css('background', '');
          }

          if (index == 2 && direction == 'up') {
            requestAnimationFrame(function() {
              $('#index-menu')
                .transition('scale out', 750)
              ;
            });
            $('#fpTopArticle').css('background', '');
          }

          if (index == 2 && direction == 'down') {
            $('#fpTopArticle').css('background', 'url("'+firstFPbg+'")');
          }

          if (index == 3 && direction == 'up') {
            $('#fpTopArticle').css('background', 'url("'+firstFPbg+'")');
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
          <IndexSection sid={'fp'+page.url.substring(2)} title={page.showName}/>
      );
    });

    return (
      <div>
        <div className="ui sticky container" style={{position: 'fixed', left: '0', right: '0'}}>
          <div className="ui centered grid">
            <IndexMenu hide={true}/>
          </div>
        </div>
        <div style={{background: 'url("'+firstFPbg+'")'}}>
          <div id="fullpage">
            <div className="section" id="fpLanding">
              <div className="header-box">
                <p className="header-title" style={{fontSize: '100px', letterSpacing: '38px', fontWeight: 'bolder', marginBottom: '0'}}>WOW!</p>
                <p className="header-title" style={{fontSize: '80px', letterSpacing: '34px', fontWeight: 'bolder'}}>AFRICA</p>
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
