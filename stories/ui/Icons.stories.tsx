import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { MenuIcon, PauseIcon, PlayIcon } from '@/components/ui/icons';

const meta = {
  title: 'UI/Icons',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

function Swatch({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <li className="flex w-28 flex-col items-center gap-3 text-xs text-muted">
      <span className="flex size-14 items-center justify-center rounded-2xl bg-surface text-foreground">
        {children}
      </span>
      {name}
    </li>
  );
}

export const Gallery: Story = {
  render: () => (
    <ul className="flex flex-wrap justify-center gap-6">
      <Swatch name="PlayIcon">
        <PlayIcon />
      </Swatch>
      <Swatch name="PauseIcon">
        <PauseIcon />
      </Swatch>
      <Swatch name="MenuIcon">
        <MenuIcon />
      </Swatch>
      {/* MenuIcon animates into an X when its `details.group` ancestor is open */}
      <Swatch name="MenuIcon (open)">
        <details open className="group">
          <summary className="list-none [&::-webkit-details-marker]:hidden">
            <MenuIcon />
          </summary>
        </details>
      </Swatch>
    </ul>
  ),
};
