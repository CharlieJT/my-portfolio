type ButtonLinkProps = { children: React.ReactNode; href: string };

const ButtonLink = ({ children, href = "/" }: ButtonLinkProps) => (
  <a
    href={href}
    className="inline-block bg-primary text-white font-regular sm:font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-primary hover:shadow-lg transition duration-200 opacity-0 animate-bounce-in z-10 text-sm sm:text-base mt-4"
    style={{
      animationDelay: "0.8s",
      animationFillMode: "forwards",
    }}
  >
    <span className="flex items-center gap-2 text-base sm:text-lg">
      {children}
    </span>
  </a>
);

export default ButtonLink;
