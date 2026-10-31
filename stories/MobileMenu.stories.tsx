import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { expect, userEvent, within } from 'storybook/test';

import { MobileMenu } from '@/components/MobileMenu';
import { inContainer, navLinks, withAurora } from './fixtures';

const meta = {
  title: 'Components/MobileMenu',
  component: MobileMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  // The open panel is absolutely positioned against the nearest relative parent
  decorators: [inContainer('relative mx-auto min-h-[360px] max-w-[375px] p-3'), withAurora],
  args: {
    links: navLinks,
    label: 'Menu',
  },
} satisfies Meta<typeof MobileMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {};

export const Open: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText(args.label));
    await expect(canvasElement.querySelector('details')).toHaveAttribute('open');
  },
};
