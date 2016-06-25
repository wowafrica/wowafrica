import PostConfig         from '../configures/PostConfig';
import PostListConfig     from '../configures/PostListConfig';

let parsePostData = (post) => {
  let {id, title} = post;
  let image = parsePostImage(post.body);
  let setting = parsePostBody(post.body);
  let {category, valid} = parsePostCategory(post.tags);

  return {id, title, image, category, ...setting, valid};
};

let parsePostBody = (body) => {
  let [setting, ...bodyArray] = body.split('<hr>');
  let settingResult = PostConfig.settingContainer;

  if (bodyArray.length > 0) {
    body = bodyArray.join('<hr>');
    // <p>作者: Lee</p>
    setting.match(/[^>]*[:：][^<]*/g).forEach((entry) => {
      // 作者: Lee
      let [key, ...value] = entry.split(/[:：]/);
      if (key in PostConfig.settingAlias) {
        settingResult[PostConfig.settingAlias[key]] = value.join('：').trim();
      }
    });
  }
  return settingResult;
};

let parsePostImage = (body) => {
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
};

let parsePostCategory = (tagArray) => {
  for (let tag of tagArray) {
    if (tag in PostListConfig.categoryMapZh) {
      return {category: PostListConfig.categoryMapZh[tag], valid: true};
    }
  };
  return {category: '', valid: false};
};

export default {
  parsePosts(data) {
    let updatedList = [];
    data.posts.forEach((post) => {
      let result = parsePostData(post);
      if (result.valid == true) {
        updatedList.push(result);
      }
    });
    return updatedList;
  },
  parsePostsNoValidation(data) {
    let updatedList = [];
    data.posts.forEach((post) => {
      let result = parsePostData(post);
    });
    return updatedList;
  }
};
