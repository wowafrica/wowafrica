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
    'travel':   {}
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
  ]
};
