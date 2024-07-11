import { type Meta, type StoryObj } from '@storybook/react';

import { SubmitButton } from './SubmitButton';

type T = typeof SubmitButton;

export default {
  component: SubmitButton,
  args: {
    label: '送信',
  },
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};
