import React          from 'react/addons';
import RouteAction    from '../actions/RouteAction';

export default React.createClass({


  render() {
    return (
      <div className="footer">
        <div className="ui container">
          <div className="ui three column grid">
            <div className="footer-box column" style={{paddingLeft: '3rem', paddingRight: '3rem'}}>
              <span className="fotter-box-title">關於我們</span>
              <br/>
              <br/>
              致力於打造在台灣的非洲資訊平台，透過線上的資料整理以及實體活動讓台灣更認識非洲，看見世界，也看見台灣自己。
              <br/>
              <br/>
              我們是一群曾經在非洲大陸旅行的年輕人，2014年回台灣後辦理講座、為期兩個月的非洲特展，並與非洲駐華使節團合辦餐會，讓大家用不一樣的面向和角度認識非洲。
            </div>
            <div className="column footer-box" style={{paddingLeft: '3rem', paddingRight: '3rem'}}>
              <span className="fotter-box-title">訂閱通知</span>
            </div>
            <div className="column footer-box" style={{paddingLeft: '3rem', paddingRight: '3rem'}}>
              <a href="/about_authors" onClick={this._onClick}>
                <span className="fotter-box-title">專欄作者</span>
              </a>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <span className="fotter-box-title">聯絡我們</span>
            </div>
          </div>
        </div>
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
