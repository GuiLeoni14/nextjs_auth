import { GetServerSideProps } from 'next';
import { getToken } from 'next-auth/jwt';
import { useSession } from 'next-auth/react';
import { parseCookies } from 'nookies';
import { Wrapper } from '../components/Wrapper';
export default function Home() {
    const { data: session, status } = useSession();

    return (
        <Wrapper>
            <h1>{session?.user?.name}</h1>
        </Wrapper>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};
