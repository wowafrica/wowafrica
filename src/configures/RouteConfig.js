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
    path: '/view_post_list/category/:category',
    method: 'get',
    page: require('../pages/ViewPostListPage')
  },
  viewPost: {
    path: '/view_post_list/posts/:post',
    method: 'get',
    page: require('../pages/ViewPostPage')
  },
  aboutAuthors: {
    path: '/about_authors',
    method: 'get',
    page: require('../pages/AboutAuthorsPage')
  },
  contactUs: {
    path: '/contact_us',
    method: 'get',
    page: require('../pages/ContactUsPage')
  }
};
