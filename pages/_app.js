import React from 'react';
import App from 'next/app';
import '../.semantic/dist/semantic.min.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Component {...pageProps} />
        <style jsx global>{`
          body {
            padding: 1rem;
          }
        `}</style>
      </>
    );
  }
}
