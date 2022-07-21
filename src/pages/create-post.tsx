import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { PrivateComponent } from '../components/PrivateComponent';
import { PostEntityResponse } from '../graphql/generated';
import { CreatePostTemplate } from '../templates/CreatePost';
import { serverSideRedirect } from '../utils/serverSideRedirect';

export interface IPostPageProps {
    post: PostEntityResponse;
}
export default function PostPage() {
    return (
        <PrivateComponent>
            <CreatePostTemplate />
        </PrivateComponent>
    );
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const session = await getSession(ctx);
    if (!session) {
        return serverSideRedirect(ctx);
    }
    return {
        props: {},
    };
};
