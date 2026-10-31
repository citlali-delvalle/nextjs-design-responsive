import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ParallaxImage } from '@/components/ui/ParallaxImage';
import { imageArgType, images, inMediaFrame } from '../fixtures';

const meta = {
  title: 'UI/ParallaxImage',
  component: ParallaxImage,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  // The image fills its frame and drifts inside it as the page scrolls
  decorators: [inMediaFrame('mx-auto aspect-[16/9] max-w-[960px] bg-surface')],
  argTypes: {
    src: imageArgType,
  },
  args: {
    src: images.valley,
    alt: 'Granite cliffs rising above pine trees and a calm river',
    sizes: '960px',
  },
} satisfies Meta<typeof ParallaxImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** `className` reaches the <img>, e.g. for the hover zoom the grid tiles use */
export const HoverZoom: Story = {
  args: {
    className: 'transition-transform duration-700 ease-out hover:scale-[1.04]',
  },
};
