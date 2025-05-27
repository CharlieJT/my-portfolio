type DividerProps = { hasAnimated: boolean; style?: React.CSSProperties };

const Divider = ({ hasAnimated, style }: DividerProps) => (
  <div
    className={`w-16 h-1 bg-primary mx-auto mt-4 transition-all duration-1000 ${
      hasAnimated ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
    }`}
    style={{ transitionDelay: "0.3s", ...style }}
  ></div>
);

export default Divider;
