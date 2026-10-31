import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { GlassCard } from '@/components/ui/GlassCard';
import { inContainer, withAurora } from '../fixtures';

const meta = {
  title: 'UI/GlassCard',
  component: GlassCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [inContainer('flex min-h-[420px] items-center justify-center p-6'), withAurora],
  argTypes: {
    as: { control: 'inline-radio' },
    radius: { control: 'inline-radio' },
    children: { control: 'text' },
  },
  args: {
    radius: 'lg',
    className: 'px-10 py-8 text-center',
    children: 'Glass card',
  },
} satisfies Meta<typeof GlassCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Pill: Story = {
  args: {
    radius: 'full',
    className: 'px-6 py-3 text-center',
  },
};

/** The five corner radii the site uses */
export const Radii: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center justify-center gap-6">
      {(['sm', 'md', 'lg', 'xl', 'full'] as const).map((radius) => (
        <GlassCard key={radius} {...args} radius={radius}>
          {radius}
        </GlassCard>
      ))}
    </div>
  ),
};
