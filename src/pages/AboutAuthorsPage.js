import React        from 'react/addons';
import Semantify    from 'react-semantify';
import IndexMenu    from '../components/IndexMenu';
import CategoryMenu from '../components/CategoryMenu';
import Footer       from '../components/Footer';
import AuthorsStore from '../stores/AuthorsStore';

let {Cards, Card, Image} = Semantify;

let AuthorsBox = React.createClass({

  getInitialState() {
    return ({authors: AuthorsStore.getAll()});
  },

  componentDidMount() {
    AuthorsStore.addChangeListener(this._onChange);

    let elevatorAbout = new Elevator({
      element: document.querySelector('#btn-about'),
      targetElement: document.querySelector('#page-bottom'),
      duration: 1500
    });
  },

  componentWillUnmount() {
    AuthorsStore.removeChangeListener(this._onChange);
  },

  componentDidUpdate() {
    let elevatorAbout = new Elevator({
      element: document.querySelector('#btn-about'),
      targetElement: document.querySelector('#page-bottom'),
      duration: 1500
    });
  },

  render() {
    let authorsDiv = this.state.authors.map(function(author) {
      return (
          <div className="card" key={author.id}>
            <Image src={author.photoUrl}></Image>
            <div className="content">
              <div className="header">
                {author.name}
              </div>
              <div className="meta">
                {author.from}
              </div>
              <div className="description">
                {author.description}
              </div>
            </div>
          </div>
        );
    });
    return (
      <div className="ui centered cards">
        {authorsDiv}
      </div>
    );
  },

  _onChange() {
    this.setState({
      authors: AuthorsStore.getAll()
    });
  }
});

export default React.createClass({

  render() {
    return (
      <div>
        <div className="fixed-top-menu">
          <IndexMenu />
          <CategoryMenu />
        </div>
        <div className="container-content">
          <div className="ui page grid">
            <div className="wide centered column">
              <AuthorsBox/>
            </div>
          </div>
        </div>
        <div id="footer-divider" style={{height: '50px'}} />
        <Footer/>
        <div id="page-bottom"/>
      </div>
    );
  }
});
