import { motion } from "framer-motion";

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 8 + 6,
  delay: Math.random() * 4,
  color: ["primary", "secondary", "accent", "neon-orange"][i % 4],
}));

const FloatingParticles = () => (
  <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
    {particles.map((p) => (
      <motion.div
        key={p.id}
        className={`absolute rounded-full`}
        style={{
          left: `${p.x}%`,
          top: `${p.y}%`,
          width: p.size,
          height: p.size,
          background:
            p.color === "primary"
              ? "hsl(280 80% 60%)"
              : p.color === "secondary"
              ? "hsl(330 85% 60%)"
              : p.color === "accent"
              ? "hsl(200 100% 55%)"
              : "hsl(30 100% 55%)",
          boxShadow: `0 0 ${p.size * 4}px ${
            p.color === "primary"
              ? "hsl(280 80% 60% / 0.6)"
              : p.color === "secondary"
              ? "hsl(330 85% 60% / 0.6)"
              : p.color === "accent"
              ? "hsl(200 100% 55% / 0.6)"
              : "hsl(30 100% 55% / 0.6)"
          }`,
        }}
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: p.duration,
          delay: p.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

export default FloatingParticles;
