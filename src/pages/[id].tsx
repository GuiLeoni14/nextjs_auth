import { useMutation } from '@apollo/client';
import { GetServerSideProps } from 'next';
import { getSession, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { FormPost } from '../components/FormPost';
import { Wrapper } from '../components/Wrapper';
import { gqlClient } from '../graphql/client';
import {
    Create_Post_1Document,
    GetPostsDocument,
    GetPostsQuery,
    Get_PostDocument,
    Get_PostQuery,
    PostEntityResponse,
    PostEntityResponseCollection,
    Update_PostDocument,
    Update_PostMutationHookResult,
    Update_PostMutationResult,
    useCreate_Post_1Mutation,
} from '../graphql/generated';
import { frontEndRedirect } from '../utils/fornEndRedirect';
import { serverSideRedirect } from '../utils/serverSideRedirect';

export interface IPostPageProps {
    post: PostEntityResponse;
}
export default function PostPage({ post }: IPostPageProps) {
    const [createPost] = useCreate_Post_1Mutation();
    const { data: session, status } = useSession();
    const [statePost, setStatesPost] = useState(post.data);
    if ((!session && status === 'unauthenticated') || !statePost) {
        return frontEndRedirect();
    }

    const handleSave = async ({ title, id, content }: { id: string; title: string; content: string }) => {
        try {
            // const { data } = await gqlClient.request<Update_PostMutationResult>(
            //     Update_PostDocument,
            //     {
            //         title,
            //         id,
            //         content,
            //     },
            //     {
            //         Authorization: `Bearer ${session?.accessToken}`,
            //     },
            // );
            await createPost({
                variables: {
                    title,
                    id,
                    content,
                },
                context: {
                    headers: {
                        authorization: `Bearer ${session?.accessToken}`,
                    },
                },
            });
            console.log({ title, id, content });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Wrapper>
            <FormPost onSave={handleSave} post={statePost} />
        </Wrapper>
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
