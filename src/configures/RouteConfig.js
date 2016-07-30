export default {
  index: {
    path: '/',
    method: 'get',
    page: require('../pages/IndexPage').default
  },
  viewAfricaNations: {
    path: '/view_africa_nations',
    method: 'get',
    page: require('../pages/ViewAfricaNationsPage').default
  },
  viewAfricaNationsPost: {
    path: '/view_africa_nations/posts/:post',
    method: 'get',
    page: require('../pages/ViewAfricaNationsPage').default
  },
  viewPostList: {
    path: '/view_post_list/category/:category',
    method: 'get',
    page: require('../pages/ViewPostListPage').default
  },
  viewPostListTag: {
    path: '/view_post_list/tag/:tag',
    method: 'get',
    page: require('../pages/ViewPostListTagPage').default
  },
  viewPostListAuthor: {
    path: '/view_post_list/author/:author',
    method: 'get',
    page: require('../pages/ViewPostListAuthorPage').default
  },
  viewPost: {
    path: '/view_post_list/posts/:post',
    method: 'get',
    page: require('../pages/ViewPostPage').default
  },
  aboutAuthors: {
    path: '/about_authors',
    method: 'get',
    page: require('../pages/AboutAuthorsPage').default
  },
  aboutUs: {
    path: '/about_us',
    method: 'get',
    page: require('../pages/AboutUsPage').default
  },
  contactUs: {
    path: '/contact_us',
    method: 'get',
    page: require('../pages/ContactUsPage').default
  },
  ugandaLetter: {
    path: '/activity/uganda_letter',
    method: 'get',
    page: require('../pages/UgandaLetter').default
  },
  activities: {
    path: '/activities',
    method: 'get',
    page: require('../pages/ActivityListPage').default
  },
  viewActivity: {
    path: '/activities/:activity',
    method: 'get',
    page: require('../pages/ViewActivityPage').default
  }
};
