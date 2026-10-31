import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ParallaxLayer } from '@/components/ui/ParallaxLayer';
import { inMediaFrame } from '../fixtures';

const meta = {
  title: 'UI/ParallaxLayer',
  component: ParallaxLayer,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  decorators: [inMediaFrame('mx-auto aspect-[16/9] max-w-[960px] bg-surface')],
  argTypes: {
    children: { control: false },
  },
  args: {
    // Any media works inside the layer; a plain gradient makes the extra height easy to see
    children: <div className="h-full w-full bg-linear-to-b from-[#a8d8ff] via-[#d9ccff] to-[#ffc9e4]" />,
  },
} satisfies Meta<typeof ParallaxLayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
