interface LinkCardProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

const LinkCard = ({ title, description, buttonText, href }: LinkCardProps) => {
  return (
    <div className="relative rounded-2xl glass-card p-[1px] overflow-hidden group">
      {/* Animated gradient border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(135deg, hsl(280 80% 60% / 0.3), hsl(200 100% 55% / 0.2), hsl(330 85% 60% / 0.3), hsl(30 100% 55% / 0.2))",
        }}
      />

      {/* Bloom glow behind card */}
      <div
        className="absolute -inset-4 rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 blur-xl -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(280 80% 60% / 0.15), transparent 70%)",
        }}
      />

      <div className="relative rounded-2xl bg-card/60 backdrop-blur-xl p-6 space-y-4 overflow-hidden">
        {/* Internal gradient overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/8 via-transparent to-accent/5 pointer-events-none" />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />

        {/* Top edge light reflection */}
        <div
          className="absolute top-0 left-[10%] right-[10%] h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, hsl(0 0% 100% / 0.12), transparent)",
          }}
        />

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
            className="btn-reflection group/btn inline-flex w-full items-center justify-center rounded-xl border px-6 py-3.5 text-sm font-bold tracking-widest text-foreground transition-all duration-300 hover:neon-bloom-orange bg-gradient-to-r from-muted/60 to-muted/40 backdrop-blur-sm"
            style={{
              borderColor: "hsl(30 100% 55% / 0.4)",
            }}
          >
            <span className="relative z-10 transition-all duration-300 group-hover/btn:neon-text-orange">
              {buttonText}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
