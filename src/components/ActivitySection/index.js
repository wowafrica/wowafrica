import React             from 'react';
import ActivityGrid      from '../../components/ActivityGrid';
import {fetchActivities} from '../../actions/ActivityAction';
import RouteAction       from '../../actions/RouteAction';

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
    let {pathname, hash} = e.currentTarget;
    history.pushState({pathname: pathname, hash: hash}, '', pathname);
    RouteAction.updatePath(pathname, hash);
    e.preventDefault();
  }
});
