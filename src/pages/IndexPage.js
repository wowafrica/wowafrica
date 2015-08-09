import React          from 'react/addons';
import IndexMenu      from '../components/IndexMenu';
import RouteConstants from '../constants/RouteConstants';
import $              from 'jquery';

export default React.createClass({

  componentDidMount() {
    $(document).ready(function() {

      $('#menu-logo').css('visibility', 'hidden');

      $('#fullpage').fullpage({
        onLeave: function(index, nextIndex, direction) {
          if (index == 1 && direction == 'down') {
            requestAnimationFrame(function() {
              $('#menu-logo')
                .transition('scale in', 750)
              ;
            });
          }

          if (index == 2 && direction == 'up') {
            requestAnimationFrame(function() {
              $('#menu-logo')
                .transition('scale out', 750)
              ;
            });
          }
        }
      });
    });
  },

  render() {

    return (
      <div>
        <div className="ui sticky container" style={{position: 'fixed', left: '0', right: '0'}}>
          <div className="ui centered grid">
            <IndexMenu />
          </div>
        </div>
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
        </div>
      </div>
    );
  }
});
