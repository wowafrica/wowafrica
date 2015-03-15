"use strict";

export default {
  index: {
    showName: '首頁',
    path: '/',
    method: 'get',
    page: require('../pages/IndexPage'),
    subPage: ['view_africa']
  },
  view_africa: {
    showName: '認識非洲',
    path: '/view_africa',
    method: 'get',
    page: require('../pages/ViewAfricaPage'),
    subPage: ['view_africa_nations', 'view_africa_people']
  },
  view_africa_nations: {
    showName: '國家基本資料',
    path: '/view_africa/nations',
    method: 'get',
    page: require('../pages/IndexPage'),
    subPage: []
  },
  view_africa_nations_post: {
    path: '/view_africa/nations/posts/:post',
    method: 'get',
    page: require('../pages/IndexPage'),
    subPage: []
  },
  view_africa_people: {
    showName: '非洲人物誌',
    path: '/view_africa/people',
    method: 'get',
    page: require('../pages/IndexPage'),
    subPage: []
  },
  view_africa_people_post: {
    path: '/view_africa/people/posts/:post',
    method: 'get',
    page: require('../pages/IndexPage'),
    subPage: []
  },
  view_authors: {
    path: '/about_authors',
    method: 'get',
    page: require('../pages/AboutAuthorsPage'),
    subPage: []
  }
};
