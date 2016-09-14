
import AppDispatcher     from '../dispatcher/AppDispatcher';
import PostListConfig    from '../configures/PostListConfig';
import PostListConstants from '../constants/PostListConstants';

class PostListAction {

  updatePostList(category, amount) {
    AppDispatcher.dispatch({
      actionType: PostListConstants.POST_LIST_UPDATE,
      category,
      amount
    });
  }

  updateAllPostList(amount) {
    PostListConfig.categories.forEach((category) => {
      this.updatePostList(category, amount);
    });
  }
}

export default new PostListAction();
