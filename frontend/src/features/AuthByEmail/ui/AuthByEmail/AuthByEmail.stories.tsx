import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AuthByEmail } from './AuthByEmail';

export default {
    title: 'features/AuthByEmail',
    component: AuthByEmail,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AuthByEmail>;

const Template: ComponentStory<typeof AuthByEmail> = (args) => <AuthByEmail {...args} />;

export const Normal = Template.bind({});
Normal.args = {
   
};