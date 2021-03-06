import React        from 'react';
import classnames   from 'classnames';
import IndexMenu    from '../../components/IndexMenu';
import CategoryMenu from '../../components/CategoryMenu';
import Footer       from '../../components/Footer';
import MemberConfig from '../../configures/MemberConfig';

import styles from './index.css';

import {
  Divider, Image, Header, Segment
} from 'react-semantify';

let Section = ({title, imageUrl='', children, className}) => {
  return (
    <div className={classnames(className, styles.goal)}>
      <div className="ui fluid container">
        <Segment className="basic center aligned">
          {(() => {
            if (imageUrl !== '') {
              return (<Image className="centered small" src={imageUrl}/>);
            }
          })()}
          <Header className="center aligned huge title">{title}</Header>
           {children}
       </Segment>
      </div>
    </div>
  );
};

let Button = ({href, children, active=''}) => {
  return (
    <div className="four wide column">
      <a
        href={href}
        className={classnames('ui fluid huge button', styles.aboutButton, {[styles.hover]: active})}
        style={{borderRadius: '0px'}}>
        {children}
      </a>
    </div>
  );
};

let Buttons = ({active}) => {
  let buttonList = [
    {
      'href': '#header',
      'value': '關於 wowAfrica',
      'active': false
    },
    {
      'href': '#story',
      'value': '我們的故事與團隊',
      'active': false
    },
    {
      'href': '#partner',
      'value': '合作夥伴',
      'active': false
    }
  ];
  buttonList[active]['active'] = true;
  return (
    <div className="ui five column stackable grid">
      <div className="two wide column"/>
        {buttonList.map(entry => {
          return (<Button href={entry.href} active={entry.active}>{entry.value}</Button>);
        })}
      <div className="two wide column"/>
    </div>
  );
};

let HeaderSection = () => {
  return (
    <div className={styles.headerSection} id="header">
      <div className={classnames('ui container', styles.index)}>
        <div className="ui three column grid">
          <div className="five wide column"></div>
          <div className="six wide column">
            <Image className="centered medium" src="/images/website-color.png"/>
            <Divider className={styles.headerDivider} />
            <Header className={classnames('center aligned huge', styles.title)}>台灣最大的非洲平台網站</Header>
          </div>
          <div className="five wide column"></div>
        </div>
        <div className={styles.headerButton} >
          <Buttons active={0} />
        </div>
      </div>
      <Section imageUrl="/images/telescope_trans.png" title="願景">
        <br/>
        <p>我們的目標是，打造出台灣最大的「非洲資訊平台」
          <br/>作為台灣與非洲的橋樑。
          <br/>翻轉台灣對非洲的刻板印象，
        </p>
        <p>增進對非洲大陸的新知，提供台灣人認識非洲的最佳管道;
          <br/>同時藉由直接貿易，結合社會議題進行商品販售。
        </p>
        <p>我們期待在不久的將來能夠看到越來越多台灣與非洲大陸在人才、
          <br/>產品、技術有更多的交流。
        </p>
      </Section>
      <Section imageUrl="/images/question_mark.png" title="為什麼要認識非洲?">
        <br/>
        <p>我們常說的地球村與國際觀，其實往往僅侷限於歐美日韓與中國，
          <br/>少有往世界其他地方認識的機會。
          <br/>非洲一直被視為戰亂、貧窮、落後的集合體，但真的是這樣嗎?
        </p>
        <p>肯亞擁有世界最成功的手機行動支付系統
          <br/>盧安達走出1994年種族大屠殺的傷痛，實現了轉型正義，
          <br/>亦為全世界第一個禁用塑膠袋的國家
          <br/>奈及利亞除了是非洲最大石油出口國之外以及人口紅利的經濟市
          <br/>場，其電影產業「奈萊塢」產量為世界第二。
          <br/>衣索比亞擺脫過往飢荒的形象，先進的機場以及輕軌系統，
          <br/>並立志成為非洲的要角
        </p>
        <p>若我們只是追著「先進」國家的腳步後頭追，
          <br/>那麼將永遠走不出自己的路。
          <br/>非洲一方面疾病、戰爭、衝突頻繁，
          <br/>另方面也有許多我們從未想過的面向值得我們
          <br/>取經與學習。讓我們來一起認識非洲吧!
        </p>
      </Section>
    </div>
  );
};

let ShowFunc = () => {
  return (
    <div className="ui seven column stackable grid">
      <div className="four wide column"/>
      <div className="two wide column">
        <div className="content">行動</div>
        <Image className="centered small" src="/images/action_trans.png"/>
      </div>
      <div className="one wide column">
        <div className="content">=</div>
      </div>
      <div className="two wide column">
        <div className="content">資訊</div>
        <Image className="centered small" src="/images/information_trans.png"/>
      </div>
      <div className="one wide column">
        <div className="content">+</div>
      </div>
      <div className="two wide column">
        <div className="content">體驗</div>
        <Image className="centered small" src="/images/experience_trans.png"/>
      </div>
      <div className="four wide column"/>
    </div>
  );
};

