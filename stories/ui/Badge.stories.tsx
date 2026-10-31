import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Badge } from '@/components/ui/Badge';
import { inContainer, withAurora } from '../fixtures';

const meta = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [inContainer('flex min-h-[420px] items-center justify-center'), withAurora],
  argTypes: {
    size: { control: 'inline-radio' },
    children: { control: 'text' },
  },
  args: {
    children: 'Mountain lake · Film',
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** The tighter size used above the hero title, with muted text */
export const Small: Story = {
  args: {
    children: 'Photography · 2026',
    size: 'sm',
    className: 'text-muted',
  },
};
