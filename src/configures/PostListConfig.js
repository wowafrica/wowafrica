import PostConfig  from '../configures/PostConfig';

export default {
  listContainer: {
    'news':     {},
    'people':   {},
    'nature':   {},
    'innovation': {},
    'society':  {},
    'history':  {},
    'art':    {},
    'travel':   {},
    'newPosts': {}
  },
  postContainer: {
    id: '',
    title: '',
    image: '',
    category: '',
    ...PostConfig.settingContainer
  },
  categories: [
    'news',
    'people',
    'nature',
    'innovation',
    'society',
    'history',
    'art',
    'travel'
  ],
  categoryMap: {
    'news':       '時事新聞',
    'people':     '人物專欄',
    'nature':     '自然保育',
    'innovation': '創新應用',
    'society':    '社會人文',
    'history':    '歷史故事',
    'art':        '藝文介紹',
    'travel':     '旅行專欄'
  },
  categoryMapZh: {
    '時事新聞': 'news',
    '人物專欄': 'people',
    '自然保育': 'nature',
    '創新應用': 'innovation',
    '社會人文': 'society',
    '歷史故事': 'history',
    '藝文介紹': 'art',
    '旅行專欄': 'travel'
  },
  tagMap: {
    'top': '置頂文章'
  }
};
