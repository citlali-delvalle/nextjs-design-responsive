import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Eyebrow } from '@/components/ui/Eyebrow';

const meta = {
  title: 'UI/Eyebrow',
  component: Eyebrow,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    size: { control: 'inline-radio' },
    children: { control: 'text' },
  },
  args: {
    children: 'Wildlife',
  },
} satisfies Meta<typeof Eyebrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    children: 'Expedition',
  },
};
