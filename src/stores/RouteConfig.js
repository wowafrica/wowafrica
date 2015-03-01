"use strict";

export default {
  index: {
    showName: '首頁',
    path: '/',
    method: 'get',
    page: require('../pages/IndexPage'),
    subPage: ['view_afica']
  },
  view_afica: {
    showName: '認識非洲',
    path: '/view_afica',
    method: 'get',
    page: require('../pages/ViewAfricaPage'),
    subPage: ['view_afica_nations', 'view_afica_people']
  },
  view_afica_nations: {
    showName: '國家基本資料',
    path: '/view_afica/nations',
    method: 'get',
    page: require('../pages/IndexPage'),
    subPage: []
  },
  view_afica_nations_post: {
    path: 'view_afica/nations/posts/:post',
    method: 'get',
    page: require('../pages/IndexPage'),
    subPage: []
  },
  view_afica_people: {
    showName: '非洲人物誌',
    path: '/view_afica/people',
    method: 'get',
    page: require('../pages/IndexPage'),
    subPage: []
  },
  view_afica_people_post: {
    path: 'view_afica/people/posts/:post',
    method: 'get',
    page: require('../pages/IndexPage'),
    subPage: []
  }
};
