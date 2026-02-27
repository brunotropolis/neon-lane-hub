import { motion } from "framer-motion";

interface LinkCardProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

const LinkCard = ({ title, description, buttonText, href }: LinkCardProps) => {
  return (
    <motion.div
      className="relative rounded-2xl p-[1px] overflow-hidden group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Neon gradient border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(135deg, hsl(280 80% 60% / 0.5), hsl(200 100% 55% / 0.3), hsl(330 85% 60% / 0.5), hsl(30 100% 55% / 0.3))",
        }}
      />

      {/* Bloom glow */}
      <div
        className="absolute -inset-6 rounded-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-2xl -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(280 80% 60% / 0.2), transparent 70%)",
        }}
      />

      {/* Card surface */}
      <div
        className="relative rounded-2xl p-6 space-y-4 overflow-hidden"
        style={{
          background: "hsl(260 30% 10% / 0.7)",
          backdropFilter: "blur(20px)",
          boxShadow:
            "0 8px 40px hsl(0 0% 0% / 0.5), 0 0 30px hsl(280 80% 60% / 0.05), inset 0 1px 0 hsl(0 0% 100% / 0.08)",
        }}
      >
        {/* Inner gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, hsl(280 80% 60% / 0.05) 0%, transparent 50%, hsl(200 100% 55% / 0.03) 100%)",
          }}
        />

        {/* Top edge reflection */}
        <div
          className="absolute top-0 left-[10%] right-[10%] h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, hsl(0 0% 100% / 0.15), transparent)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 space-y-4">
          <h2
            className="font-display font-bold text-lg"
            style={{
              color: "hsl(0 0% 95%)",
              textShadow: "0 0 20px hsl(280 80% 60% / 0.3)",
            }}
          >
            {title}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-reflection group/btn inline-flex w-full items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold tracking-widest transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, hsl(260 30% 12% / 0.8), hsl(260 20% 15% / 0.6))",
              border: "1px solid hsl(30 100% 55% / 0.4)",
              color: "hsl(0 0% 92%)",
              boxShadow:
                "0 0 15px hsl(30 100% 55% / 0.15), inset 0 1px 0 hsl(0 0% 100% / 0.05)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 25px hsl(30 100% 55% / 0.35), 0 0 60px hsl(30 100% 55% / 0.15), inset 0 1px 0 hsl(0 0% 100% / 0.08)";
              e.currentTarget.style.borderColor = "hsl(30 100% 55% / 0.7)";
              e.currentTarget.style.textShadow =
                "0 0 10px hsl(30 100% 55% / 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 15px hsl(30 100% 55% / 0.15), inset 0 1px 0 hsl(0 0% 100% / 0.05)";
              e.currentTarget.style.borderColor = "hsl(30 100% 55% / 0.4)";
              e.currentTarget.style.textShadow = "none";
            }}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default LinkCard;
