import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Heading } from '@/components/ui/Heading';

const meta = {
  title: 'UI/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    as: { control: 'inline-radio' },
    size: { control: 'inline-radio' },
    children: { control: 'text' },
  },
  args: {
    size: 'title',
    children: 'Through the lens.',
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Page title */
export const Display: Story = {
  args: {
    as: 'h1',
    size: 'display',
  },
};

/** Section title */
export const Title: Story = {
  args: {
    as: 'h2',
    size: 'title',
  },
};

/** A large lead-in statement; rendered as a paragraph */
export const Statement: Story = {
  args: {
    as: 'p',
    size: 'statement',
    children: 'Every frame starts with patience.',
  },
};

/** Title inside a card */
export const Card: Story = {
  args: {
    as: 'h3',
    size: 'card',
    children: 'Basecamp',
  },
};
