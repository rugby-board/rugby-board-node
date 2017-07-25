import { h, Component } from 'preact';

import { setDocumentTitle } from '../util';
import Heading from '../components/Heading';

export default class InfoPage extends Component {
  constructor(props) {
    super(props);
    setDocumentTitle('橄榄球资料');
    const wikiHeading = {
      id: 'info',
      title: '橄榄球资料',
      more_text: '',
      more_link: '',
    };
    const ruleHeading = {
      id: 'rule',
      title: '规则介绍',
      more_text: '',
      more_link: '',
    };
    const storyHeading = {
      id: 'story',
      title: '橄榄球故事',
      more_text: '',
      more_link: '',
    };
    const matchHeading = {
      id: 'match',
      title: '赛事相关',
      more_text: '',
      more_link: '',
    };
    const equipmentHeading = {
      id: 'equipment',
      title: '队服装备',
      more_text: '',
      more_link: '',
    };

    this.state = {
      wikiHeading,
      ruleHeading,
      storyHeading,
      matchHeading,
      equipmentHeading,
    };
  }

  render() {
    return (
      <div>
        <div className="columns">
          <div className="column column-1-2">
            <Heading data={this.state.storyHeading} />
            <div className="news-item">
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mp.weixin.qq.com/s?__biz=MzI5MjUwNTUxNQ==&mid=100000064&idx=1&sn=3e9ce4898c4771920a181a3f1078a571"
                  >
                    英式橄榄球（Rugby Football）的前世今生
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mp.weixin.qq.com/s?__biz=MzI5MjUwNTUxNQ==&mid=2247485002&idx=1&sn=aa7a2b220f578a3e47851a46dbe07760"
                  >
                    伦敦恐袭中的第一英雄是怎样炼成的？
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mp.weixin.qq.com/s?__biz=MzI5MjUwNTUxNQ==&mid=2247485099&idx=1&sn=d894b0e6334b936ef966e57545964726"
                  >
                    橄榄球是如何改变一个草根的命运
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="column column-1-2">
            <Heading data={this.state.ruleHeading} />
            <div className="news-item">
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mp.weixin.qq.com/s?__biz=MzI3MjIwMTczMg==&mid=2662878122&idx=1&sn=5b771973a924dfa8ebf22fe40a8fa916"
                  >
                    想要看懂英式橄榄球真的就那么难吗（一）
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mp.weixin.qq.com/s?__biz=MzI3MjIwMTczMg==&mid=2662878130&idx=1&sn=698fed1091cd3f545fed096a9d6e1900"
                  >
                    想要看懂英式橄榄球真的就那么难吗（二）
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mp.weixin.qq.com/s?__biz=MzI3MjIwMTczMg==&mid=2662878143&idx=1&sn=ba665a14f0c44d85956783c5dd939a3b"
                  >
                    想要看懂英式橄榄球真的就那么难吗（三）
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mp.weixin.qq.com/s?__biz=MzI3MjIwMTczMg==&mid=2662878161&idx=1&sn=302dc9893cff7259c63e9b8535858354"
                  >
                    想要看懂英式橄榄球真的就那么难吗（四）
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mp.weixin.qq.com/s?__biz=MzI3MjIwMTczMg==&mid=2662878093&idx=1&sn=2286e38b2ca9a9016a39c10cab07edf7"
                  >
                    你所不知道的，一种来决定橄榄球比赛输赢的方式
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column column-1-2">
            <Heading data={this.state.matchHeading} />
            <div className="news-item">
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mp.weixin.qq.com/s?__biz=MzI5ODA1NTc0OA==&mid=2473532677&idx=1&sn=58a2b18724f9a956d3f4518c0d2505f9"
                  >
                    你需要知道的那些橄榄球奖杯（一）
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mp.weixin.qq.com/s?__biz=MzI5ODA1NTc0OA==&mid=2473532687&idx=1&sn=e6c79df432ee8efe8a5d31bce79cb403"
                  >
                    你需要知道的那些橄榄球奖杯（二）
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mp.weixin.qq.com/s?__biz=MzI5ODA1NTc0OA==&mid=2473532702&idx=1&sn=bad34f6735b706197ae242b98afbe269"
                  >
                    你需要知道的那些橄榄球奖杯（三）南北半球篇
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="column column-1-2">
            <Heading data={this.state.equipmentHeading} />
            <div className="news-item">
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mp.weixin.qq.com/s?__biz=MzI5ODA1NTc0OA==&mid=2473532630&idx=1&sn=03787d269d47a9c10f42a8d85fe4a125"
                  >
                    苏格兰橄榄球代表队发布新赛季球衣
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mp.weixin.qq.com/s?__biz=MzI5ODA1NTc0OA==&mid=2473532621&idx=1&sn=98813a6125d55e1a4087c1df949034f9"
                  >
                    Top 14劲旅92竞技发布2017/18赛季球衣
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mp.weixin.qq.com/s?__biz=MzI5ODA1NTc0OA==&mid=226008784&idx=1&sn=458fd54697a530bf73f16283708ae15e"
                  >
                    2015橄榄球世界杯球衣巡展
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
