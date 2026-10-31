/* The drifting layer inside a MediaFrame; wrap any media (image, video) in it */
export function ParallaxLayer({ children }: { children: React.ReactNode }) {
  return <div className="parallax-layer">{children}</div>;
}
