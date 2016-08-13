
import * as PostAction from '../actions/PostAction';
import TumblrConfig    from '../configures/TumblrConfig';
import PostListConfig  from '../configures/PostListConfig';
import PostConfig      from '../configures/PostConfig';

function parsePostData(data) {
  let image = parsePostImage(data.posts[0].body);
  let {settingResult, body} = parsePostSetting(data.posts[0].body);
  removeTopTag(data.posts[0].tags);
  return {
    ...data.posts[0],
    body,
    image,
    ...settingResult
  };
}

function parsePostImage(body) {
  let imageSrc = body.match(/<img [^>]*\/>/g);

  if (imageSrc) {
    let imageSrcList = imageSrc[0].match(/http[^\"\'\s]*/);
    if (imageSrcList) {
      imageSrc = imageSrcList[0];
    } else {
      imageSrc = 'https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xpa1/t31.0-8/11154796_779010435550566_7018350735656129504_o.jpg';
    }
  } else {
    imageSrc = 'https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xpa1/t31.0-8/11154796_779010435550566_7018350735656129504_o.jpg';
  }
  return imageSrc;
}

function parsePostSetting(body) {
  let [setting, ...bodyArray] = body.split('<hr>');
  let settingResult = PostConfig.settingContainer;

  if (bodyArray.length > 0) {
    body = bodyArray.join('<hr>');
    // <p>作者: Lee</p>
    setting.match(/[^>]*[：:][^<]*/g).forEach((entry) => {
      // 作者: Lee
      let [key, ...value] = entry.split(/[：:]/);
      if (key in PostConfig.settingAlias) {
        settingResult[PostConfig.settingAlias[key]] = value.join('：').trim();
      }
    });
  }
  // console.log(settingResult);
  return {settingResult, body};
}

function removeTopTag(tags) {
  let idx = tags.indexOf(PostListConfig.tagMap['top']);
  if (idx != -1) {
    tags.splice(idx, 1);
  }
}

export default (state = {
  isFetching: false,
  post: {}
}, action) => {
  switch (action.type) {
    case PostAction.REQUEST_POST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case PostAction.RECEIVE_POST:
      return Object.assign({}, state, {
        isFetching: false,
        post: parsePostData(action.post)
      });
    default:
      return state;
  }
};
