const EVENT_ID_MAP = {
  'international-tests': 1,
  'six-nations': 2,
  'rugby-championship': 3,
  'super-rugby': 4,
  premiership: 5,
  top14: 6,
  pro14: 7,
  'rugby-world-cup': 9,
  'british-and-irish-lions': 10,
};

const EVENTS_CHINESE_NAMES = {
  'international-tests': '国际测试赛',
  'six-nations': '六国赛 Six Nations',
  'rugby-championship': '冠军赛 The Rugby Championship',
  'super-rugby': '超级橄榄球 Super Rugby',
  premiership: '英超 Premiership',
  top14: '法国 TOP14',
  pro14: 'PRO14',
  'rugby-world-cup': '橄榄球世界杯',
  'british-and-irish-lions': '不列颠和爱尔兰狮子 British & Irish Lions',
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
