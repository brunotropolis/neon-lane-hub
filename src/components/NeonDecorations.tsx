import { motion } from "framer-motion";

const NeonDecorations = () => (
  <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
    {/* Horizontal light streaks */}
    <motion.div
      className="absolute top-[18%] left-0 w-full h-px"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, hsl(280 80% 60% / 0.15) 30%, hsl(200 100% 55% / 0.2) 50%, hsl(330 85% 60% / 0.15) 70%, transparent 100%)",
      }}
      animate={{ opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-[55%] left-0 w-full h-px"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, hsl(30 100% 55% / 0.12) 40%, hsl(280 80% 60% / 0.18) 60%, transparent 100%)",
      }}
      animate={{ opacity: [0.2, 0.5, 0.2] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    />
    <motion.div
      className="absolute top-[82%] left-0 w-full h-px"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, hsl(200 100% 55% / 0.1) 20%, hsl(330 85% 60% / 0.15) 80%, transparent 100%)",
      }}
      animate={{ opacity: [0.15, 0.4, 0.15] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
    />

    {/* Geometric diamond shapes */}
    <motion.div
      className="absolute top-[12%] right-[8%] w-8 h-8 border border-primary/10 rotate-45"
      animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-[45%] left-[5%] w-6 h-6 border border-accent/10 rotate-45"
      animate={{ opacity: [0.08, 0.25, 0.08], scale: [1, 1.15, 1] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
    <motion.div
      className="absolute top-[70%] right-[12%] w-5 h-5 border border-secondary/10 rotate-45"
      animate={{ opacity: [0.1, 0.2, 0.1] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
    />

    {/* Vertical neon accent lines */}
    <div
      className="absolute top-0 left-[15%] w-px h-full"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, hsl(280 80% 60% / 0.06) 30%, hsl(280 80% 60% / 0.03) 70%, transparent 100%)",
      }}
    />
    <div
      className="absolute top-0 right-[15%] w-px h-full"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, hsl(200 100% 55% / 0.05) 40%, hsl(200 100% 55% / 0.03) 60%, transparent 100%)",
      }}
    />

    {/* Corner glow accents */}
    <div
      className="absolute top-0 left-0 w-32 h-32"
      style={{
        background:
          "radial-gradient(circle at 0% 0%, hsl(280 80% 60% / 0.08) 0%, transparent 70%)",
      }}
    />
    <div
      className="absolute top-0 right-0 w-32 h-32"
      style={{
        background:
          "radial-gradient(circle at 100% 0%, hsl(200 100% 55% / 0.06) 0%, transparent 70%)",
      }}
    />
    <div
      className="absolute bottom-0 left-0 w-48 h-48"
      style={{
        background:
          "radial-gradient(circle at 0% 100%, hsl(330 85% 60% / 0.06) 0%, transparent 70%)",
      }}
    />
    <div
      className="absolute bottom-0 right-0 w-48 h-48"
      style={{
        background:
          "radial-gradient(circle at 100% 100%, hsl(30 100% 55% / 0.05) 0%, transparent 70%)",
      }}
    />

    {/* Floating small circles / orbs */}
    <motion.div
      className="absolute top-[30%] left-[80%] w-2 h-2 rounded-full"
      style={{
        background: "hsl(280 80% 60%)",
        boxShadow: "0 0 12px hsl(280 80% 60% / 0.5)",
      }}
      animate={{ y: [0, -15, 0], opacity: [0.2, 0.6, 0.2] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-[65%] left-[10%] w-1.5 h-1.5 rounded-full"
      style={{
        background: "hsl(200 100% 55%)",
        boxShadow: "0 0 10px hsl(200 100% 55% / 0.5)",
      }}
      animate={{ y: [0, -20, 0], opacity: [0.15, 0.5, 0.15] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    />
    <motion.div
      className="absolute top-[85%] left-[70%] w-1 h-1 rounded-full"
      style={{
        background: "hsl(330 85% 60%)",
        boxShadow: "0 0 8px hsl(330 85% 60% / 0.5)",
      }}
      animate={{ y: [0, -10, 0], opacity: [0.1, 0.4, 0.1] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
  </div>
);

export default NeonDecorations;
