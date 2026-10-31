import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { PlayPauseButton } from '@/components/PlayPauseButton';
import { inContainer, withAurora } from './fixtures';

const meta = {
  title: 'Components/PlayPauseButton',
  component: PlayPauseButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [inContainer('flex min-h-[420px] items-center justify-center'), withAurora],
  args: {
    playing: false,
    onToggle: fn(),
    playLabel: 'Play video',
    pauseLabel: 'Pause video',
  },
} satisfies Meta<typeof PlayPauseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Paused: Story = {};

export const Playing: Story = {
  args: {
    playing: true,
  },
};
