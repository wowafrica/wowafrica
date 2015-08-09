
jest.dontMock('../../../src/stores/MenuStore');
jest.dontMock('../../../src/configures/MenuConfig');

describe('MenuStore', () => {
  it('should have initialize menuConfig', () => {
    let menuStore = require('../../../src/stores/MenuStore');
    let menuConfig = require('../../../src/configures/MenuConfig');

    expect(menuStore.getAll()).toEqual(menuConfig);
  });

  it('should update configure status and currentPage when recevice path', () => {
    let menuStore = require('../../../src/stores/MenuStore');

    menuStore.onReceiveUpdatePath('/view_africa_nations');

    let viewAfricaSection = menuStore.getAll().filter(page => page.showName === '認識非洲');
    let viewSubPage = viewAfricaSection[0].subPage.filter(page => page.showName === '國家基本資料');

    expect(viewAfricaSection[0].currentPage).toEqual('國家基本資料');
    expect(viewSubPage[0].status).toEqual(true);
  });

  it('should let other page status be false when recevice path', () => {
    let menuStore = require('../../../src/stores/MenuStore');

    menuStore.onReceiveUpdatePath('/view_africa_nations');

    menuStore.getAll().forEach((section) => {
      section.subPage.forEach((page) => {
        if (page.showName !== '國家基本資料') {
          expect(page.status).toEqual(false);
        }
      });
    });
  });
});
