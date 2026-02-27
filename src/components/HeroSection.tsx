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
  <section className="relative w-full flex flex-col items-center pt-10 pb-2">
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
        className="relative font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-center leading-tight tracking-[0.08em] uppercase px-4"
        style={{
          color: "hsl(0 0% 95%)",
          WebkitTextStroke: "1px hsl(180 100% 70% / 0.4)",
          textShadow: `
            0 0 10px hsl(180 100% 70% / 0.8),
            0 0 20px hsl(180 100% 60% / 0.6),
            0 0 40px hsl(330 85% 60% / 0.5),
            0 0 80px hsl(330 85% 60% / 0.3),
            0 2px 4px hsl(0 0% 0% / 0.5)
          `,
        }}
      >
        O que você
        <br />
        <span
          style={{
            color: "hsl(330 85% 80%)",
            WebkitTextStroke: "1px hsl(330 85% 65% / 0.4)",
            textShadow: `
              0 0 10px hsl(330 85% 65% / 0.8),
              0 0 20px hsl(330 85% 60% / 0.6),
              0 0 40px hsl(180 100% 55% / 0.4),
              0 0 80px hsl(180 100% 55% / 0.2),
              0 2px 4px hsl(0 0% 0% / 0.5)
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

  </section>
);

export default HeroSection;
