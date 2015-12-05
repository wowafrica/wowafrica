import AppDispatcher  from '../dispatcher/AppDispatcher';
import RouteConstants from '../constants/RouteConstants';
import NationAction   from './NationAction';
import PostListAction from './PostListAction';
import AuthorAction   from './AuthorAction';
import TumblrConfig   from '../configures/TumblrConfig';

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
          if (pathName[2] === 'posts') {
            AppDispatcher.dispatch({
              actionType: RouteConstants.ROUTE_POST_PAGE,
              postID: pathName[3]
            });
            AuthorAction.loadAuthorData();
          } else if (pathName[2] === 'category') {
            AppDispatcher.dispatch({
              actionType: RouteConstants.ROUTE_POST_LIST_PAGE,
              postID: pathName[3]
            });
            PostListAction.updatePostList(pathName[3], TumblrConfig.postList.loadAmount);
          } else if (pathName[2] === 'tag') {
            pathName[3] = decodeURIComponent(pathName[3]);
            AppDispatcher.dispatch({
              actionType: RouteConstants.ROUTE_POST_LIST_TAG_PAGE,
              tag: pathName[3]
            });
          } else if (pathName[2] === 'author') {
            pathName[3] = decodeURIComponent(pathName[3]);
            AppDispatcher.dispatch({
              actionType: RouteConstants.ROUTE_POST_LIST_AUTHOR_PAGE,
              author: pathName[3]
            });
          }
        }
        break;
      default:
        //Index Page fullpage.js hashtag
        if (typeof hash !== 'undefined') {
          AppDispatcher.dispatch({
            actionType: RouteConstants.ROUTE_HASHTAG,
            hash
          });
        }
        PostListAction.updatePostList('top', 2);
        PostListAction.updatePostList('new', 2);
        PostListAction.updateAllPostList(3);
        break;
    }
  }
}

export default new RouteAction();
