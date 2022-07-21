import { AppProps } from 'next/app';
import { MyThemeProvider } from '../context/MyThemeContext';
import { Layout } from '../layout';
import GlobalStyle from '../styles/global';
import { SessionProvider } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import '../styles/nprogress.css';
import { ApolloProvider } from '@apollo/client';
import { client } from '../lib/apollo';

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        const handleStart = () => {
            NProgress.start();
        };
        const handleStop = () => {
            NProgress.done();
        };

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleStop);
        router.events.on('routeChangeError', handleStop);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleStop);
            router.events.off('routeChangeError', handleStop);
        };
    }, [router]);
    return (
        <SessionProvider session={pageProps.session}>
            <ApolloProvider client={client}>
                <MyThemeProvider>
                    <GlobalStyle />
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </MyThemeProvider>
            </ApolloProvider>
        </SessionProvider>
    );
}
