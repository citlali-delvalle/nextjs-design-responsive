import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Aurora } from '@/components/ui/Aurora';
import { inContainer } from '../fixtures';

const meta = {
  title: 'UI/Aurora',
  component: Aurora,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  // Aurora fills its nearest positioned ancestor
  decorators: [inContainer('relative isolate h-[560px] overflow-hidden')],
  argTypes: {
    className: { control: 'text' },
  },
} satisfies Meta<typeof Aurora>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** Fades out at the top and bottom edges, as behind the contact card */
export const Masked: Story = {
  args: {
    className: '[mask-image:linear-gradient(transparent,black_35%,black_65%,transparent)]',
  },
};
