let settingAlias = {
  '日期': 'date',
  '時間': 'time',
  '區域': 'area',
  '地點': 'location',
  '地址': 'address',
  '主辦單位': 'host',
  '簡介': 'brief',
  '購票連結': 'ticketLink'
};

let defaultSetting = {
  'date': '',
  'time': '',
  'area': '',
  'location': '',
  'address': '',
  'host': 'wowAfrica阿非卡',
  'brief': '',
  'ticketLink': 'https://www.facebook.com/wowafrica.tw'
};

let adjustTicketLink = (link) => {
  let match = link.match(/http[^\"\'\s]*/);
  let ticketLink = match ? match[0] : link;
  return ticketLink;
};

let combineSysTime = (sDate, sTime) => {
  let sysTime = new Date('2016.07.24 18:00');
  let date = sDate.match(/[0-9.]*/);
  let time = sTime.match(/[0-9:：]*/);
  if ( date && time ) {
    sysTime = new Date(`${date} ${time}`);
  }
  return sysTime;
};

let parseSetting = (rawSetting) => {
  let setting = defaultSetting;
  // <p>地點:華山</p>
  rawSetting.match(/[^>]*[:：][^<]*/g).forEach((entry) => {
    // 地點:華山
    let [key, ...value] = entry.split(/[:：]/);
    if (key in settingAlias) {
      setting[settingAlias[key]] = value.join(':').trim();
    }
  });
  setting.ticketLink = adjustTicketLink(setting.ticketLink);
  setting.sysTime = combineSysTime(setting.date, setting.time);
  return setting;
};

let parseImage = (body) => {
  let image = 'https://scontent-tpe1-1.xx.fbcdn.net/t31.0-8/12901553_969366159848325_1083225975357603228_o.jpg';
  let imageSrc = body.match(/<img [^>]*\/>/g);
  if (imageSrc) {
    let imageSrcList = imageSrc[0].match(/http[^\"\'\s]*/);
    if (imageSrcList) {
      image = imageSrcList[0];
    }
  }
  return image;
};

let parseActivity = (post) => {
  let {id, title} = post;
  let [rawSetting, ...bodyArray] = post.body.split('<hr>');
  let content = bodyArray.join('<hr>');
  let setting = parseSetting(rawSetting);
  let image = parseImage(post.body);

  return {id, title, image, ...setting, content};
};

let parseActivities = (rawApi) => {
  let activities = [];
  let oldActivities = [];
  let currentTime = new Date();
  rawApi.posts.forEach((post) => {
    let activity = parseActivity(post);
    if (activity.sysTime.getTime() >= currentTime.getTime()) {
      activities.push(activity);
    }
    else {
      oldActivities.push(activity);
    }

  });
  return {activities, oldActivities};
};

export default parseActivities;
