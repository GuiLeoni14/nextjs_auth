import { getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import { serverSideRedirect } from '../utils/serverSideRedirect';
import { GetPostsDocument, GetPostsQuery, PostEntityResponseCollection } from '../graphql/generated';
import { gqlClient } from '../graphql/client';
import { PrivateComponent } from '../components/PrivateComponent';
import PostsTemplate from '../templates/Posts';

interface IPostsPageProps {
    posts: PostEntityResponseCollection;
}
export default function PostsPage({ posts }: IPostsPageProps) {
    return (
        <PrivateComponent>
            <PostsTemplate posts={posts} />
        </PrivateComponent>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const session = await getSession(ctx);
    if (!session) {
        return serverSideRedirect(ctx);
    }
    try {
        const { posts } = await gqlClient.request<GetPostsQuery>(GetPostsDocument, undefined, {
            Authorization: `Bearer ${session.accessToken}`,
        });
        return {
            props: {
                posts,
            },
        };
    } catch (error) {
        console.log(error);
        return serverSideRedirect(ctx);
    }
};
