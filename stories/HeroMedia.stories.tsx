import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { HeroMedia } from '@/components/HeroMedia';
import { video } from './fixtures';

const meta = {
  title: 'Components/HeroMedia',
  component: HeroMedia,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    video,
    caption: 'Mountain lake · Film',
  },
} satisfies Meta<typeof HeroMedia>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = {
  globals: { viewport: { value: 'mobile1', isRotated: false } },
};
