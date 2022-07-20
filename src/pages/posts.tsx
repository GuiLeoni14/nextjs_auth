import { Wrapper } from '../components/Wrapper';
import { getSession, useSession } from 'next-auth/react';
import Link from 'next/link';
import { frontEndRedirect } from '../utils/fornEndRedirect';
import { GetServerSideProps } from 'next';
import { serverSideRedirect } from '../utils/serverSideRedirect';
import {
    Delete_PostDocument,
    Delete_PostMutationResult,
    GetPostsDocument,
    GetPostsQuery,
    PostEntityResponseCollection,
} from '../graphql/generated';
import { gqlClient } from '../graphql/client';
import { useEffect, useState } from 'react';

interface IPostPageProps {
    posts: PostEntityResponseCollection;
}
export default function PostsPage({ posts }: IPostPageProps) {
    const { data: session, status } = useSession();
    const [statePosts, setStatesPosts] = useState(posts.data || []);
    const [deleting, setDeleting] = useState(false);
    useEffect(() => {
        if (posts.data) {
            setStatesPosts(posts.data);
        }
    }, [posts]);
    if (!session && status === 'unauthenticated') {
        return frontEndRedirect();
    }
    const handleDelete = async (id: string) => {
        setDeleting(true);
        try {
            const { data } = await gqlClient.request<Delete_PostMutationResult>(
                Delete_PostDocument,
                {
                    id,
                },
                {
                    Authorization: `Bearer ${session?.accessToken}`,
                },
            );
            setStatesPosts((state) => state.filter((post) => post.id !== id));
            setDeleting(false);
        } catch (error) {
            console.log(error);
            setDeleting(false);
        }
    };
    return (
        <Wrapper>
            <h1>POSTS</h1>
            {statePosts?.map((post) => (
                <p key={post.id}>
                    <Link href={`/posts/${post.id}`}>
                        <a>{post.attributes?.title}</a>
                    </Link>
                    |{' '}
                    <button onClick={() => handleDelete(post.id as string)} disabled={deleting}>
                        Excluir
                    </button>
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
