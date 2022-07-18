import { AppProps } from 'next/app';
import { MyThemeProvider } from '../context/MyThemeContext';
import { Layout } from '../layout';
import GlobalStyle from '../styles/global';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MyThemeProvider>
            <GlobalStyle />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </MyThemeProvider>
    );
}
