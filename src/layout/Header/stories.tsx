import { Story } from '@storybook/react/types-6-0';
import { Header } from '.';

export default {
    title: 'Header',
    component: Header,
};

export const Template: Story = () => {
    return (
        <div>
            <Header />
        </div>
    );
};
