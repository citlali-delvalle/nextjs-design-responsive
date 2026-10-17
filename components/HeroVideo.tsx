"use client";

import { useEffect, useRef, useState } from "react";

type HeroVideoProps = {
  src: string;
  poster: string;
  label: string;
};

/*
 * Muted, looping background video with an Apple-style glass play/pause control.
 * Playback starts from an effect (not the autoPlay attribute) so visitors who
 * prefer reduced motion see the poster frame until they press play.
 */
export function HeroVideo({ src, poster, label }: HeroVideoProps) {
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
      <div className="parallax-layer">
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
      </div>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause video" : "Play video"}
        className="glass glass-pill absolute right-4 bottom-4 z-10 flex size-11 items-center justify-center rounded-full text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:right-6 md:bottom-6"
      >
        {playing ? (
          <svg aria-hidden viewBox="0 0 16 16" className="size-4 fill-current">
            <rect x="3.5" y="2.5" width="3" height="11" rx="1" />
            <rect x="9.5" y="2.5" width="3" height="11" rx="1" />
          </svg>
        ) : (
          <svg aria-hidden viewBox="0 0 16 16" className="ml-0.5 size-4 fill-current">
            <path d="M4.5 2.9v10.2a.9.9 0 0 0 1.37.77l8.2-5.1a.9.9 0 0 0 0-1.54l-8.2-5.1a.9.9 0 0 0-1.37.77Z" />
          </svg>
        )}
      </button>
    </>
  );
}
