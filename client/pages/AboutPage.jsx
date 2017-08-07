import { h, Component } from 'preact';

import { setDocumentTitle } from '../util';
import Heading from '../components/Heading';

export default class AboutPage extends Component {
  constructor(props) {
    super(props);

    setDocumentTitle('关于');

    const aboutHeading = {
      id: 'about',
      title: '关于',
      icon: 'home',
      more_text: '',
      more_link: '',
    };

    this.state = { aboutHeading };
  }

  render() {
    /* eslint-disable react/style-prop-object */
    return (
      <div>
        <Heading data={this.state.aboutHeading} />
        <div className="columns">
          <div className="column column-1-2">
            <div className="article">
              <div className="article-content">
                <h3>Rugby News Board 中文英式橄榄球资讯</h3>
                <p>
                  Copyright &copy; <a href="https://crispgm.com">David Zhang</a>.
                  <br />
                  联系请发邮件: crispgm at gmail.com
                </p>
                <h3>为什么会有 Rugby News Board?</h3>
                <p>
                  英式橄榄球在国内人气真是少，既没有足球、乒乓球一样的群众基础，也没有 NBA、NFL 一样的商业推广，还因为世界比赛、奥运会没啥前途也不被总菊支持。我曾是一个在澳大利亚的留学生，前往澳大利亚之前先了解一些当地的文化，其中有一块就是橄榄球。在澳大利亚，Rugby Union、Rugby League 和 Australian Football 三种“橄榄球”都很受欢迎。
                </p>
                <p>
                  曾经达阵中国可能是国内最好的 Rugby Union 资讯网站和论坛，但人气也非常惨淡，后来情况不了了之了，就在微博偶尔出现一下。于是，想看点橄榄球资讯只能自己去国外网站看。所以，我萌发了一个想法就是做一个简单的橄榄球资讯网站。这就是 Rugby News Board 的起因。
                </p>

                <h3>Rugby News Board 宗旨</h3>
                <ul>
                  <li>只做赛事相关的一手资讯</li>
                  <li>所有资讯中的比赛和人名提供中英双语</li>
                  <li>资讯不会做过多的描述，基本是几句话，当作微博看就好</li>
                  <li>后续，可能新闻全部同步发微博和 Twitter</li>
                  <li>不会提供太多社交能力，反对“抖机灵”以及网络暴力(Cyberbullying)</li>
                  <li>后续可能会提供点赞和投票类的交互功能</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="column column-1-2">
            <div className="article">
              <div className="article-content">
                <p>
                  <img src="/public/quino-al-155743.jpg" alt="Rugby Sports" />
                  <a
                    style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px;"
                    href="https://unsplash.com/@quinoal?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Download free do whatever you want high-resolution photos from Quino Al"
                  >
                    <span style="display:inline-block;padding:2px 3px;">
                      <svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white;" viewBox="0 0 32 32">
                        <title />
                        <path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z" />
                      </svg>
                    </span>
                    <span style="display:inline-block;padding:2px 3px;">Quino Al</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
