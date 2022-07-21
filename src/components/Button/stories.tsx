import { Meta, Story } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from '.';

export default {
    title: 'Button',
    component: Button,
    args: {
        children: 'Texto do botão',
    },
    decorators: [
        (Story) => {
            return (
                <div style={{ padding: '3.2rem' }}>
                    <Story />
                </div>
            );
        },
    ],
    argTypes: {
        icon: {
            type: 'string',
        },
    },
} as Meta<ButtonProps>;

export const Template: Story<ButtonProps> = (args) => {
    return (
        <div>
            <Button {...args} />
        </div>
    );
};
