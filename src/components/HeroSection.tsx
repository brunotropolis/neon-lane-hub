import { motion } from "framer-motion";

const badges = [
  "Ofertas que valem a pena",
  "Cultura pop e tecnologia",
  "Bastidores da vida real",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const HeroSection = () => (
  <section className="w-full text-center space-y-6 relative">
    {/* Section radial glow */}
    <div
      className="absolute -inset-10 -z-10"
      style={{
        background:
          "radial-gradient(ellipse at 50% 50%, hsl(280 80% 60% / 0.08), transparent 70%)",
      }}
    />

    <motion.h1
      custom={0}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="font-display font-900 text-2xl sm:text-3xl text-foreground neon-text-purple leading-tight"
    >
      O que você vai encontrar por aqui?
    </motion.h1>

    <motion.p
      custom={1}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="text-sm text-muted-foreground max-w-xs mx-auto"
    >
      Geek culture, ofertas inteligentes e vida real sem filtro.
    </motion.p>

    <motion.div
      custom={2}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap justify-center gap-2"
    >
      {badges.map((badge) => (
        <span
          key={badge}
          className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm neon-bloom-purple"
          style={{
            boxShadow:
              "0 0 12px hsl(280 80% 60% / 0.25), 0 0 30px hsl(280 80% 60% / 0.1)",
          }}
        >
          {badge}
        </span>
      ))}
    </motion.div>
  </section>
);

export default HeroSection;
