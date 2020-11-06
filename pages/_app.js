import React from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import { useStore } from "../src/store.js";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  let initialState = pageProps.initialReduxState;
  console.log(initialState);
  /*if (typeof localStorage !== "undefined") {
    if (typeof localStorage.accountData !== "undefined") {
      store = {
        ...store,
        user: { ...store.user, ...JSON.parse(localStorage.accountData) },
        /*form: {
          ...form,
          [form.name.value]: JSON.parse(localStorage.accountData),
        }, // JSON.parse(localStorage.accountData),
      };
      console.log(store.getState());
    }
  }
*/
  const store = useStore(pageProps.initialReduxState);

  store.subscribe(() => {
    //store.user???
    localStorage.accountData = JSON.stringify(store.getState().user);
  });

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <title>Nextjs-material-example</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
