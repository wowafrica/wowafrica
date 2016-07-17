import React             from 'react';
import ActivityGrid      from '../../components/ActivityGrid';
import {fetchAvtivities} from '../../actions/ActivityAction';

export default React.createClass({

  contextTypes: {
    store: React.PropTypes.object
  },

  componentDidMount() {
    const {store} = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
    store.dispatch(fetchAvtivities());
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
        <ActivityGrid items={activities.items}/>
      </div>
    );
  }
});
