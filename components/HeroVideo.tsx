"use client";

import { useEffect, useRef, useState } from "react";
import { PlayPauseButton } from "@/components/PlayPauseButton";
import { ParallaxLayer } from "@/components/ui/ParallaxLayer";

export type HeroVideoProps = {
  src: string;
  poster: string;
  /** Accessible description of the video itself */
  label: string;
  /** Accessible names for the play/pause button */
  playLabel: string;
  pauseLabel: string;
};

/*
 * Muted, looping background video with an Apple-style glass play/pause control.
 * Playback starts from an effect (not the autoPlay attribute) so visitors who
 * prefer reduced motion see the poster frame until they press play.
 */
export function HeroVideo({ src, poster, label, playLabel, pauseLabel }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Autoplay can still be blocked (e.g. Low Power Mode); the button stays usable.
    video.play().catch(() => {});
  }, []);

  function toggle() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  }

  return (
    <>
      <ParallaxLayer>
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          poster={poster}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={label}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          <source src={src} type="video/mp4" />
        </video>
      </ParallaxLayer>
      <PlayPauseButton
        playing={playing}
        onToggle={toggle}
        playLabel={playLabel}
        pauseLabel={pauseLabel}
        className="absolute right-4 bottom-4 z-10 md:right-6 md:bottom-6"
      />
    </>
  );
}
