
import MenuConfig from '../configures/MenuConfig';

import {UPDATE_MENU} from '../actions/MenuAction';

function section(state, action) {
  let currentPage = '';

  let section = {
    ...state,
    subPage: state.subPage.map(page => {
      if (page.url === action.url) {
        currentPage = page.showName;
        return {
          ...page,
          status: true
        };
      } else {
        return {
          ...page,
          status: false
        };
      }
    })
  };
  section.currentPage = currentPage;

  return section;
}

export default (state = MenuConfig, action) => {
  if (action.type === UPDATE_MENU) {
    return state.map(s => section(s, action));
  }
  return state;
};
