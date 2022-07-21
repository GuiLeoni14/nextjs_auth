import { FormEvent, useEffect, useState } from 'react';
import { Post, PostEntity, PostEntityResponse } from '../../graphql/generated';
import { Button } from '../Button';
import { TextInput } from '../TextInput';

export interface IFormPostProps {
    onSave?: (post: Post & { id: string }) => Promise<void>;
    post?: PostEntity;
}

export const FormPost = ({ post, onSave }: IFormPostProps) => {
    const [newTitle, setNewTitle] = useState(post?.attributes?.title || '');
    const [newContent, setNewContent] = useState(post?.attributes?.content || '');
    const [isSaving, setIsSaving] = useState(false);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        if (onSave) {
            setIsSaving(true);
            await onSave({ id: post?.id || '', content: newContent, title: newTitle });
            setIsSaving(false);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextInput
                name="post-title"
                label="Post Title"
                value={newTitle}
                onInputChange={(value) => setNewTitle(value)}
            />
            <TextInput
                name="post-content"
                label="Post Content"
                as="textarea"
                value={newContent}
                onInputChange={(value) => setNewContent(value)}
            />
            <Button type="submit" disabled={isSaving}>
                {isSaving ? 'Salvando' : 'Salvar'}
            </Button>
        </form>
    );
};
