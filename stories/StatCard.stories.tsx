import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { StatCard } from '@/components/StatCard';
import { inContainer } from './fixtures';

const meta = {
  title: 'Components/StatCard',
  component: StatCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  // StatCard renders a <dt>/<dd> pair, so it needs a <dl> around it
  decorators: [inContainer('mx-auto max-w-[320px]', 'dl')],
  args: {
    value: '14',
    label: 'Countries photographed',
  },
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
