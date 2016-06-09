import PostData            from '../PostData';
import PostTestData        from '../PostTestData';
import PostSettingData     from '../PostSettingData';
import PostSettingTestData from '../PostSettingTestData';

describe('PostStore', () => {
  it('should parse post data and use default setting without setting in post', () => {
    let postStore = require('../../src/stores/PostStore').default;

    postStore.parsePostData(null, PostData);

    expect(postStore.getPost()).toEqual(PostTestData);
  });

  it('should parse post data and setting config from post', () => {
    let postStore = require('../../src/stores/PostStore').default;

    postStore.parsePostData(null, PostSettingData);

    expect(postStore.getPost()).toEqual(PostSettingTestData);
  });
});
