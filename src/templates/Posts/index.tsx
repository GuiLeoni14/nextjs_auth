import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Wrapper } from '../../components/Wrapper';
import { gqlClient } from '../../graphql/client';
import { Delete_PostDocument, Delete_PostMutationResult, PostEntityResponseCollection } from '../../graphql/generated';

interface IPostsTemplateProps {
    posts: PostEntityResponseCollection;
}
export default function PostsTemplate({ posts }: IPostsTemplateProps) {
    const { data: session } = useSession();
    const [statePosts, setStatesPosts] = useState(posts.data || []);
    const [deleting, setDeleting] = useState(false);
    useEffect(() => {
        if (posts.data) {
            setStatesPosts(posts.data);
        }
    }, [posts]);
    const handleDelete = async (id: string) => {
        setDeleting(true);
        try {
            await gqlClient.request<Delete_PostMutationResult>(
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
