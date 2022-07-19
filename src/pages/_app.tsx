import { AppProps } from 'next/app';
import { MyThemeProvider } from '../context/MyThemeContext';
import { Layout } from '../layout';
import GlobalStyle from '../styles/global';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider session={pageProps.session}>
            <MyThemeProvider>
                <GlobalStyle />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MyThemeProvider>
        </SessionProvider>
    );
}
