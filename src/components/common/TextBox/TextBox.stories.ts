import { type Meta, type StoryObj } from '@storybook/react';

import { TextBox } from './TextBox';

type T = typeof TextBox;

export default {
  component: TextBox,
  args: {
    defaultValue: 'デフォルト値',
  },
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};
