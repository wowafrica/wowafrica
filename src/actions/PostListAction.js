import AppDispatcher     from '../dispatcher/AppDispatcher';
import PostListConstants from '../constants/PostListConstants';

class PostListAction {

  updatePostList(category, amount) {
    AppDispatcher.dispatch({
      actionType: PostListConstants.POST_LIST_UPDATE,
      category,
      amount
    });
  }
}

export default new PostListAction();
