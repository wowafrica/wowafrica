import React          from 'react';
import IndexMenu      from '../../components/IndexMenu';
import CategoryMenu   from '../../components/CategoryMenu';
import * as ActivityAction from '../../actions/ActivityAction';

export default React.createClass({

  contextTypes: {
    store: React.PropTypes.object
  },

  componentDidMount() {
    window.scroll(0, 0);
    const {store} = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );

    store.dispatch(ActivityAction.fetchAvtivities());
  },

  componentDidUpdate() {
  },

  componentWillUnmount() {
    this.unsubscribe();
  },

  render() {
    const {store} = this.context;
    const {activities} = store.getState();

    return (
      <div>
        <div className="fixed-top-menu">
          <IndexMenu />
          <CategoryMenu />
        </div>
        <div className="container-content">
          {activities.items[0].body}
        </div>
      </div>
    );
  }
});
