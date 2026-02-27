interface LinkCardProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

const LinkCard = ({ title, description, buttonText, href }: LinkCardProps) => {
  return (
    <div className="rounded-xl border border-border bg-card/60 backdrop-blur-sm p-6 space-y-4">
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
        className="group inline-flex w-full items-center justify-center rounded-lg border border-neon-orange bg-muted/50 px-6 py-3 text-sm font-bold tracking-widest text-foreground transition-all duration-300 hover:neon-glow-orange hover:border-neon-orange-bright hover:bg-muted/80"
        style={{
          borderColor: "hsl(30 100% 55% / 0.5)",
        }}
      >
        <span className="transition-all duration-300 group-hover:neon-text-orange">
          {buttonText}
        </span>
      </a>
    </div>
  );
};

export default LinkCard;
