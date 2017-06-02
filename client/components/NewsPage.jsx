import React from 'react';
import NewsList from './NewsList.jsx';

export default class NewsPage extends React.Component {
  constructor(props) {
    super(props);

    // do some fetch here
    const newsList = [
      {
        id: 1,
        title: "伦敦爱尔兰人 London Irish 签下三名球员",
        content: "伦敦爱尔兰人 London Irish 本赛季升级成功，开启了招兵买马的进程，宣布签下了苏格兰支柱前锋戈登·雷德 Gordon Reid，格鲁吉亚前锋拉沙·洛米泽 Lasha Lomidze 和墨尔本背叛者的传锋本·米汉 Ben Meehan。",
        channel: "新闻 | TOP 14",
        created_at: "01:09 2017-05-29"
      },
      {
        id: 2,
        title: "国际友谊赛 英格兰28:14击败野蛮人队",
        content: "5月28日在伦敦特维克纳姆球场进行的国际友谊赛中，英格兰28:14击败野蛮人队。",
        channel: "新闻 | TOP 14",
        created_at: "01:09 2017-05-29"
      }
    ];
    this.state = {
      data: newsList
    };
  }

  render() {
    return (
      <NewsList data={this.state.data} />
    );
  }
}
