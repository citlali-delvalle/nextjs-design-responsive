import { IconButton } from "@/components/ui/IconButton";
import { PauseIcon, PlayIcon } from "@/components/ui/icons";

type PlayPauseButtonProps = {
  playing: boolean;
  onToggle: () => void;
  /** Accessible names for each state; the label describes the action, not the current state */
  playLabel: string;
  pauseLabel: string;
  className?: string;
};

export function PlayPauseButton({ playing, onToggle, playLabel, pauseLabel, className }: PlayPauseButtonProps) {
  return (
    <IconButton label={playing ? pauseLabel : playLabel} onClick={onToggle} className={className}>
      {playing ? <PauseIcon /> : <PlayIcon />}
    </IconButton>
  );
}
