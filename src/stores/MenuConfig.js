"use strict";

export default [
  {
    showName: '關於我們',
    currentPage: '',
    subPage: [{
      url: '/about_authors',
      showName: '寫手介紹',
      subPage: [],
      status: false
    }]
  }, {
    showName: '認識非洲大陸',
    currentPage: '',
    subPage: [{
        url: '/view_africa_nations',
        showName: '國家基本資料',
        subPage: [],
        status: false
      }, {
        url: '/view_africa_people',
        showName: '非洲人物誌',
        subPage: [],
        status: false
      }
    ]
  }
];
