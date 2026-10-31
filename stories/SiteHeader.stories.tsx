import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { expect, userEvent, within } from 'storybook/test';

import { SiteHeader } from '@/components/SiteHeader';
import { brand, navLinks, withAurora } from './fixtures';

const meta = {
  title: 'Components/SiteHeader',
  component: SiteHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    // The header is position: fixed, so docs render it in an iframe instead of pinning it to the docs page
    docs: { story: { inline: false, iframeHeight: 240 } },
  },
  decorators: [withAurora],
  args: {
    brand,
    links: navLinks,
    menuLabel: 'Menu',
  },
} satisfies Meta<typeof SiteHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** Below the `sm` breakpoint the links collapse into a menu */
export const Mobile: Story = {
  globals: { viewport: { value: 'mobile1', isRotated: false } },
};

export const MobileMenuOpen: Story = {
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText(args.menuLabel));
    await expect(canvasElement.querySelector('details')).toHaveAttribute('open');
  },
};
