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

  getArticleSubPages() {
    for (let page of this.menuConfig) {
      if (page.showName == '非洲文章') {
        return page.subPage;
      }
    };
  }

  getIndexAnchors() {
    let anchors = [];
    this.menuConfig.forEach((section) => {
      if (section.showName == '非洲文章') {
        section.subPage.forEach((page) => {
          anchors.push(page.url.substring(2));
        });
      }
    });
    return anchors;
  }
}

let menuStore = new MenuStore(MenuConfig);

export default menuStore;
