import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { HeroVideo } from '@/components/HeroVideo';
import { inMediaFrame, video } from './fixtures';

const meta = {
  title: 'Components/HeroVideo',
  component: HeroVideo,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  // HeroVideo fills a clipping frame and pins its play/pause button to the frame's corner
  decorators: [inMediaFrame('mx-auto aspect-[16/9] max-w-[960px] bg-surface')],
  args: video,
} satisfies Meta<typeof HeroVideo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
