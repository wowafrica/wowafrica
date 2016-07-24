import React             from 'react';
import ActivityGrid      from '../../components/ActivityGrid';
import {fetchActivities} from '../../actions/ActivityAction';

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
        />
      </div>
    );
  }
});
