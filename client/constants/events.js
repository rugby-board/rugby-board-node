const EVENT_ID_MAP = {
  'international-tests': 1,
  'six-nations': 2,
  'rugby-championship': 3,
  'super-rugby': 4,
  premiership: 5,
  top14: 6,
  pro14: 7,
  'european-champions-cup': 8,
  'rugby-world-cup': 9,
  'british-and-irish-lions': 10,
  'european-challenge-cup': 11,
  'currie-cup': 12,
  'top-league': 13,
  'rugby-sevens': 14,
  'womens-rugby': 15,
  barbarians: 16,
  'anglo-welsh-cup': 17,
  'mitre-10-cup': 18,
  'national-rugby-championship': 19,
};

const EVENTS_CHINESE_NAMES = {
  'international-tests': '国际测试赛',
  'six-nations': '六国赛 Six Nations',
  'rugby-championship': '冠军赛 The Rugby Championship',
  'super-rugby': '超级橄榄球 Super Rugby',
  premiership: '英超 Premiership',
  top14: '法国 TOP14',
  pro14: 'PRO14',
  'european-champions-cup': '欧洲冠军杯',
  'rugby-world-cup': '橄榄球世界杯',
  'british-and-irish-lions': '不列颠和爱尔兰狮子 British & Irish Lions',
  'european-challenge-cup': '欧洲挑战杯',
  'currie-cup': '库里杯 Currie Cup',
  'top-league': '日本超级联赛',
  'rugby-sevens': '7人制橄榄球',
  'womens-rugby': '女子橄榄球',
  barbarians: '野蛮人',
  'anglo-welsh-cup': '盎格鲁威尔士杯',
  'mitre-10-Cup': 'Mitre 10 杯',
  'national-rugby-championship': '国家橄榄球冠军赛',
};

const EVENTS_WITH_WIKI = {
  'six-nations': true,
  'rugby-championship': true,
  'super-rugby': true,
  premiership: true,
  top14: true,
  pro14: true,
  'rugby-world-cup': true,
  'british-and-irish-lions': true,
};

export function getEventId(eventName) {
  return EVENT_ID_MAP[eventName];
}

export function getEventChineseName(eventName) {
  return EVENTS_CHINESE_NAMES[eventName];
}

export function haveEventWiki(eventName) {
  if (Object.prototype.hasOwnProperty.call(EVENTS_WITH_WIKI, eventName)) {
    return EVENTS_WITH_WIKI[eventName];
  }

  return false;
}
