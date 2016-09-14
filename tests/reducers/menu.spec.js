
import * as MenuAction from '../../src/actions/MenuAction';
import reducer         from '../../src/reducers/menu';
import menuConfig      from '../../src/configures/MenuConfig';

describe('MenuReducer', () => {
  it('should have initialize with menuConfig', () => {

    let action = {
      type: ''
    };

    let state = reducer(undefined, action);

    expect(state).toEqual(menuConfig);
  });

  it('should update configure status and currentPage when recevice path', () => {

    let action = {
      type: MenuAction.UPDATE_MENU,
      url: '/view_africa_nations'
    };

    let state = reducer(undefined, action);

    let viewAfricaSection = state.filter(page => page.showName === '認識非洲');
    let viewSubPage = viewAfricaSection[0].subPage.filter(page => page.showName === '國家基本資料');

    expect(viewAfricaSection[0].currentPage).toEqual('國家基本資料');
    expect(viewSubPage[0].status).toEqual(true);
  });

  it('should let other page status be false when recevice path', () => {

    let action = {
      type: MenuAction.UPDATE_MENU,
      url: '/view_africa_nations'
    };

    let state = reducer(undefined, action);

    state.forEach((section) => {
      section.subPage.forEach((page) => {
        if (page.showName !== '國家基本資料') {
          expect(page.status).toEqual(false);
        }
      });
    });
  });
});
