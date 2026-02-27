const Footer = () => {
  return (
    <footer className="w-full pt-6 flex flex-col items-center gap-4">
      {/* Gradient divider */}
      <div className="gradient-divider w-32" />

      <div className="text-center text-xs text-muted-foreground space-y-1">
        <p className="font-medium text-foreground/70">Parcerias & Publicidade</p>
        <a
          href="mailto:contato@brunotropolis.com.br"
          className="transition-colors duration-300 hover:text-accent"
        >
          contato@brunotropolis.com.br
        </a>
      </div>
    </footer>
  );
};

export default Footer;
