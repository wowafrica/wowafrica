import PostData     from '../PostData';
import PostTestData from '../PostTestData';

describe('PostStore', () => {
  it('should parse post data from tumblr into this.post', () => {
    let postStore = require('../../src/stores/PostStore');

    postStore.parsePostData(null, PostData);

    expect(postStore.getPost()).toEqual(PostTestData);
  });
});
