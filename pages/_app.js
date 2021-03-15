import React from 'react';
import App, { Container } from 'next/app';
import '../.semantic/dist/semantic.min.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
        <style jsx global>{`
          body {
            padding: 1rem;
          }
        `}</style>
      </Container>
    );
  }
}
