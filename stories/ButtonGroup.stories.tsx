import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ButtonGroup } from '@/components/ButtonGroup';
import { actions, inContainer, withAurora } from './fixtures';

const meta = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [inContainer('flex min-h-[420px] items-center justify-center'), withAurora],
  args: {
    actions,
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/** An action with `primary: true` renders as the solid blue button */
export const Default: Story = {};

export const SingleAction: Story = {
  args: {
    actions: [actions[0]],
  },
};
