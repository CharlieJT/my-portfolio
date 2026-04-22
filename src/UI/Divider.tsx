type DividerProps = { hasAnimated: boolean; style?: React.CSSProperties };

const Divider = ({ hasAnimated, style }: DividerProps) => (
  <div
    className={`relative w-40 sm:w-56 h-4 mx-auto mt-4 transition-all duration-1000 ${
      hasAnimated ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
    }`}
    style={{ transitionDelay: "0.3s", ...style }}
  >
    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    <div className="absolute inset-x-10 top-1/2 -translate-y-1/2 h-1 bg-primary/30 blur-sm" />
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rotate-45 bg-primary shadow-[0_0_14px_rgba(29,161,242,0.8)]" />
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white/80" />
  </div>
);

export default Divider;
