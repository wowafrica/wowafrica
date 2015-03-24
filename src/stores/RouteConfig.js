"use strict";

export default {
  index: {
    path: '/',
    method: 'get',
    page: require('../pages/IndexPage'),
  },
  view_africa_nations: {
    path: '/view_africa_nations',
    method: 'get',
    page: require('../pages/ViewAfricaNationsPage'),
  },
  view_africa_nations_post: {
    path: '/view_africa_nations/posts/:post',
    method: 'get',
    page: require('../pages/IndexPage'),
  },
  view_africa_people: {
    path: '/view_africa_people',
    method: 'get',
    page: require('../pages/ViewAfricaPeoplePage'),
  },
  view_africa_people_post: {
    path: '/view_africa_people/posts/:post',
    method: 'get',
    page: require('../pages/IndexPage'),
  },
  about_authors: {
    path: '/about_authors',
    method: 'get',
    page: require('../pages/AboutAuthorsPage'),
  }
};
