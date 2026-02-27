import { motion } from "framer-motion";
import profileImg from "@/assets/profile.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" as const },
  }),
};

const HeroSection = () => (
  <section className="relative w-full flex flex-col items-center pt-8 pb-4">
    {/* Portrait glow backdrop */}
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px]"
      style={{
        background:
          "radial-gradient(ellipse at 50% 60%, hsl(330 85% 60% / 0.25) 0%, hsl(30 100% 55% / 0.1) 40%, transparent 70%)",
        filter: "blur(40px)",
      }}
    />

    {/* Large portrait – not circular, integrated into neon environment */}
    <motion.div
      custom={0}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="relative z-10 mb-6"
    >
      {/* Rim light glow */}
      <div
        className="absolute -inset-2 rounded-2xl"
        style={{
          background:
            "linear-gradient(180deg, hsl(280 80% 60% / 0.4), hsl(330 85% 60% / 0.3), hsl(30 100% 55% / 0.2))",
          filter: "blur(16px)",
        }}
      />
      <div
        className="absolute -inset-1 rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, hsl(280 80% 60% / 0.5), hsl(330 85% 60% / 0.4), hsl(200 100% 55% / 0.3))",
        }}
      />
      <img
        src={profileImg}
        alt="Bruno Sampaio"
        className="relative w-48 h-60 sm:w-56 sm:h-72 object-cover rounded-2xl"
        style={{
          boxShadow:
            "0 0 40px hsl(330 85% 60% / 0.3), 0 0 80px hsl(280 80% 60% / 0.15), 0 20px 60px hsl(0 0% 0% / 0.5)",
        }}
      />
    </motion.div>

    {/* Name – gradient text */}
    <motion.h1
      custom={1}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="relative z-10 font-display font-900 text-4xl sm:text-5xl leading-tight text-center"
      style={{
        background:
          "linear-gradient(135deg, hsl(280 80% 70%), hsl(200 100% 65%), hsl(280 80% 60%))",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        filter:
          "drop-shadow(0 0 20px hsl(280 80% 60% / 0.4)) drop-shadow(0 0 40px hsl(200 100% 55% / 0.2))",
      }}
    >
      Bruno Sampaio
    </motion.h1>

    {/* Tagline */}
    <motion.p
      custom={2}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="relative z-10 mt-3 text-sm sm:text-base font-medium tracking-[0.15em] uppercase text-center"
      style={{
        color: "hsl(0 0% 85%)",
        textShadow: "0 0 20px hsl(330 85% 60% / 0.3)",
      }}
    >
      Pai, marido, empresário & geek funcional
    </motion.p>

    {/* Feature badges */}
    <motion.div
      custom={3}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
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
