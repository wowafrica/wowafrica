import React        from 'react/addons';
import Semantify    from 'react-semantify';

let {Cards, Card, Image} = Semantify;

let SlideBox = React.createClass({

  getInitialState() {
    return {

    };
  },

  componentDidMount() {
    
  },

  componentWillUnmount() {
    
  },

  render() {
    let ttt = [1,2,3];
    let slideDiv = ttt.map(function(article) {
      return (
        <div className="column">
        <div className="event test">
          <div className="ui fluid card">
            <div className="ui dimmer"></div>
            <Image src={'https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/1606354_525440380907574_486432051_o.jpg'}></Image>
            <div className="content">
              <div className="header">
                {'A'}
              </div>
              <div className="meta">
                {'B'}
              </div>
              <div className="description">
                {'C'}
              </div>
            </div>
          </div>
        </div>
        </div>
        );
    });
    return (
      <div className="row">
        {slideDiv}
      </div>
    );
  },

  _onChange() {

  }
});

export default React.createClass({

  getInitialState() {
    return {

    };
  },

  componentDidMount() {
    $('.event.test .card')
      .dimmer({
        on: 'hover',
        opacity: 0.5
      });
  },

  render() {
    return (
      <div className="section" id={this.props.sid}>
        <div className="section-box">
          <p className="section-title">{this.props.title}</p>
        </div>
        <div className="slide">
          <div className="ui container">
            <div className="ui three column grid">
              <SlideBox />
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="ui container">
            <div className="ui three column grid">
              <SlideBox />
              <SlideBox />
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="ui container">
            <div className="ui three column grid">
              <SlideBox />
              <SlideBox />
            </div>
          </div>
        </div>
      </div>
    );
  }

});
