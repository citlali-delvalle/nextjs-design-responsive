import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Hero } from '@/components/Hero';
import { actions, withAurora } from './fixtures';

const meta = {
  title: 'Components/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withAurora],
  args: {
    badge: 'Photography · 2026',
    title: 'Through the lens.',
    subtitle: 'Landscapes, cities and the quiet details in between.',
    actions,
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SingleAction: Story = {
  args: {
    actions: [actions[0]],
  },
};
