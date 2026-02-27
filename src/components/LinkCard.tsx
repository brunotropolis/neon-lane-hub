interface LinkCardProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

const LinkCard = ({ title, description, buttonText, href }: LinkCardProps) => {
  return (
    <div
      className="relative rounded-2xl border border-primary/20 bg-card/40 backdrop-blur-md p-6 space-y-4 overflow-hidden"
      style={{
        boxShadow:
          "0 0 20px hsl(280 80% 60% / 0.08), inset 0 1px 0 hsl(0 0% 100% / 0.05)",
      }}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

      <div className="relative z-10 space-y-4">
        <h2 className="font-display font-bold text-lg text-foreground">
          {title}
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex w-full items-center justify-center rounded-xl border px-6 py-3.5 text-sm font-bold tracking-widest text-foreground transition-all duration-300 hover:neon-glow-orange bg-gradient-to-r from-muted/60 to-muted/40 backdrop-blur-sm"
          style={{
            borderColor: "hsl(30 100% 55% / 0.4)",
          }}
        >
          <span className="transition-all duration-300 group-hover:neon-text-orange">
            {buttonText}
          </span>
        </a>
      </div>
    </div>
  );
};

export default LinkCard;
