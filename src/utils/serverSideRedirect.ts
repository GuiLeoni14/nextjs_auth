import { GetServerSidePropsContext } from 'next';

export const serverSideRedirect = (ctx: GetServerSidePropsContext, redirectTo?: string) => {
    const new_path = redirectTo || encodeURI(ctx.resolvedUrl);
    return {
        props: {},
        redirect: {
            destination: `${process.env.NEXT_PUBLIC_LOGIN_URI}/?redirect=${new_path}`,
            permanent: false,
        },
    };
};
