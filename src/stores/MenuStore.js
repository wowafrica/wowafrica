import MenuConfig from '../configures/MenuConfig';

class MenuStore {

  constructor(menuConfig) {
    this.menuConfig = menuConfig;
  }

  getAll() {
    return this.menuConfig;
  }

  onReceiveUpdatePath(menuName) {
    this.updatePath(menuName);
  }

  updatePath(menuName) {
    this.menuConfig.forEach((section) => {
      let currentPage = '';
      section.subPage.forEach((page) => {
        if (typeof page.url !== 'undefined' && page.url === menuName) {
          page.status = true;
          currentPage = page.showName;
        } else {
          page.status = false;
        }
      });
      section.currentPage = currentPage;
    });
  }
}

let menuStore = new MenuStore(MenuConfig);

export default menuStore;
