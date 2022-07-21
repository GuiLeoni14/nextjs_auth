import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FormPost } from '../../components/FormPost';
import { Wrapper } from '../../components/Wrapper';
import { useCreate_Post_1Mutation } from '../../graphql/generated';

export function CreatePostTemplate() {
    const [createPost] = useCreate_Post_1Mutation();
    const router = useRouter();
    const { data: session } = useSession();
    const handleSave = async ({ title, content }: { title: string; content: string }) => {
        try {
            const response = await createPost({
                variables: {
                    title,
                    content,
                },
                context: {
                    headers: {
                        authorization: `Bearer ${session?.accessToken}`,
                    },
                },
            });
            const { data } = response;
            if (data && data.createPost?.data) {
                router.push(`/${data.createPost?.data.id}`);
            } else {
                throw new Error('Error ao criar o post');
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Wrapper>
            <FormPost onSave={handleSave} />
        </Wrapper>
    );
}
