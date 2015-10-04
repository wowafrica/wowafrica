WOW Africa Website
=============
[![Travis branch][travis-ci-img]][travis-ci-url] [![Coveralls][coveralls-img]][coveralls-url] [![Dependency Status][david-dm-image]][david-dm-url]

## Structure

- client
  + scripts
  + styles
- src
  + actions
  + components
  + constants
  + dispatcher
  + pages
  + stores

## Development
[![devDependency Status][david-dm-dev-image]][david-dm-dev-url]

`npm i`

`npm start`

and then open `http://localhost:3000/`

## Run Test and Lint

- `npm i`
- `npm test`

## Clean Environment

- `npm run clean` only clean build result.
- `npm run clean-all` clean all dependencies and modules.

## Contribute

1. Fork it.
2. Switch to the `develop` branch `git checkout develop`
3. Create your feature-branch `git checkout -b your-new-feature-branch`
4. Commit your change `git commit -am 'Add new feature'`
5. Push to the branch `git push origin your-new-feature-branch`
6. Create new Pull Request with `develop` branch

## Change Log

#### 2015/04/23 v0.3.0
- Add PostListPage
- Update CNAME to wowafrica
- Update Semantic-UI to v1.12.3

#### 2015/04/23 v0.2.0
- Add AuthorPage
- Add ESLint
- Update Semantic-UI to v1.11.8
- Change the menu style

#### 2015/04/04 v0.1.0
- Add deploy process with travis-ci.
- Add CNAME `exploreafrica`

#### 2015/02/27 v0.0.1
- init
- Using gulp to build simple webserver and livereload

## License

The MIT License (MIT)

Copyright (c) 2015 Lee  < jessy1092@gmail.com >

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[travis-ci-img]: https://img.shields.io/travis/wowafrica/wowafrica/develop.svg?style=flat-square
[travis-ci-url]: https://travis-ci.org/wowafrica/wowafrica

[david-dm-image]: https://img.shields.io/david/wowafrica/wowafrica.svg?style=flat-square
[david-dm-url]: https://david-dm.org/wowafrica/wowafrica
[david-dm-dev-image]: https://img.shields.io/david/dev/wowafrica/wowafrica.svg?style=flat-square
[david-dm-dev-url]: https://david-dm.org/wowafrica/wowafrica#info=devDependencies

[coveralls-img]: https://img.shields.io/coveralls/wowafrica/wowafrica.svg?style=flat-square
[coveralls-url]: https://coveralls.io/github/wowafrica/wowafrica
