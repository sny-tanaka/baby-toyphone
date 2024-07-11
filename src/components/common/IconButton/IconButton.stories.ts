import { type Meta, type StoryObj } from '@storybook/react';

import { IconButton } from './IconButton';

type T = typeof IconButton;

export default {
  component: IconButton,
  args: {
    icon: 'tel',
    backgroundColor: 'green',
  },
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};
