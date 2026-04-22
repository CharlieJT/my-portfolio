const PageDivider = () => (
  <div className="relative w-full h-0 z-[100] overflow-visible pointer-events-none">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
    <div className="absolute inset-x-0 top-0 h-1 -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-sm" />

    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
      <div className="w-3 h-3 rotate-45 bg-primary shadow-[0_0_18px_rgba(29,161,242,0.8)]" />
      <div className="absolute w-1.5 h-1.5 rounded-full bg-white/80" />
    </div>
  </div>
);

export default PageDivider;
