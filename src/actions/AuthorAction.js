import AppDispatcher   from '../dispatcher/AppDispatcher';
import AuthorConstants from '../constants/AuthorConstants';

class AuthorAction {

  loadAuthorData() {
    AppDispatcher.dispatch({
      actionType: AuthorConstants.AUTHOR_LOAD_DATA
    });
  }
}

export default new AuthorAction();
