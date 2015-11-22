import React         from 'react/addons';
import IndexMenu     from '../components/IndexMenu';
import CategoryMenu  from '../components/CategoryMenu';
import Footer        from '../components/Footer';

export default React.createClass({

  getInitialState() {
    return {
    };
  },

  componentDidMount() {
    window.scroll(0, 0);
    $('#category-menu').hide();
    $('.autoplay').slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    });
  },

  render() {
    return (
      <div>
        <div className="fixed-top-menu">
          <IndexMenu />
          <CategoryMenu />
        </div>
        <div className="container-content">
          <div className="ui centered grid">
            <div className="letter-container">
              <div className="slider autoplay">
                <div>
                  <img style={{width: '100%'}} src="https://scontent-tpe1-1.xx.fbcdn.net/hphotos-xpt1/l/t31.0-8/11224593_876815579103384_3221965630580204722_o.jpg"/>
                </div>
                <div>
                  <img style={{width: '100%'}} src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/12032830_876815569103385_8341906416830465739_o.jpg"/>
                </div>
                <div>
                  <img style={{width: '100%'}} src="https://scontent-tpe1-1.xx.fbcdn.net/hphotos-xtf1/t31.0-8/11116524_876815522436723_3501810549566678588_o.jpg"/>
                </div>
                <div>
                  <img style={{width: '100%'}} src="https://scontent-tpe1-1.xx.fbcdn.net/hphotos-xaf1/t31.0-8/12027167_876815495770059_2033263884560156694_o.jpg"/>
                </div>
                <div>
                  <img style={{width: '100%'}} src="https://scontent-tpe1-1.xx.fbcdn.net/hphotos-xtf1/t31.0-8/12045282_876815439103398_5678456448918497992_o.jpg"/>
                </div>
                </div>
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
