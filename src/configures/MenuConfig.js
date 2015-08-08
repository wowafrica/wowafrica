export default [
  {
    showName: '關於我們',
    currentPage: '',
    subPage: [{
      url: '/1',
      showName: '阿非卡緣起',
      subPage: [],
      status: false
    }, {
      url: '/about_authors',
      showName: '阿非卡成員',
      subPage: [],
      status: false
    }, {
      url: '/1',
      showName: '阿非卡年誌',
      subPage: [],
      status: false
    }
    ]
  }, {
    showName: '認識非洲',
    currentPage: '',
    subPage: [{
        url: '/view_africa_nations',
        showName: '國家基本資料',
        subPage: [],
        status: false
      }, {
        url: '/view_africa_people',
        showName: '非洲大人物',
        subPage: [],
        status: false
      }
    ]
  }, {
    showName: '非洲文章',
    currentPage: '',
    subPage: [{
        url: '/view_post_list',
        showName: '文章列表',
        subPage: [],
        status: false
      }
    ]
  }
];