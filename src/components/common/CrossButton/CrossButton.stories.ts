import { type Meta, type StoryObj } from '@storybook/react';

import { CrossButton } from './CrossButton';

type T = typeof CrossButton;

export default {
  component: CrossButton,
  args: {},
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};
