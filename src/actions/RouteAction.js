import AppDispatcher  from '../dispatcher/AppDispatcher';
import RouteConstants from '../constants/RouteConstants';
import NationAction   from './NationAction';
import AuthorAction   from './AuthorAction';

class RouteAction {

  updatePath(pathName, hash) {
    AppDispatcher.dispatch({
      actionType: RouteConstants.ROUTE_UPDATE_PATH,
      pathName,
      hash
    });

    pathName = pathName.split('\/');
    switch (pathName[1]) {
      case 'about_authors':
        AppDispatcher.dispatch({
          actionType: RouteConstants.ROUTE_AUTH_PAGE
        });
        break;
      case 'view_africa_nations':
        AppDispatcher.dispatch({
          actionType: RouteConstants.ROUTE_MAP_PAGE
        });
        NationAction.loadNationData();
        break;
      case 'view_post_list':
        if (pathName.length > 3) {
          AppDispatcher.dispatch({
            actionType: RouteConstants.ROUTE_POST_PAGE,
            postID: pathName[3]
          });
          AuthorAction.loadAuthorData();
        }
        break;
      default:
        //Index Page fullpage.js hashtage
        if (typeof hash !== 'undefined') {
          AppDispatcher.dispatch({
            actionType: RouteConstants.ROUTE_HASHTAG,
            hash
          });
        }
        break;
    }
  }
}

export default new RouteAction();
