import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface LinkCardProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  href: string;
}

const LinkCard = ({ title, subtitle, description, buttonText, href }: LinkCardProps) => {
  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Thick neon border glow – cyan to magenta */}
      <div
        className="absolute -inset-[2px] rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, hsl(180 100% 55%), hsl(280 80% 60%), hsl(330 85% 60%), hsl(180 100% 55%))",
          boxShadow:
            "0 0 15px hsl(180 100% 55% / 0.4), 0 0 40px hsl(330 85% 60% / 0.25), 0 0 80px hsl(280 80% 60% / 0.15)",
        }}
      />

      {/* Outer bloom on hover */}
      <div
        className="absolute -inset-8 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(280 80% 60% / 0.2), hsl(180 100% 55% / 0.1), transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* Card surface – semi-transparent dark */}
      <div
        className="relative rounded-2xl p-6 space-y-4 overflow-hidden"
        style={{
          background: "hsl(260 30% 8% / 0.85)",
          backdropFilter: "blur(20px)",
          boxShadow:
            "inset 0 2px 0 hsl(0 0% 100% / 0.08), inset 0 0 40px hsl(280 80% 60% / 0.05), 0 20px 60px hsl(0 0% 0% / 0.5)",
        }}
      >
        {/* Inner gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, hsl(180 100% 55% / 0.04) 0%, transparent 50%, hsl(330 85% 60% / 0.03) 100%)",
          }}
        />

        {/* Top edge reflection */}
        <div
          className="absolute top-0 left-[10%] right-[10%] h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, hsl(0 0% 100% / 0.2), transparent)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 space-y-4">
          {/* Title block */}
          <div className="flex items-start gap-2 text-left">
            <MessageCircle
              className="w-6 h-6 flex-shrink-0 mt-1"
              style={{
                color: "#39FF14",
                filter: "drop-shadow(0 0 6px hsl(120 100% 50% / 0.6)) drop-shadow(0 0 15px hsl(120 100% 50% / 0.3))",
              }}
            />
            <div>
              <h2
                className="font-display font-extrabold text-xl sm:text-2xl uppercase tracking-[0.06em] text-left m-0 p-0"
                style={{
                  color: "hsl(0 0% 95%)",
                  textShadow:
                    "0 0 10px hsl(180 100% 55% / 0.5), 0 0 25px hsl(330 85% 60% / 0.3), 0 2px 4px hsl(0 0% 0% / 0.4)",
                }}
              >
                {title}
              </h2>
              <span
                className="block text-sm sm:text-base font-medium mt-1 text-left m-0 p-0"
                style={{
                  color: "hsl(0 0% 80%)",
                  textShadow: "0 0 8px hsl(180 100% 55% / 0.2)",
                }}
              >
                {subtitle}
              </span>
            </div>
          </div>

          {/* Description – pure white, larger */}
          <p
            className="text-[15px] sm:text-base leading-relaxed"
            style={{ color: "#FFFFFF" }}
          >
            {description}
          </p>

          {/* NEON GREEN button */}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-reflection group/btn inline-flex w-full items-center justify-center rounded-xl px-6 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, hsl(120 100% 35% / 0.2), hsl(120 100% 40% / 0.15))",
              border: "2px solid hsl(120 100% 50% / 0.8)",
              color: "#39FF14",
              boxShadow:
                "0 0 15px hsl(120 100% 50% / 0.4), 0 0 40px hsl(120 100% 50% / 0.15), inset 0 0 20px hsl(120 100% 50% / 0.08), inset 0 1px 0 hsl(0 0% 100% / 0.1)",
              textShadow:
                "0 0 10px hsl(120 100% 50% / 0.8), 0 0 30px hsl(120 100% 50% / 0.4)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 25px hsl(120 100% 50% / 0.6), 0 0 60px hsl(120 100% 50% / 0.3), 0 0 100px hsl(120 100% 50% / 0.15), inset 0 0 30px hsl(120 100% 50% / 0.12), inset 0 1px 0 hsl(0 0% 100% / 0.15)";
              e.currentTarget.style.borderColor = "hsl(120 100% 55%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 15px hsl(120 100% 50% / 0.4), 0 0 40px hsl(120 100% 50% / 0.15), inset 0 0 20px hsl(120 100% 50% / 0.08), inset 0 1px 0 hsl(0 0% 100% / 0.1)";
              e.currentTarget.style.borderColor = "hsl(120 100% 50% / 0.8)";
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
