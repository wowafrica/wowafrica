export default [
  {
    name: 'about',
    showName: '關於我們',
    currentPage: '',
    subPage: [/*{
      url: '/1',
      showName: '團隊緣起',
      subPage: [],
      status: false
    },*/
      {
        url: '/about_us',
        showName: '團隊介紹',
        subPage: [],
        status: false
      },
      {
        url: '/about_authors',
        showName: '寫手介紹',
        subPage: [],
        status: false
      }
    ]
  }, {
    name: 'knowing',
    showName: '認識非洲',
    currentPage: '',
    subPage: [{
      url: '/view_africa_nations',
      showName: '國家基本資料',
      subPage: [],
      status: false
    }/*,
    {
      url: '/view_africa_people',
      showName: '非洲大人物',
      subPage: [],
      status: false
    }*/
    ]
  }, {
    name: 'article',
    showName: '文章分類',
    currentPage: '',
    subPage: [{
      url: '/view_post_list/category/news',
      showName: '時事新聞',
      subPage: [],
      status: false
    }, {
      url: '/view_post_list/category/people',
      showName: '人物專欄',
      subPage: [],
      status: false
    }, {
      url: '/view_post_list/category/nature',
      showName: '自然保育',
      subPage: [],
      status: false
    }, {
      url: '/view_post_list/category/innovation',
      showName: '創新應用',
      subPage: [],
      status: false
    }, {
      url: '/view_post_list/category/society',
      showName: '社會人文',
      subPage: [],
      status: false
    }, {
      url: '/view_post_list/category/history',
      showName: '歷史故事',
      subPage: [],
      status: false
    }, {
      url: '/view_post_list/category/art',
      showName: '藝文介紹',
      subPage: [],
      status: false
    }, {
      url: '/view_post_list/category/travel',
      showName: '旅行專欄',
      subPage: [],
      status: false
    }
    ]
  }
];
