import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Counter from '../components/Counter';
import ResetButton from '../components/ResetButton';
import Head from 'next/head';

const UpsideDownCounter = styled(Counter)`
  transform: scaleX(-1) scaleY(-1);
`;

const Counters = () => {
  const myRef = useRef();
  const opponentRef = useRef();

  useEffect(() => {
    // Prevent scrolling in Safari.
    window.addEventListener('scroll', (e) => {
      e.preventDefault();
      window.scrollTo(0, 0);
    });
  });

  return (
    <>
      <Head>
        <title>カウンター</title>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </Head>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
        <UpsideDownCounter
          ref={opponentRef}
          colors={{ card: '#73b1e2', button: '#5ea5de', history: '#2981c6' }}></UpsideDownCounter>
        <ResetButton
          onClick={() => {
            if (window.confirm('ライフカウンターをリセットしますか？')) {
              myRef.current.reset();
              opponentRef.current.reset();
            }
          }}></ResetButton>
        <Counter
          ref={myRef}
          colors={{ card: '#e273b1', button: '#de5ea5', history: '#c62981' }}></Counter>
      </div>
      <style jsx global>{`
        /* Prevent scrolling in Safari. */
        body {
          position: fixed;
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default Counters;
