export default {
  index: {
    path: '/',
    method: 'get',
    page: require('../pages/IndexPage')
  },
  viewAfricaNations: {
    path: '/view_africa_nations',
    method: 'get',
    page: require('../pages/ViewAfricaNationsPage')
  },
  viewAfricaNationsPost: {
    path: '/view_africa_nations/posts/:post',
    method: 'get',
    page: require('../pages/ViewAfricaNationsPage')
  },
  viewAfricaPeople: {
    path: '/view_africa_people',
    method: 'get',
    page: require('../pages/ViewAfricaPeoplePage')
  },
  viewAfricaPeoplePost: {
    path: '/view_africa_people/posts/:post',
    method: 'get',
    page: require('../pages/IndexPage')
  },
  viewPostList: {
    path: '/view_post_list',
    method: 'get',
    page: require('../pages/PostListPage')
  },
  aboutAuthors: {
    path: '/about_authors',
    method: 'get',
    page: require('../pages/AboutAuthorsPage')
  }
};