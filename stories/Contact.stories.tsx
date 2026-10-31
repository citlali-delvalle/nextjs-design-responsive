import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Contact } from '@/components/Contact';

const meta = {
  title: 'Components/Contact',
  component: Contact,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    id: 'contact',
    title: 'Let’s make something.',
    description: 'Available for commissions, editorial work and print sales.',
    action: { label: 'Get in touch', href: 'mailto:hello@example.com', primary: true },
  },
} satisfies Meta<typeof Contact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
