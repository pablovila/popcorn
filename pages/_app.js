import React from "react";
import { Provider } from "react-redux";
import Head from "next/head";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import store from "src/store";
import Layout from "components/Layout/Layout";
import "scss/index.scss";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Head>
          <title>Popcorn</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no"
          />
        </Head>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(store)(MyApp);
