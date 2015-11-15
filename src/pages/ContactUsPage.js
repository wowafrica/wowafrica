import React        from 'react/addons';
import IndexMenu    from '../components/IndexMenu';
import CategoryMenu from '../components/CategoryMenu';

export default React.createClass({

  componentDidMount() {
    $('#category-menu').hide();
  },

  render() {
    return (
      <div>
        <div className="fixed-top-menu">
          <IndexMenu />
          <CategoryMenu />
        </div>
        <div style={{paddingTop: '180px'}}>
          <div className="ui two column stackable grid">
            <div className="seven wide column">
              <div className="contact-us-box">
                <div className="ui two column grid">
                  <div className="ten wide column">
                    <div className="contact-us-box-title">
                      聯絡我們
                    </div>
                  </div>
                  <div className="column">
                  </div>
                </div>
                <div className="contact-us-box-inner">
                  <div className="contact-us-box-content">
                    如果想要可以即時和我們展開討論，請追蹤我們的粉絲團，掌握最新動態。
                  </div>
                  <a href="https://www.facebook.com/wowafrica.tw/" target="_blank">
                    <img src="/images/rb_facebook.png" style={{width: '50px', margin: '3px'}}/>
                  </a>
                  <div className="contact-us-box-content">
                    或者可以填寫聯絡表單，我們會以 Email 和您聯繫！
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div id="contactForm" className="ui large form">
                <div className="eleven wide field">
                  <label>稱謂</label>
                  <input id="nameInput" type="text"/>
                </div>
                <div className="eleven wide field">
                  <label>Email</label>
                  <input id="emailInput" type="text"/>
                </div>
                <div className="eleven wide field">
                  <label>內容</label>
                  <textarea id="contentInput"/>
                </div>
                <div className="ui error message">
                  oops! 現在有些問題，請稍候再試
                </div>
                <div className="ui grid">
                  <div className="nine wide column"/>
                  <div className="two wide column">
                    <div id="submitBtn" onClick={this._onSubBtnClick} className="ui submit button" style={{}}>
                      發送
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },

  _onSubBtnClick(e) {
    $('#contactForm').removeClass('error');
    $('#submitBtn').removeClass('button').addClass('loading button');
    let request = $.ajax({
      url: 'https://script.google.com/macros/s/AKfycbw2q99zSLMh2kKqXUT4QD5CRtCACbJL8Xun7s7Y_jvO5lzJHno/exec',
      type: 'post',
      data: {
        '稱謂': $('#nameInput')[0].value,
        'Email': $('#emailInput')[0].value,
        '內容': $('#contentInput')[0].value
      }
    })
    .done(function(data) {
      $('#submitBtn').text('完成!');
    })
    .fail(function(data) {
      $('#contactForm').addClass('error');
    })
    .always(function() {
      $('#submitBtn').removeClass('loading button').addClass('button');
    });
  }
});
