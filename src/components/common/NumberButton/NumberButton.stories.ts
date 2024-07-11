import { type Meta, type StoryObj } from '@storybook/react';

import { NumberButton } from './NumberButton';

type T = typeof NumberButton;

export default {
  component: NumberButton,
  args: {
    char: '1',
  },
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};
