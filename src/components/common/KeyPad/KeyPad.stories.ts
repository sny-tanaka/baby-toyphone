import { type Meta, type StoryObj } from '@storybook/react';

import { KeyPad } from './KeyPad';

type T = typeof KeyPad;

export default {
  component: KeyPad,
  args: {},
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};
