import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { MediaFrame } from '@/components/ui/MediaFrame';
import { ParallaxImage } from '@/components/ui/ParallaxImage';
import { images, inContainer } from '../fixtures';

const meta = {
  title: 'UI/MediaFrame',
  component: MediaFrame,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  decorators: [inContainer('mx-auto max-w-[960px]')],
  argTypes: {
    as: { control: 'inline-radio' },
    radius: { control: 'inline-radio' },
    children: { control: false },
  },
  args: {
    className: 'aspect-[16/9] bg-surface',
    children: (
      <ParallaxImage
        src={images.valley}
        alt="Granite cliffs rising above pine trees and a calm river"
        sizes="960px"
      />
    ),
  },
} satisfies Meta<typeof MediaFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** 28px corners on phones, growing to 36px from the md breakpoint */
export const LargeRadius: Story = {
  args: {
    radius: 'xl',
  },
};
