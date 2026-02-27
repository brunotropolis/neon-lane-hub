import { motion } from "framer-motion";

const flickerVariants = {
  animate: {
    opacity: [1, 0.85, 1, 0.9, 1, 1, 0.88, 1, 1, 1, 0.92, 1],
    filter: [
      "brightness(1) blur(0px)",
      "brightness(0.8) blur(0.5px)",
      "brightness(1.1) blur(0px)",
      "brightness(0.9) blur(0.3px)",
      "brightness(1) blur(0px)",
      "brightness(1) blur(0px)",
      "brightness(0.85) blur(0.4px)",
      "brightness(1.05) blur(0px)",
      "brightness(1) blur(0px)",
      "brightness(1) blur(0px)",
      "brightness(0.9) blur(0.3px)",
      "brightness(1) blur(0px)",
    ],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "linear" as const,
    },
  },
};

const HeroSection = () => (
  <section className="relative w-full flex flex-col items-center pt-10 pb-6">
    {/* Neon sign light spill onto background */}
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] -z-0"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 40%, hsl(180 100% 55% / 0.2) 0%, hsl(330 85% 60% / 0.12) 40%, transparent 70%)",
        filter: "blur(40px)",
      }}
    />

    {/* Neon sign container – looks like mounted neon tubes */}
    <motion.div
      className="relative z-10 flex flex-col items-center"
      variants={flickerVariants}
      animate="animate"
    >
      {/* Outer glow bloom */}
      <div
        className="absolute -inset-8 rounded-3xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, hsl(180 100% 55% / 0.15) 0%, hsl(330 85% 60% / 0.08) 50%, transparent 80%)",
          filter: "blur(30px)",
        }}
      />

      {/* Neon text */}
      <h1
        className="relative font-display font-900 text-3xl sm:text-4xl md:text-5xl text-center leading-tight tracking-tight px-4"
        style={{
          color: "hsl(180 100% 80%)",
          textShadow: `
            0 0 7px hsl(180 100% 70% / 0.9),
            0 0 15px hsl(180 100% 60% / 0.7),
            0 0 30px hsl(180 100% 55% / 0.5),
            0 0 60px hsl(330 85% 60% / 0.4),
            0 0 100px hsl(330 85% 60% / 0.2)
          `,
        }}
      >
        O que você
        <br />
        <span
          style={{
            color: "hsl(330 85% 75%)",
            textShadow: `
              0 0 7px hsl(330 85% 65% / 0.9),
              0 0 15px hsl(330 85% 60% / 0.7),
              0 0 30px hsl(330 85% 55% / 0.5),
              0 0 60px hsl(180 100% 55% / 0.3),
              0 0 100px hsl(180 100% 55% / 0.15)
            `,
          }}
        >
          encontra aqui?
        </span>
      </h1>

      {/* Neon tube underline */}
      <div
        className="mt-4 h-[3px] w-48 sm:w-64 rounded-full"
        style={{
          background:
            "linear-gradient(90deg, hsl(180 100% 55%), hsl(330 85% 60%), hsl(180 100% 55%))",
          boxShadow:
            "0 0 8px hsl(180 100% 55% / 0.8), 0 0 20px hsl(330 85% 60% / 0.5), 0 0 40px hsl(180 100% 55% / 0.3)",
        }}
      />
    </motion.div>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="relative z-10 mt-6 text-sm sm:text-base font-medium tracking-[0.15em] uppercase text-center px-4"
      style={{
        color: "hsl(0 0% 90%)",
        textShadow: "0 0 20px hsl(330 85% 60% / 0.3)",
      }}
    >
      Geek culture, ofertas inteligentes e vida real sem filtro.
    </motion.p>

    {/* Feature badges */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="relative z-10 flex flex-wrap justify-center gap-2 mt-6"
    >
      {[
        "Ofertas que valem a pena",
        "Cultura pop e tecnologia",
        "Bastidores da vida real",
      ].map((badge) => (
        <span
          key={badge}
          className="inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide"
          style={{
            background: "hsl(280 40% 15% / 0.6)",
            border: "1px solid hsl(280 80% 60% / 0.3)",
            color: "hsl(280 80% 75%)",
            backdropFilter: "blur(8px)",
            boxShadow:
              "0 0 15px hsl(280 80% 60% / 0.2), inset 0 0 10px hsl(280 80% 60% / 0.05)",
          }}
        >
          {badge}
        </span>
      ))}
    </motion.div>
  </section>
);

export default HeroSection;
