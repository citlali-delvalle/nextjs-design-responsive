import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { GridTile } from '@/components/GridTile';
import { imageArgType, inContainer, linkedProject } from './fixtures';

const meta = {
  title: 'Components/GridTile',
  component: GridTile,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  // Tiles fill their grid column
  decorators: [inContainer('mx-auto max-w-[680px]')],
  argTypes: {
    image: imageArgType,
  },
  args: linkedProject,
} satisfies Meta<typeof GridTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** The tagline truncates with an ellipsis instead of wrapping */
export const LongTagline: Story = {
  args: {
    tagline: 'Altitude, quietly, from the first light on the ridge to the last light at camp.',
  },
};
