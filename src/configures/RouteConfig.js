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
  viewPostListTag: {
    path: '/view_post_list/tag/:tag',
    method: 'get',
    page: require('../pages/ViewPostListTagPage')
  },
  viewPostListAuthor: {
    path: '/view_post_list/author/:author',
    method: 'get',
    page: require('../pages/ViewPostListAuthorPage')
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
  aboutUs: {
    path: '/about_us',
    method: 'get',
    page: require('../pages/AboutUsPage')
  },
  contactUs: {
    path: '/contact_us',
    method: 'get',
    page: require('../pages/ContactUsPage')
  },
  ugandaLetter: {
    path: '/activity/uganda_letter',
    method: 'get',
    page: require('../pages/UgandaLetter')
  }
};
