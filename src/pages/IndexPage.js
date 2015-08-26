import React          from 'react/addons';
import IndexMenu      from '../components/IndexMenu';
import RouteStore     from '../stores/RouteStore';
import RouteConstants from '../constants/RouteConstants';
import AppDispatcher  from '../dispatcher/AppDispatcher';
import $              from 'jquery';

let firstFPbg = 'https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xpa1/t31.0-8/11154796_779010435550566_7018350735656129504_o.jpg';

export default React.createClass({

  IndexDispatch: '',
  fullPageMounted: false,

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
      $('#fullpage').fullpage({

        anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],

        onLeave: function(index, nextIndex, direction) {
          if (index == 1 && direction == 'down') {
            requestAnimationFrame(function() {
              $('#index-menu')
                .transition('scale in', 750)
              ;
            });
            $('#FPsection2').css('background', '');
          }

          if (index == 2 && direction == 'up') {
            requestAnimationFrame(function() {
              $('#index-menu')
                .transition('scale out', 750)
              ;
            });
            $('#FPsection2').css('background', '');
          }

          if (index == 2 && direction == 'down') {
            $('#FPsection2').css('background', 'url("'+firstFPbg+'")');
          }

          if (index == 3 && direction == 'up') {
            $('#FPsection2').css('background', 'url("'+firstFPbg+'")');
          }
        }
      });
      this.fullPageMounted = true;
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
    if (this.fullPageMounted == true) {
      $.fn.fullpage.destroy('all');
      this.fullPageMounted = false;
    }
  },

  render() {
    return (
      <div>
        <div className="ui sticky container" style={{position: 'fixed', left: '0', right: '0'}}>
          <div className="ui centered grid">
            <IndexMenu hide={true}/>
          </div>
        </div>
        <div style={{background: 'url("'+firstFPbg+'")'}}>
        <div id="fullpage">
            <div className="section" id="FPsection1">
              <div className="header-box">
                <p className="header-title" style={{fontSize: '100px', letterSpacing: '38px', fontWeight: 'bolder', marginBottom: '0'}}>WOW!</p>
                <p className="header-title" style={{fontSize: '80px', letterSpacing: '34px', fontWeight: 'bolder'}}>AFRICA</p>
              </div>
            </div>
            <div className="section" id="FPsection2">
              <div className="header-box">
                <p className="header-title" style={{fontSize: '80px', letterSpacing: '34px', fontWeight: 'bolder'}}>SECTION 1</p>
              </div>
            </div>
            <div className="section" id="FPsection3">
              <div className="header-box">
                <p className="header-title" style={{fontSize: '80px', letterSpacing: '34px', fontWeight: 'bolder'}}>SECTION 2</p>
              </div>
            </div>
            <div className="section" id="FPsection4">
              <div className="header-box">
                <p className="header-title" style={{fontSize: '80px', letterSpacing: '34px', fontWeight: 'bolder'}}>SECTION 3</p>
              </div>
            </div>
            <div className="section" id="FPsection5">
              <div className="header-box">
                <p className="header-title" style={{fontSize: '80px', letterSpacing: '34px', fontWeight: 'bolder'}}>SECTION 4</p>
              </div>
            </div>
        </div>
        </div>
      </div>
    );
  }
});
