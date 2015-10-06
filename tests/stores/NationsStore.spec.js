
let fakeNation = {
  'iso': '',
  'country': '',
  'introduction': '',
  'symbol': '',
  'currency': '',
  'language': '',
  'flag': '',
  'emblem': '',
  'headOfState': '',
  'politics': '',
  'atmosphere': '',
  'geography': '',
  'capital': '',
  'population': '',
  'faith': [],
  'economy': []
};

let fakeNations = [
  {
    'iso': 'DZA',
    'country': '阿爾及利亞 Algeria',
    'introduction': '阿爾及利亞是瀕臨地中海的國家中，國土面積最大的，也是在非洲國家中，占地第二大。阿拉伯文明為主要文化，阿爾及利亞人民解放陣線是主要政黨。',
    'symbol': '礦產資源: 天然氣(Natural gas)',
    'currency': '阿爾及利亞第納爾(Dinar)',
    'language': '阿拉伯語',
    'flag': '',
    'emblem': '',
    'headOfState': '總統: Abdelaziz Bouteflika 總理: Abdelmalek Sellal',
    'politics': '半總統制',
    'atmosphere': '北部較溫和濕潤，屬地中海氣候；中南部的高地區譽為過渡性氣候；南部沙漠地帶，氣候乾熱，屬熱帶沙漠氣候。',
    'geography': '北部沿海平原和阿特拉斯山脈+中南部是撒哈拉阿特拉斯山脈和大高原+最南部則涉及撒哈拉沙漠的西北區域。',
    'capital': '阿爾及爾 Algiers',
    'population': '37.9million(2013)',
    'faith': '遜尼派穆斯林Sunni Muslim(99%) 基督教和猶太教(< 1%)',
    'economy': '一級產業( 9.4%)－地中海作物。二級產業(62.6%)－石油、天然氣，食品加工。三級產業(28%)'
  },
  {
    'iso': 'TZA',
    'country': '坦尚尼亞 Tanzania',
    'introduction': '以和平為人所著稱。曾受英國殖民的它，在去年時決定不再使用英語為教學語言，而是當地語言－斯瓦希里語。',
    'symbol': '野生動物國家公園 (Wildlife)',
    'currency': '坦尚尼亞先令',
    'language': '英語、斯瓦希里語(Swahili)',
    'flag': '檔案名稱以國家為首唷!記得上傳到另一個google drive 資料夾',
    'emblem': '',
    'headOfState': '總統: Jakaya Kikwete 總理: Mizengo Pinda',
    'politics': '雙首長制',
    'atmosphere': '東部的熱帶草原氣候，西部內陸高原則屬熱帶高地氣候。整體來說氣溫平均為21—25℃，乾濕季分明。',
    'geography': '東瀕印度洋，為沿海平原地區+內陸低地區域+西部的高原地區。非洲最高峰－吉力馬札羅山，位於坦尚尼亞東北部。',
    'capital': 'Dodoma 杜篤瑪',
    'population': '43million',
    'faith': '天主/基督新教(35%)伊斯蘭教(45%)原始拜物教(20%)',
    'economy': '一級產業(24.5%)－糧食作物: 玉米；經濟作物: 糖；畜牧業: 牛肉。二級產業(22.2%)－礦物加工製造與營造業。三級產業(53.3%)－觀光、金融'
  }
];

describe('NationsStore', () => {
  it('should have initialize', () => {
    let nationsStore = require('../../src/stores/NationsStore');

    expect(nationsStore.currentNation).toEqual(fakeNation);
  });

  it('should update current nation by receive nation', () => {
    let nationsStore = require('../../src/stores/NationsStore');

    nationsStore.nations = fakeNations;
    nationsStore.onReceiveUpdateNations('TZA');

    expect(nationsStore.currentNation).toEqual(fakeNations[1]);
  });

  it('should use nation name to be default if cannot get nation info', () => {
    let nationsStore = require('../../src/stores/NationsStore');

    nationsStore.nations = fakeNations;
    nationsStore.onReceiveUpdateNations('KEN');

    expect(nationsStore.currentNation.iso).toEqual('KEN');
    expect(nationsStore.currentNation.country).toEqual('KEN');
  });
});
