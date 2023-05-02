import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { UserDetailsPageHeader } from './UserDetailsPageHeader';

export default {
    title: 'pages/UserDetailsPageHeader',
    component: UserDetailsPageHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    }
} as ComponentMeta<typeof UserDetailsPageHeader>;

const Template: ComponentStory<typeof UserDetailsPageHeader> = (args) => (
    <UserDetailsPageHeader {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
