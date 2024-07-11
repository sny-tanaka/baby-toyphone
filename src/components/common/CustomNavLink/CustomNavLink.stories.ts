import { type Meta, type StoryObj } from '@storybook/react';

import { CustomNavLink } from './CustomNavLink';

type T = typeof CustomNavLink;

export default {
  component: CustomNavLink,
  args: {
    to: '/',
  },
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};
