import React       from 'react';
import classnames  from 'classnames';

import styles from './index.css';

import {
  Menu, Item, Text
} from 'react-semantify';

let Brief = () => (
  <div className={classnames(styles.footerBox, styles.footerBoxInfo)}>
    wowAfrica 阿非卡為台灣最完整的非洲資訊平台，我們的願景是搭起台灣與非洲的橋樑，藉由資訊、新聞、整合各方資源及實體活動等推廣方式，豐富我們對於非洲的認識及想像，達成進一步的交流與發展。
  </div>
);

let AboutUrl = ({onFooterClick}) => (
  <Menu className="vertical secondary">
    <Item style={{color: 'white', fontSize: '18px'}} type="link" href={'/about_us'} onClick={onFooterClick}>
        <Text style={{wordWrap: 'break-word'}}>關於 wowAfrica</Text>
    </Item>
    <Item style={{color: 'white', fontSize: '18px'}} type="link" href={'/about_authors'} onClick={onFooterClick}>
        <Text>成員介紹</Text>
    </Item>
    <Item style={{color: 'white', fontSize: '18px'}} type="link" href={'/contact_us'} onClick={onFooterClick}>
        <Text>聯絡我們</Text>
    </Item>
  </Menu>
);

let SocialLink = () => (
  <div className={styles.footerIconGroups}>
    <a href="mailto:lighteningdark2014@gmail.com" target="_blank">
      <div className={classnames(styles.footerIcon, styles.footerIconMail)}/>
    </a>
    <a href="http://wowafrica.tumblr.com/" target="_blank">
      <div className={classnames(styles.footerIcon, styles.footerIconTumblr)}/>
    </a>
    <a href="https://www.facebook.com/wowafrica.tw/" target="_blank">
      <div className={classnames(styles.footerIcon, styles.footerIconFacebook)}/>
    </a>
  </div>
);

let Subscribe = React.createClass({

  render() {
    return (
      <div className={styles.footerBox}>
        最新資訊及活動通知
        <div id="emailForm" className="ui form" style={{paddingTop: '8px'}}>
          <div className="field">
            <input id="emailInput" type="email" placeholder="Email"/>
          </div>
          <div className="ui error message" style={{fontSize: '14px'}}>
            oops! 現在有些問題，請稍候再試
          </div>
          <div className={classnames('ui submit button', styles.footerEmailBtn)} onClick={this._onSubBtnClick}>
            訂閱
          </div>
        </div>
      </div>
    );
  },

  _onSubBtnClick(e) {
    $('#emailForm').removeClass('error');
    $(`.${styles.footerEmailBtn}`).removeClass('button').addClass('loading button');
    let request = $.ajax({
      url: 'https://script.google.com/macros/s/AKfycbzuOLvCRul3ZAzNl3kp9nPihUQ_iowpjB-Uf1nwuvhY9Q5lODI/exec',
      type: 'post',
      data: {'email': $('#emailInput')[0].value}
    })
    .done(function(data) {
      $(`.${styles.footerEmailBtn}`).text('完成!');
    })
    .fail(function(data) {
      $('#emailForm').addClass('error');
    })
    .always(function() {
      $(`.${styles.footerEmailBtn}`).removeClass('loading button').addClass('button');
    });
  }
});

let Footer = ({onFooterClick}) => (
  <div className={styles.footer}>
    <div className="">
      <div className="ui stackable grid">
        <div className="one wide column" />
        <div className="six wide centered column">
          <Brief/>
        </div>
        <div className="four wide column" style={{color: 'white', backgroundColor: '#BF3333'}}>
          <div className={styles.footerBox}>
            <AboutUrl onFooterClick={onFooterClick}/>
            <SocialLink/>
          </div>
        </div>
        <div className="four wide column">
          <Subscribe/>
        </div>
        <div className="one wide column" />
      </div>
    </div>
  </div>
);

export default Footer;
