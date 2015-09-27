import PostConfig  from '../configures/PostConfig';

export default {
  listContainer: {
    'news':     {},
    'people':   {},
    'nature':   {},
    'industry': {},
    'science':  {},
    'history':  {},
    'medic':    {},
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
    'industry',
    'science',
    'history',
    'medic',
    'travel'
  ],
  categoryMap: {
    'news':     '時事新聞',
    'people':   '人物專欄',
    'nature':   '自然保育',
    'industry': '產業動態',
    'science':  '科普人文',
    'history':  '歷史故事',
    'medic':    '醫療知識',
    'travel':   '觀光旅行'
  },
  categoryMapZh: {
    '時事新聞': 'news',
    '人物專欄': 'people',
    '自然保育': 'nature',
    '產業動態': 'industry',
    '科普人文': 'science',
    '歷史故事': 'history',
    '醫療知識': 'medic',
    '觀光旅行': 'travel'
  },
  tagMap: {
    'top': '置頂文章'
  }
};
