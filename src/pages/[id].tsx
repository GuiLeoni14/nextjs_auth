import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { PrivateComponent } from '../components/PrivateComponent';
import { gqlClient } from '../graphql/client';
import { Get_PostDocument, Get_PostQuery, PostEntityResponse } from '../graphql/generated';
import { UpdatePostTemplate } from '../templates/UpdatePost';
import { serverSideRedirect } from '../utils/serverSideRedirect';
export interface IPostPageProps {
    post: PostEntityResponse;
}

export default function PostPage({ post }: IPostPageProps) {
    return (
        <PrivateComponent>
            <UpdatePostTemplate post={post} />
        </PrivateComponent>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const session = await getSession(ctx);
    if (!session || !ctx.params) {
        return serverSideRedirect(ctx);
    }
    const { id } = ctx.params;
    try {
        const { post } = await gqlClient.request<Get_PostQuery>(
            Get_PostDocument,
            {
                id,
            },
            {
                Authorization: `Bearer ${session.accessToken}`,
            },
        );
        console.log(post);
        if (!post || !post?.data) {
            return {
                notFound: true,
            };
        }
        return {
            props: {
                post,
            },
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
};
