import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import { GlobalStyle } from "../src/theme/GlobalStyle";
import { theme } from "../src/theme/theme";
import Layout from "../src/components/Layout";
import { gotham_medium } from "../src/fonts/gotham_medium";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import "../src/i18n/i18n";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="locale" content="en" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout customfont={gotham_medium}>
          <GoogleReCaptchaProvider
            reCaptchaKey={process.env.GOOGLE_RECAPTCHA_PUBLIC_KEY}
            scriptProps={{
              async: false,
              defer: false,
              appendTo: "head",
              nonce: undefined,
            }}
          >
            <Component {...pageProps} />
          </GoogleReCaptchaProvider>
        </Layout>
      </ThemeProvider>
    </>
  );
}
