import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { Button } from '@/components/ui/Button';
import { inContainer, withAurora } from '../fixtures';

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  // Glass needs color behind it to refract
  decorators: [inContainer('flex min-h-[420px] items-center justify-center'), withAurora],
  argTypes: {
    children: { control: 'text' },
    variant: { control: 'inline-radio' },
    size: { control: 'inline-radio' },
  },
  args: {
    children: 'Get in touch',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Secondary: Story = {
  args: {
    href: '#contact',
  },
};

export const Primary: Story = {
  args: {
    href: '#contact',
    variant: 'primary',
  },
};

/** Without an `href` it renders a <button> */
export const AsButton: Story = {
  args: {
    onClick: fn(),
  },
};
