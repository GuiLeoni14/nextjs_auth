import { Story } from '@storybook/react/types-6-0';
import { Footer } from '.';

export default {
    title: 'Footer',
    component: Footer,
};

export const Template: Story = () => {
    return (
        <div>
            <Footer />
        </div>
    );
};
