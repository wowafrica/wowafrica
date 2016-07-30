import React        from 'react';
import classnames   from 'classnames';
import IndexMenu    from '../../components/IndexMenu';
import CategoryMenu from '../../components/CategoryMenu';
import Footer       from '../../components/Footer';
import ShareButton  from '../../components/ShareButton';
import {
  showActivity, fetchActivities
} from '../../actions/ActivityAction';


import styles from './index.css';

import {
  Segment, Header, Label, Divider, Rail, Image
} from 'react-semantify';

export default React.createClass({

  contextTypes: {
    store: React.PropTypes.object
  },

  componentDidMount() {
    window.scroll(0, 0);
    const {store} = this.context;
    const {pageUrl} = this.props;

    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
    store.dispatch(fetchActivities())
      .then(() => store.dispatch(showActivity(pageUrl.split('/')[2])));
  },

  componentWillUnmount() {
    this.unsubscribe();
  },

  render() {
    const {store} = this.context;
    const {
      activities: {
        activity: {
          id = 0,
          title = '',
          image = '',
          content = '',
          date = '',
          time = '',
          location = '',
          address = '',
          host = 'wowAfrica阿非卡',
          ticketLink = ''
        }
      }
    } = store.getState();
    let loader = id === 0 ? true: false;

    let {pageUrl} = this.props;

    // console.log(JSON.stringify(post, null, 2));
    let largeImage = image ? image.replace(/_540.jpg/g, '_1280.jpg') : image;
    return (
      <div>
        <div className="fixed-top-menu">
          <IndexMenu />
          <CategoryMenu />
        </div>
        <div className={styles.postImage} style={{backgroundImage: `url(${largeImage})`, backgroundPosition: 'center'}}>
          <div className={styles.inner}>
            <div className={styles.innerTitle}>
              {title}
            </div>
          </div>
        </div>
        <div className="ui stackable four column grid">
          <div className="one wide column"></div>
          <div className="ten wide column">
            <Segment className={classnames('very padded basic', styles.containerPost, styles.antiVeryPadded)}>
            <div className={classnames('ui inverted dimmer', {active: loader})}>
              <div className="ui text loader">Loading</div>
            </div>
            <br/>
          <div dangerouslySetInnerHTML={{__html: content}}></div>
            <br/>
              <ShareButton pageUrl={pageUrl}/>
              <div style={{height: '10px'}}/>
            </Segment>
          </div>
          <div className="one wide column"></div>
          <div className={classnames('four wide column', styles.sectionActivity)} style={{backgroundColor: '#305775'}}>
            <Segment className={classnames('basic', styles.containerActivity)} style={{height: '100%', position: 'absolute'}}>
              <div>{`日期：${date}`}</div>
              <div>{`時間：${time}`}</div>
              <div>{`地點：${time}`}</div>
              <div>{`${address}`}</div>
              <div>顯示地圖</div>
              <div>{`主辦單位：${host}`}</div>
            </Segment>
          </div>
        </div>
        <div id="footer-divider"/>
        <Footer/>
        <div id="page-bottom"/>
      </div>
    );
  }
});
