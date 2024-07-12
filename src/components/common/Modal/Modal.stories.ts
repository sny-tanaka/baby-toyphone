import { type Meta, type StoryObj } from '@storybook/react';

import { Modal } from './Modal';

type T = typeof Modal;

export default {
  component: Modal,
  args: {},
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};
