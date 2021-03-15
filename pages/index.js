import styled from 'styled-components';
import Head from 'next/head';
import { Image, Tab } from 'semantic-ui-react';

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    margin: 10px 0 10px 0;
  }
`;

const panes = [
  {
    menuItem: { key: 'me', icon: 'user', content: '自己紹介' },
    // eslint-disable-next-line react/display-name
    render: () => (
      <Tab.Pane attached={'false'} as="div">
        <h3 className="ui dividing header">ハンドルネーム</h3>
        <ruby>
          QUANON<rt>くあのん</rt>
        </ruby>
        <h3 className="ui dividing header">ステータス</h3>
        <div className="ui relaxed list">
          <div className="item">
            <div className="content">
              <div className="header">スピリチュアルプログラマ</div>
              <div className="description">
                <ruby>
                  神託<rt>オラクル</rt>
                </ruby>
                をコードにつづります。
              </div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <div className="header">村上春樹主義者</div>
              <div className="description">やれやれ。 </div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <div className="header">杏さや教徒</div>
              <div className="description">あんた、マジなんだな？</div>
            </div>
          </div>
        </div>
        <h3 className="ui dividing header">コンタクト</h3>
        <div className="ui list">
          <div className="item">
            <i className="twitter icon"></i>
            <div className="content">
              <a href="https://twitter.com/quanon_jp">@quanon_jp</a>
            </div>
          </div>
          <div className="item">
            <i className="globe icon"></i>
            <div className="content">
              <a href="https://qiita.com/QUANON">QUANON - Qiita</a>
            </div>
          </div>
        </div>
      </Tab.Pane>
    )
  },
  {
    menuItem: { key: 'favorite', icon: 'heart', content: '好きなもの' },
    // eslint-disable-next-line react/display-name
    render: () => (
      <Tab.Pane attached={'false'} as="div">
        WIP
      </Tab.Pane>
    )
  }
];

const TabExampleSecondaryPointing = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
);

const Home = () => (
  <>
    <Head>
      <title>QUANON</title>
    </Head>
    <div className="ui container">
      <Centered>
        <div>
          <h1>QUANON</h1>
        </div>
        <div>
          <Image src="/kyoko.png" size="medium" circular />
        </div>
        <div>
          <span>icon by </span>
          <a href="https://twitter.com/LynxLLLLLL" rel="noopener noreferrer" target="_blank">
            @LynxLLLLLL
          </a>
        </div>
      </Centered>
      <TabExampleSecondaryPointing></TabExampleSecondaryPointing>
    </div>
  </>
);

export default Home;
