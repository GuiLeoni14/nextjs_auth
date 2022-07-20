import { FormEvent, useState } from 'react';
import { Post, PostEntity } from '../../graphql/generated';
import { TextInput } from '../TextInput';

export interface IFormPostProps {
    onSave?: (post: Post & { id: string }) => Promise<void>;
    post?: PostEntity;
}

export const FormPost = ({ post, onSave }: IFormPostProps) => {
    const [newTitle, setNewTitle] = useState(post?.attributes?.title || '');
    const [newContent, setNewContent] = useState(post?.attributes?.content || '');

    const handleSubmit = async () => {
        if (onSave) {
            await onSave({ id: post?.id as string, content: newContent, title: newTitle });
        }
    };
    return (
        <form>
            <TextInput
                name="post-title"
                label="Post Title"
                value={newTitle}
                onChange={(event) => setNewTitle(event.target.value)}
            />
            <TextInput
                name="post-content"
                label="Post Content"
                as="textarea"
                value={newContent}
                onChange={(event) => setNewContent(event.target.value)}
            />
        </form>
    );
};
