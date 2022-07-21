import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import { Wrapper } from '../components/Wrapper';
export default function Home() {
    const { data: session } = useSession();

    return (
        <Wrapper>
            <h1>{session?.user?.name}</h1>
        </Wrapper>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {},
    };
};
