import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { FeatureTile } from '@/components/FeatureTile';
import { images, imageArgType } from './fixtures';

const meta = {
  title: 'Components/FeatureTile',
  component: FeatureTile,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    image: imageArgType,
  },
  args: {
    title: 'Wild',
    tagline: 'Eye to eye. Nothing in between.',
    category: 'Wildlife',
    image: images.lioness,
    alt: 'Close-up portrait of a lioness staring into the camera',
    actions: [
      { label: 'View series', href: '#work', primary: true },
      { label: 'Get prints', href: '#contact' },
    ],
  },
} satisfies Meta<typeof FeatureTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SingleAction: Story = {
  args: {
    actions: [{ label: 'View series', href: '#work', primary: true }],
  },
};

export const Mobile: Story = {
  globals: { viewport: { value: 'mobile1', isRotated: false } },
};
