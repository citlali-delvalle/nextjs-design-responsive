import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { About } from '@/components/About';

const meta = {
  title: 'Components/About',
  component: About,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    id: 'about',
    headline: 'Every frame starts with patience.',
    body: 'I travel slowly, wait for the light, and let the place tell its own story — from fjords and base camps to city rooftops and kitchen tables.',
    stats: [
      { value: '8', label: 'Featured series' },
      { value: '14', label: 'Countries photographed' },
      { value: '1', label: 'Camera, always' },
    ],
  },
} satisfies Meta<typeof About>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = {
  globals: { viewport: { value: 'mobile1', isRotated: false } },
};
