import { motion } from "framer-motion";

const SynthwaveGrid = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Deep gradient sky */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(180deg, hsl(260 40% 8%) 0%, hsl(270 50% 12%) 25%, hsl(280 60% 18%) 45%, hsl(320 50% 20%) 55%, hsl(30 60% 25% / 0.3) 65%, hsl(260 40% 8%) 100%)",
      }}
    />

    {/* Horizon glow – warm sun bloom */}
    <div
      className="absolute left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
      style={{
        top: "45%",
        background:
          "radial-gradient(ellipse 70% 50% at 50% 100%, hsl(330 85% 60% / 0.35) 0%, hsl(30 100% 55% / 0.15) 40%, transparent 70%)",
      }}
    />
    <div
      className="absolute left-1/2 -translate-x-1/2 w-[600px] h-[250px]"
      style={{
        top: "50%",
        background:
          "radial-gradient(ellipse 60% 40% at 50% 100%, hsl(330 85% 60% / 0.5) 0%, hsl(280 80% 60% / 0.1) 60%, transparent 80%)",
      }}
    />

    {/* Perspective grid – CSS only */}
    <div
      className="absolute left-0 right-0 bottom-0"
      style={{
        height: "50%",
        perspective: "400px",
        perspectiveOrigin: "50% 0%",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          transform: "rotateX(60deg)",
          transformOrigin: "top center",
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              hsl(330 85% 60% / 0.25) 0px,
              transparent 1px,
              transparent 60px
            ),
            repeating-linear-gradient(
              0deg,
              hsl(330 85% 60% / 0.2) 0px,
              transparent 1px,
              transparent 40px
            )
          `,
          backgroundSize: "60px 40px",
        }}
      />
      {/* Grid fade to horizon */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(260 40% 8% / 0.9) 0%, transparent 40%, transparent 80%, hsl(260 40% 8% / 0.6) 100%)",
        }}
      />
    </div>

    {/* Horizontal neon horizon line */}
    <motion.div
      className="absolute left-0 right-0 h-[2px]"
      style={{
        top: "50%",
        background:
          "linear-gradient(90deg, transparent 5%, hsl(330 85% 60% / 0.6) 20%, hsl(330 85% 60% / 0.9) 50%, hsl(330 85% 60% / 0.6) 80%, transparent 95%)",
        boxShadow:
          "0 0 20px hsl(330 85% 60% / 0.5), 0 0 60px hsl(330 85% 60% / 0.2), 0 0 100px hsl(330 85% 60% / 0.1)",
      }}
      animate={{ opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Scanlines */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(0 0% 0% / 0.03) 2px, hsl(0 0% 0% / 0.03) 4px)",
      }}
    />

    {/* Stars in upper sky */}
    {Array.from({ length: 30 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: Math.random() * 2 + 1,
          height: Math.random() * 2 + 1,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 45}%`,
          background: "hsl(0 0% 100%)",
        }}
        animate={{ opacity: [0.2, 0.8, 0.2] }}
        transition={{
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

export default SynthwaveGrid;
