import React  from 'react';
import IndexMenu    from '../components/IndexMenu';
import CategoryMenu from '../components/CategoryMenu';
import Footer from '../components/Footer';

import {
  Divider, Image, Header, Segment, Button
} from 'react-semantify';

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
      <div className="ui container">
        <div className="ui three column grid">
          <div className="five wide column"></div>
          <div className="six wide column">
            <Image className="centered medium" src="/images/website-color.png"/>
            <Divider className="header-divider" />
            <Header className="center aligned large title">台灣最大的非洲平台網站</Header>
          </div>
          <div className="five wide column"></div>
        </div>
        <div className="header-button" >
          <Buttons />
        </div>
      </div>
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
