import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { IconButton } from '@/components/ui/IconButton';
import { PlayIcon } from '@/components/ui/icons';
import { inContainer, withAurora } from '../fixtures';

const meta = {
  title: 'UI/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [inContainer('flex min-h-[420px] items-center justify-center'), withAurora],
  argTypes: {
    children: { control: false },
    variant: { control: 'inline-radio' },
  },
  args: {
    label: 'View Basecamp',
    children: <span aria-hidden>›</span>,
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/** With an `href` it renders a link */
export const Link: Story = {
  args: {
    href: '#contact',
  },
};

/** Without an `href` it renders a <button> */
export const AsButton: Story = {
  args: {
    label: 'Play video',
    children: <PlayIcon />,
    onClick: fn(),
  },
};

export const Primary: Story = {
  args: {
    href: '#contact',
    variant: 'primary',
  },
};
