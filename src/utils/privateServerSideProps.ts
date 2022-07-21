import { GetServerSidePropsContext } from 'next';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';
import { serverSideRedirect } from './serverSideRedirect';

export const PrivateServerSideProps = async <T>(
    ctx: GetServerSidePropsContext,
    callbackFn?: (session: Session) => Promise<T>,
) => {
    const session = await getSession(ctx);
    if (!session) {
        return serverSideRedirect(ctx);
    }
    const result = callbackFn ? await callbackFn(session) : false;
    return result ? result : serverSideRedirect(ctx);
};
