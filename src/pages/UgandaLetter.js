import React         from 'react';
import IndexMenu     from '../components/IndexMenu';
import CategoryMenu  from '../components/CategoryMenu';
import Footer        from '../components/Footer';
import ULConfig      from '../configures/UgandaLetterConfig';

export default React.createClass({

  getInitialState() {
    return ULConfig.origin;
  },

  componentDidMount() {
    window.scroll(0, 0);
    $('#category-menu').hide();
  },

  _onClick(e) {
    e.preventDefault();
    this.setState(ULConfig[e.target.id]);
  },

  pictureDiv(pics) {
    let cssClass = 'showroom-anima-'+pics.length;
    return pics.map((pic, i) => {
      return (<div key={'pic'+i} className={'showroom-position showroom-img '+cssClass} style={{backgroundImage: 'url(/images/uganda/'+pic+')', animationDelay: i*3+'s'}}><span></span></div>);
    });
  },

  render() {
    let {title, picture, content} = this.state;
    return (
      <div>
        <div className="fixed-top-menu">
          <IndexMenu />
          <CategoryMenu />
        </div>
        <div className="container-content" style={{backgroundColor: 'rgb(230,236,240)'}}>
          <div className="ui container">
            <div className="ui stackable grid" style={{width: 'inherit', marginLeft: '0'}}>
              <div className="uganda-showroom">
                {this.pictureDiv(picture)}
              </div>
              <div className="row">
              <div className="column">
                <div className="ui grid" style={{paddingTop: '10px'}}>
                  <div className="one wide column" style={{height: 0}}/>
                  <div className="fifteen wide column" style={{textAlign: 'left', textDecoration:'underline', fontSize: '1.6rem', paddingTop: '20px'}}>
                    <div style={{height: '1.5em'}}><span style={{backgroundColor: 'rgb(190,156,194)'}}>&nbsp;UGANDA PENPAL&nbsp;</span></div>
                    <div style={{height: '1.5em'}}><span style={{backgroundColor: 'rgb(230,236,240)'}}>&nbsp;烏干達筆友&nbsp;</span></div>
                    <div style={{height: '1.5em'}}><span style={{backgroundColor: 'rgb(230,236,240)'}}>&nbsp;{title}&nbsp;</span></div>
                  </div>
                </div>
              </div>
              </div>
              <div className="row" style={{height: '20em'}}/>
              <div className="row">
                <div className="five wide column" style={{textAlign: 'left', textDecoration:'underline', fontSize: '1.6rem', paddingTop: '20px'}}>
                  <div className="ui grid" style={{paddingTop: '3em', backgroundColor: 'rgb(150,0,31)'}}>
                    <div className="two wide column"/>
                    <div className="fourteen wide column">
                      <div className="showromm-title"><a href='' onClick={this._onClick}><span id='origin' style={{backgroundColor: 'rgb(255,255,220)'}}>&nbsp;活動源起&nbsp;</span></a></div>
                      <div className="showromm-title"><a href='' onClick={this._onClick}><span id='method' style={{backgroundColor: 'rgb(255,255,220)'}}>&nbsp;活動方式&nbsp;</span></a></div>
                      <div className="showromm-title"><a href='' onClick={this._onClick}><span id='introduction' style={{backgroundColor: 'rgb(255,255,220)'}}>&nbsp;烏干達小介紹&nbsp;</span></a></div>
                      <div className="showromm-title"><a href='' onClick={this._onClick}><span id='firstLetter' style={{backgroundColor: 'rgb(255,255,220)'}}>&nbsp;第一封信&nbsp;</span></a></div>
                      <div className="showromm-title"><a href='' onClick={this._onClick}><span id='secondLetter' style={{backgroundColor: 'rgb(255,255,220)'}}>&nbsp;第二封信&nbsp;</span></a></div>
                      <div className="showromm-title"><a href='' onClick={this._onClick}><span id='thirdLetter' style={{backgroundColor: 'rgb(255,255,220)'}}>&nbsp;第三封信&nbsp;</span></a></div>
                      <div className="showromm-title"></div>
                    </div>
                  </div>
                </div>
                <div className="one wide column"/>
                <div className="ten wide column" style={{paddingTop: '6em', textAlign: 'left', fontSize:'1.5rem', lineHeight: '2em'}}>
                  <div dangerouslySetInnerHTML={{__html: content}} />
                </div>
              </div>
              <div style={{height: '100px'}}/>
            </div>
          </div>
        </div>
        <div id="footer-divider"/>
        <Footer/>
        <div id="page-bottom"/>
      </div>
    );
  }
});
