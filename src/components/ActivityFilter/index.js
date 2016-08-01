import React       from 'react';
import {showOtherHost, showWaHost} from '../../actions/ActivityAction';
import {showOldActivities, showNewActivities} from '../../actions/ActivityAction';
import styles      from './index.css';

export default React.createClass({

  contextTypes: {
    store: React.PropTypes.object
  },

  componentDidMount() {
    const {store} = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
    $('#activityTimeFilter').dropdown();
    $('#activityHostFilter').dropdown();
  },

  componentWillUnmount() {
    this.unsubscribe();
  },

  render() {
    const {store} = this.context;
    const {activities} = store.getState();
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <div id="activityTimeFilter" className="ui inline dropdown">
            <div className="text">{activities.showOldItems ? '過去' : '即將'}</div>
            <i className="dropdown icon"></i>
            <div className="menu">
              <div className="header">活動時間</div>
              <div className={`${activities.showOldItems ? '' : 'active'} item`} onClick={this.onShowNewClick} data-text="即將">即將</div>
              <div className={`${activities.showOldItems ? 'active' : ''} item`} onClick={this.onShowOldClick} data-text="過去">過去</div>
            </div>
          </div>
          {'由 '}
          <div id="activityHostFilter" className="ui inline dropdown">
            <div className="text">{activities.showOtherHost ? '夥伴單位' : 'wowAfrica'}</div>
            <i className="dropdown icon"></i>
            <div className="menu">
              <div className="header">主辦單位</div>
              <div className={`${activities.showOtherHost ? '' : 'active'} item`} onClick={this.onShowWaClick} data-text="wowAfrica">wowAfrica</div>
              <div className={`${activities.showOtherHost ? 'active' : ''} item`} onClick={this.onShowOtherClick} data-text="夥伴單位">夥伴單位</div>
            </div>
          </div>
          舉辦
        </div>
      </div>
    );
  },

  onShowOldClick() {
    this.context.store.dispatch(showOldActivities());
  },

  onShowNewClick() {
    this.context.store.dispatch(showNewActivities());
  },

  onShowOtherClick() {
    this.context.store.dispatch(showOtherHost());
  },

  onShowWaClick() {
    this.context.store.dispatch(showWaHost());
  }
});
