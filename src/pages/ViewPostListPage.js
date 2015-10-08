import React         from 'react/addons';
import IndexMenu     from '../components/IndexMenu';
import CategoryMenu  from '../components/CategoryMenu';
import IndexSection  from '../components/IndexSection';
import RouteStore    from '../stores/RouteStore';
import PostListStore from '../stores/PostListStore';

export default React.createClass({

  getInitialState() {
    return {
      category: RouteStore.getCurrentRoute().params.category || 'news'
    };
  },

  componentDidMount() {
    PostListStore.addChangeListener('category', this._onChange);
  },

  componentWillUnmount() {
    PostListStore.removeChangeListener('category', this._onChange);
  },

  componentWillUpdate() {
    console.log('PostListPage wiil update '+this.state.category);
  },

  render() {
    let {category} = this.state;
    console.log('PostListPage: '+category);
    // let {category} = this.props;
    // let {posts = []} = this.state.postList[category];
    return (
      <div>
        <div className="fixed-top-menu">
          <IndexMenu />
          <CategoryMenu />
        </div>
        <div className="container-content">
          <IndexSection category={category} title={category}/>
        </div>
      </div>
    );
  },

  _onChange() {
    this.setState({
      category: RouteStore.getCurrentRoute().params.category || 'news'
    });
  }
});
