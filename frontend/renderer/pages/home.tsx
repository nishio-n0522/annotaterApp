import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { ApplicationBar } from "../components/appBar";

interface boxLayoutProps {
  width: string;
  height: string;
}

class ApplicationBarCss implements boxLayoutProps {
  width: "100vw";
  height: "10vh";
}

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-typescript)</title>
      </Head>
      <Provider store={store}>
        <ApplicationBar width="100vw" height="100vh" />
        <div></div>
      </Provider>
    </React.Fragment>
  );
};

export default Home;
