import React  from 'react';
import IndexMenu    from '../components/IndexMenu';
import CategoryMenu from '../components/CategoryMenu';
import Footer from '../components/Footer';

import {
  Divider, Image, Header, Segment, Button
} from 'react-semantify';

let Section = ({title, imageUrl, children}) => {
  return (
    <div className="ui fluid container goal">
      <Segment className="basic center aligned">
        <Image className="centered small" src={imageUrl}/>
        <Header className="center aligned huge title">{title}</Header>
         {children}
     </Segment>
    </div>
  );
};

let Buttons = () => {
  return (
    <div className="ui five column stackable grid">
      <div className="two wide column"/>
      {
        ['關於 wowAfrica', '我們的故事與團隊', '合作夥伴'].map((value) => {
          return (
            <div className="four wide column">
              <Button
                className="fluid about-button huge"
                style={{
                  borderRadius: '0px'}}
                >
                {value}
              </Button>
          </div>
          );
        })
      }
      <div className="two wide column"/>
    </div>
  );
};

let HeaderSection = () => {
  return (
    <div className="header-section">
      <div className="ui container index">
        <div className="ui three column grid">
          <div className="five wide column"></div>
          <div className="six wide column">
            <Image className="centered medium" src="/images/website-color.png"/>
            <Divider className="header-divider" />
            <Header className="center aligned huge title">台灣最大的非洲平台網站</Header>
          </div>
          <div className="five wide column"></div>
        </div>
        <div className="header-button" >
          <Buttons />
        </div>
      </div>
      <Section imageUrl="/images/telescope_trans.png" title="願景">
        <p>我們的目標是,打造出台灣最大的「非洲資訊平台」
          <br/>作為台灣與非洲的橋樑。
          <br/>翻轉台灣對非洲的刻板印象,
        </p>
        <p>增進對非洲大陸的新知,提供台灣人認識非洲的最佳管道;
          <br/>同時藉由直接貿易,結合社會議題進行商品販售。
        </p>
        <p>我們期待在不久的將來能夠看到越來越多台灣與非洲大陸在人才、
          <br/>產品、技術有更多的交流。
        </p>
      </Section>
      <Section imageUrl="/images/question_mark.png" title="為什麼要認識非洲?">
        <p>我們常說的地球村與國際觀,其實往往僅侷限於歐美日韓與中國,
          <br/>少有往世界其他地方認識的機會。
          <br/>非洲一直被視為戰亂、貧窮、落後的集合體,但真的是這樣嗎?
        </p>
        <p>肯亞擁有世界最成功的手機行動支付系統
          <br/>盧安達走出1994年種族大屠殺的傷痛,實現了轉型正義,
          <br/>亦為全世界第一個禁用塑膠袋的國家
          <br/>奈及利亞除了是非洲最大石油出口國之外以及人口紅利的經濟市
          <br/>場,其電影產業「奈萊塢」產量為世界第二。
          <br/>衣索比亞擺脫過往飢荒的形象,先進的機場以及輕軌系統,
          <br/>並立志成為非洲的要角
        </p>
        <p>若我們只是追著「先進」國家的腳步後頭追,
          <br/>那麼將永遠走不出自己的路。
          <br/>非洲一方面疾病
          <br/>、戰爭、衝突頻繁,另方面也有許多我們從未想過的面向值得我們
          <br/>取經與學習。讓我們來一起認識非洲吧!
        </p>
      </Section>
    </div>
  );
};

export default () => {
  return (
    <div>
      <div className="fixed-top-menu">
        <IndexMenu />
        <CategoryMenu />
      </div>
      <div className="container-content">
        <HeaderSection />
      </div>
      <div id="footer-divider" style={{height: '50px'}} />
      <Footer/>
    </div>
  );
};
