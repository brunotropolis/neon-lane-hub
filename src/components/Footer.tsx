const Footer = () => {
  return (
    <footer className="w-full pt-6 flex flex-col items-center gap-4">
      {/* Gradient divider */}
      <div className="gradient-divider w-32" />

      <div className="text-center space-y-2">
        <p
          className="font-medium text-sm tracking-wide"
          style={{
            color: "hsl(0 0% 80%)",
            textShadow: "0 0 10px hsl(280 80% 60% / 0.2)",
          }}
        >
          Parcerias & Publicidade
        </p>
        <a
          href="mailto:contato@brunotropolis.com.br"
          className="text-base font-medium transition-all duration-300 inline-block"
          style={{
            color: "#FFFFFF",
            textShadow: "0 0 8px hsl(180 100% 55% / 0.3)",
            textDecoration: "none",
            borderBottom: "1px solid hsl(180 100% 55% / 0.4)",
            paddingBottom: "2px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderBottomColor = "hsl(180 100% 55% / 0.8)";
            e.currentTarget.style.textShadow = "0 0 15px hsl(180 100% 55% / 0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderBottomColor = "hsl(180 100% 55% / 0.4)";
            e.currentTarget.style.textShadow = "0 0 8px hsl(180 100% 55% / 0.3)";
          }}
        >
          contato@brunotropolis.com.br
        </a>
      </div>
    </footer>
  );
};

export default Footer;
