let settingAlias = {
  '公司': 'company',
  '公司商標': 'logo',
  '公司簡介': 'brief',
  '公司網站': 'website',
  '聯絡方式': 'contact',
  '職稱': 'title',
  '類別': 'type',
  '月薪': 'salary',
  '經驗需求': 'experience',
  '工作地點': 'location'
};

let defaultSetting = {
  'company': '',
  'logo': '',
  'brief': '',
  'website': '',
  'contact': '',
  'title': '',
  'type': '',
  'salary': '',
  'experience': '',
  'location': ''
};

let adjustTicketLink = (link) => {
  let match = link.match(/http[^\"\'\s]*/);
  let ticketLink = match ? match[0] : link;
  return ticketLink;
};

let combineSysTime = (sDate, sTime) => {
  let sysTime = new Date('2016-07-24T18:00');
  let date = sDate.match(/[0-9.]*/);
  let time = sTime.match(/[0-9:：]*/);
  if ( date && time ) {
    date = date[0].replace(/\./g, '-'); // 2016.07.24 to 2016-07-24
    sysTime = new Date(`${date}T${time}`);
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
