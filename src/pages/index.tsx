import { GetServerSideProps } from 'next';
import { getToken } from 'next-auth/jwt';
import { useSession } from 'next-auth/react';
import { parseCookies } from 'nookies';
export default function Home() {
    const { data: session, status } = useSession();

    return <pre>My page {session && JSON.stringify(session)}</pre>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { ['next-auth.session-token']: token } = parseCookies(ctx);
    console.log(token);
    return {
        props: {},
    };
};
