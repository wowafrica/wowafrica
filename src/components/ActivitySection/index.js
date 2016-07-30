import React             from 'react';
import ActivityGrid      from '../../components/ActivityGrid';
import RouteAction       from '../../actions/RouteAction';
import {
  fetchActivities, showActivity
} from '../../actions/ActivityAction';

export default React.createClass({

  contextTypes: {
    store: React.PropTypes.object
  },

  componentDidMount() {
    const {store} = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
    store.dispatch(fetchActivities());
  },

  componentWillUnmount() {
    this.unsubscribe();
  },

  render() {
    const {store} = this.context;
    const {activities} = store.getState();
    console.log(activities);
    return (
      <div>
        <ActivityGrid
          items={activities.showOldItems ? activities.oldItems : activities.items}
          showOther={activities.showOtherHost}
          onCardClick={this._onClick}
        />
      </div>
    );
  },

  _onClick(e) {
    const {store} = this.context;
    let {pathname, hash} = e.currentTarget;

    // Show specific activity
    store.dispatch(showActivity(pathname.split('/')[2]));

    history.pushState({pathname: pathname, hash: hash}, '', pathname);
    RouteAction.updatePath(pathname, hash);
    e.preventDefault();
  }
});
