/* Soft color fields behind the page so the glass always has something to refract */
export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <div className="absolute -top-40 left-[8%] h-[520px] w-[520px] rounded-full bg-[#a8d8ff] opacity-50 blur-[120px]" />
      <div className="absolute -top-20 right-[6%] h-[460px] w-[460px] rounded-full bg-[#ffc9e4] opacity-50 blur-[120px]" />
      <div className="absolute top-40 left-[40%] h-[380px] w-[380px] rounded-full bg-[#d9ccff] opacity-40 blur-[120px]" />
    </div>
  );
}
