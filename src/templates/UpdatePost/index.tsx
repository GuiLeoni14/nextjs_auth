import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { FormPost } from '../../components/FormPost';
import { Wrapper } from '../../components/Wrapper';
import { PostEntityResponse, useUpdate_PostMutation } from '../../graphql/generated';

export interface IUpdatePostTemplateProps {
    post: PostEntityResponse;
}
export function UpdatePostTemplate({ post }: IUpdatePostTemplateProps) {
    const [createPost] = useUpdate_PostMutation();
    const { data: session } = useSession();
    const [statePost] = useState(post.data || {});
    const handleSave = async ({ title, id, content }: { id: string; title: string; content: string }) => {
        try {
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
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Wrapper>
            {statePost ? <FormPost onSave={handleSave} post={statePost} /> : <h1>Sem posts para mostrar</h1>}
        </Wrapper>
    );
}
