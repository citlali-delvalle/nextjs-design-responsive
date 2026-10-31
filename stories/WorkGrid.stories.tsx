import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { WorkGrid } from '@/components/WorkGrid';
import { linkedProjects } from './fixtures';

const meta = {
  title: 'Components/WorkGrid',
  component: WorkGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    id: 'work',
    heading: 'Selected work',
    projects: linkedProjects,
  },
} satisfies Meta<typeof WorkGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** One column on phones */
export const Mobile: Story = {
  globals: { viewport: { value: 'mobile1', isRotated: false } },
};
