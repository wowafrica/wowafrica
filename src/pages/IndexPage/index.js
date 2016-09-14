import React              from 'react';
import IndexMenu          from '../../components/IndexMenu';
import CategoryMenu       from '../../components/CategoryMenu';
import IndexWideBlock     from '../../components/IndexWideBlock';
import IndexCategoryBlock from '../../components/IndexCategoryBlock';
import Footer             from '../../components/Footer';
import RouteConstants     from '../../constants/RouteConstants';
import AppDispatcher      from '../../dispatcher/AppDispatcher';
import Elevator           from '../../vendors/elevator';

import styles from './index.css';

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
    $('#landing-img').fadeIn(2200);
    $('#menu-logo').hide();
    $('#index-menu-anchor')
    .sticky({
      offset: 0,
      onStick: function() {
        $('#index-main-content').css('margin-top', '40px');
        $('#menu-logo').fadeIn();
        $('#index-menu-anchor').css('z-index', 999);
      },
      onUnstick: function() {
        $('#index-main-content').css('margin-top', '0px');
        $('#menu-logo').hide();
      }
    });

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

    let elevatorArticle = new Elevator({
      element: document.querySelector('#btn-article'),
      targetElement: document.querySelector('#category-block-divider'),
      duration: 1500
    });
  },

  componentWillUnmount() {
    AppDispatcher.unregister(this.IndexDispatch);
    $('#menu-logo').show();
    $('#index-menu-anchor')
    .sticky({
      offset: 0,
      onStick: function() {
      },
      onUnstick: function() {
      }
    });
  },

  render() {
    return (
      <div>
        <div className="ui basic segment">
          <div className={styles.indexLanding}>
            <img id="landing-img" src="/images/landing.png" style={{width: '35%', display: 'none'}}/>
          </div>
          <div className="ui sticky" id="index-menu-anchor">
            <IndexMenu/>
          </div>
          <div id="index-main-content" style={{backgroundColor: 'white'}}>
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
          <div id="page-bottom"/>
        </div>
      </div>
    );
  }
});
