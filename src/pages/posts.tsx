import { Wrapper } from '../components/Wrapper';
import { getSession } from 'next-auth/react';
import Link from 'next/link';
import { frontEndRedirect } from '../utils/fornEndRedirect';
import { GetServerSideProps } from 'next';
import { serverSideRedirect } from '../utils/serverSideRedirect';
import {
    GetPostAndSettingsAndContextTextDocument,
    GetPostAndSettingsAndContextTextQuery,
    PostEntityResponseCollection,
} from '../graphql/generated';
import { gqlClient } from '../graphql/client';
import { Session } from 'next-auth';

interface IPostPageProps {
    posts?: PostEntityResponseCollection;
    session: Session;
}
export default function PostPage({ posts, session }: IPostPageProps) {
    if (!session) return frontEndRedirect();
    if (typeof window === 'undefined') return null;
    return (
        <Wrapper>
            <h1>POSTS</h1>
            {posts?.data.map((post) => (
                <p key={post.id}>
                    <Link href={`/posts/${post.id}`}>
                        <a>{post.attributes?.title}</a>
                    </Link>
                </p>
            ))}
        </Wrapper>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const session = await getSession(ctx);
    if (!session) {
        return serverSideRedirect(ctx);
    }
    try {
        const { posts } = await gqlClient.request<GetPostAndSettingsAndContextTextQuery>(
            GetPostAndSettingsAndContextTextDocument,
            undefined,
            {
                Authorization: `Bearer ${session.accessToken}`,
            },
        );
        return {
            props: {
                posts,
                session,
            },
        };
    } catch (error) {
        return serverSideRedirect(ctx);
    }
};
