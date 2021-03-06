import AuthorsData     from '../AuthorsData';
import AuthorsTestData from '../AuthorsTestData';

describe('AuthorsStore', () => {
  it('should parse Authors data from tumblr into this.authors', () => {
    let authorsStore = require('../../src/stores/AuthorsStore').default;

    authorsStore.parseAuthorData(null, AuthorsData);

    expect(authorsStore.getAll()).toEqual(AuthorsTestData);
  });
});