let Member = ({name, title}) => {
  return (
    <div className={styles.member}>
      <div>{name}</div>
      <div>{title}</div>
    </div>
  );
};

let ShowTeam = () => {
  console.log(MemberConfig);
  return (
    <div className="ui four column stackable grid">
      <div className="three wide column"/>
      <div className="five wide column">
        {MemberConfig.map((entry, index) => {
          if (index < 5) {
            return (<Member name={entry.name} title={entry.title}/>);
          }
        })}
      </div>
      <div className="five wide column">
        {MemberConfig.map((entry, index) => {
          if (index >= 5) {
            return (<Member name={entry.name} title={entry.title}/>);
          }
        })}
      </div>
      <div className="three wide column"/>
    </div>
  );
};

let StorySection = () => {
  return (
    <div className={styles.storySection} id="story">
      <div className={styles.storyButton}>
        <div className="ui container index">
          <Buttons active={1}/>
        </div>
      </div>
      <Section title="大膽出走,看見非洲">
        <br/>
        <br/>
        <p>我們是一群熱愛非洲的台灣年輕人。</p>
        <p>2014年我們各自探訪了10個非洲國家，</p>
        <p>進行2~3個月的研究旅行。</p>
        <p>旅程過程中我們觀察到非洲大陸上有著許多台灣所忽視的改變以及機會。</p>
        <p>回臺灣後，我們努力構築一個非洲資訊整合平台。</p>
      <p>讓台灣認識長年忽視的非洲大陸，增加國際視野，</p>
        <p>也希望看到越來越多台灣與非洲之間的交流產生。</p>
      </Section>
      <Section className={styles.wowFunc} title="wowAfrica方程式：">
        <br/>
        <ShowFunc/>
        <br/>
        <p>我們相信資訊的傳遞不只是冷冰冰的文字，</p>
        <p>而是透過實體的交流與體驗，以輕鬆、多元、有趣的方式</p>
        <p>才能達到深刻的知識傳遞wowAfrica邀請去過非洲的台灣人以及在台灣的非</p>
        <p>洲人來到活動現場分享他們的非洲經驗以及觀察，</p>
        <p>並以換桌會議的形式深入探討我們也舉辦展覽、</p>
        <p>讓台灣認識長年忽視的非洲大陸，增加國際視野，</p>
        <p>非洲美食日等活動讓台灣認識非洲。</p>
        <div className={styles.videoContainer}>
          <div className={styles.video}>
            <iframe src="https://www.youtube.com/embed/o1_-2SDwAXU" frameborder="0" allowfullscreen />
          </div>
        </div>
      </Section>
      <Section title="團隊成員">
        <ShowTeam/>
      </Section>
    </div>
  );
};

let PartnerSection = () => {
  return (
    <div className="partner-section" id="partner">
      <div className={styles.partnerButton}>
        <div className="ui container index">
          <Buttons active={2}/>
        </div>
      </div>
      <div className="ui six column stackable grid">
        <div className="two wide column"/>
        <div className="four wide column">
          <a className="ui centered image" href="//homewardpublish.wordpress.com/" target="_blank">
            <img src="/images/cooperator_A_homeward.png"/>
          </a>
        </div>
        <div className="four wide column">
          <a className="ui centered image" href="//npost.tw/archives/author/wowafrica" target="_blank">
            <img src="/images/cooperator_B_npost.png" />
          </a>
        </div>
        <div className="four wide column">
          <a className="ui centered image" href="//www.africa.org.tw/" target="_blank">
            <img src="/images/cooperator_C_ATEF_.png" />
          </a>
        </div>
        <div className="two wide column"/>
        <div className="four wide column"/>
        <div className="four wide column">
          <a className="ui centered image" href="//www.seinsights.asia/" target="_blank">
            <img src="/images/cooperator_D_sei.png" />
          </a>
        </div>
        <div className="four wide column">
          <a className="ui centered image" href="//buzzorange.com/author/wowafrica/" target="_blank">
            <img src="/images/cooperator_E_buzzorange.png" />
          </a>
        </div>
        <div className="four wide column"/>
      </div>
    </div>
  );
};

export default React.createClass({
  componentDidMount() {
    $('#category-menu').hide();
    window.scroll(0, 0);
  },

  render() {
    return (
      <div>
        <div className="fixed-top-menu">
          <IndexMenu />
          <CategoryMenu />
        </div>
        <div className="container-content">
          <HeaderSection />
          <StorySection />
          <PartnerSection />
        </div>
        <div id="footer-divider" style={{height: '50px'}} />
        <Footer/>
      </div>
    );
  }
});
