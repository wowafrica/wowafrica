
import * as AuthorAction from '../actions/AuthorAction';
import TumblrConfig      from '../configures/TumblrConfig';

function parseAuthorData(data) {

  let {picWidth} = TumblrConfig.author;

  let authors = data.posts.map((post) => {
    let contents = post.caption.split('\n\n');
    let target = post.photos[0].alt_sizes.filter(photo => photo.width < picWidth);

    return {
      id: post.id,
      name: contents[0],
      from: contents[1],
      description: contents[2],
      photoUrl: target.length ? target[0].url : ''
    };
  });

  return authors;
}

export default (state = {
  isFetching: false,
  authors: []
}, action) => {
  switch (action.type) {
    case AuthorAction.REQUEST_AUTHOR:
      return Object.assign({}, state, {
        isFetching: true
      });
    case AuthorAction.RECEIVE_AUTHOR:
      return Object.assign({}, state, {
        isFetching: false,
        authors: parseAuthorData(action.authors)
      });
    default:
      return state;
  }
};
