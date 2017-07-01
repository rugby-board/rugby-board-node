import React from 'react';

import Heading from './Heading.jsx';

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props);

    const aboutHeading = {
      id: 'about',
      title: '关于',
      more_text: '',
      more_link: ''
    };

    this.state = {
      aboutHeading: aboutHeading,
    };
  }

  render() {
    var unsplashImage = require('../../public/quino-al-155743.jpg');
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
                </p>
                <p>
                  <a href="/news/feed">使用 RSS 订阅</a>
                </p>
                <p>
                  联系请发邮件: crispgm at gmail.com
                </p>
                <p>
                  <img src={unsplashImage} />
                </p>
              </div>
            </div>
          </div>
          <div className="column column-1-2">
            <div className="article">
              <div className="article-content">
                <h3>为什么会有 Rugby News Board?</h3>
                <p>英式橄榄球在国内人气真是少，既没有足球、乒乓球一样的群众基础，也没有 NBA、NFL 一样的商业推广，还因为世界比赛、奥运会没啥前途也不被总菊支持。我曾是一个在澳大利亚的留学生，前往澳大利亚之前先了解一些当地的文化，其中有一块就是橄榄球。在澳大利亚，Rugby Union、Rugby League 和 Australian Football 三种“橄榄球”都很受欢迎。</p>
                <p>曾经达阵中国可能是国内最好的 Rugby Union 资讯网站和论坛，但人气也非常惨淡，后来情况不了了之了，就在微博偶尔出现一下。于是，想看点橄榄球资讯只能自己去国外网站看。所以，我萌发了一个想法就是做一个简单的橄榄球资讯网站。这就是 Rugby News Board 的起因。</p>

                <h3>Rugby News Board 宗旨</h3>
                <ul>
                  <li>只做赛事相关的一手资讯</li>
                  <li>所有资讯中的比赛和人名提供中英双语</li>
                  <li>资讯不会做过多的描述，基本是几句话，当作微博看就好（后续，可能新闻全部同步发微博和 Twitter）</li>
                  <li>不会提供太多社交能力，反对“抖机灵”以及网络暴力(Cyberbullying)</li>
                  <li>后续可能会提供点赞和投票类的交互功能</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
