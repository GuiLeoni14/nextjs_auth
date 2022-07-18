import Head from 'next/head';
import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

export function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Head>
                <title>My Page</title>
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
