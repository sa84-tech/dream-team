import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { UserDetailsPage } from './UserDetailsPage';

export default {
    title: 'pages/UserDetailsPage',
    component: UserDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    }
} as ComponentMeta<typeof UserDetailsPage>;

const Template: ComponentStory<typeof UserDetailsPage> = (args) => (
    <UserDetailsPage {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
