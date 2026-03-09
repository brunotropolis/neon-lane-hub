import { motion } from "framer-motion";
import SynthwaveGrid from "@/components/SynthwaveGrid";
import FloatingParticles from "@/components/FloatingParticles";
import NeonDecorations from "@/components/NeonDecorations";
import HeroSection from "@/components/HeroSection";
import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import SocialIcons from "@/components/SocialIcons";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <SynthwaveGrid />
      <FloatingParticles />
      <NeonDecorations />
      <div className="noise-overlay absolute inset-0 pointer-events-none z-[1]" />

      <main className="relative z-10 mx-auto max-w-md px-5 pt-6 pb-28 flex flex-col items-center gap-6">
        {/* HERO – neon sign headline */}
        <HeroSection />

        {/* CARDS */}
        <section className="w-full space-y-5">
          <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible" className="w-full">
            <LinkCard
              title="MANUAL DO GEEK"
              subtitle="canal do whatsapp"
              description={"🚀 Cultura geek e novidades do mundo pop direto no seu WhatsApp.\n\nMemes, curiosidades e descobertas que todo geek gosta de acompanhar. 🎮🍿\n\nE quando aparece um produto interessante, um cupom inesperado ou um achadinho que vale o upgrade… você fica sabendo por aqui. 👇"}
              buttonText="CONFIRA AQUI"
              href="https://whatsapp.com/channel/0029Vb6yv9NKmCPV7OPXad3j"
            />
          </motion.div>

          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="w-full">
            <LinkCard
              title="BUSCADOR GEEK"
              subtitle="grupos do whatsapp"
              description={"🏛️ O lugar onde os bons achados da internet aparecem primeiro.\n\nAqui eu garimpo nas principais plataformas produtos úteis, interessantes e que fazem sentido no dia a dia.\n\nDe tecnologia que facilita a vida a achadinhos para casa, descanso ou lazer.\n\nQuando surge uma oportunidade boa de verdade, ela aparece por aqui primeiro. 🚀"}
              buttonText="CONFIRA AQUI"
              href="https://sndflw.com/i/Bz1pJNeognZTuxupwSF4"
            />
          </motion.div>
        </section>

        {/* ABOUT */}
        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible">
          <ProfileHeader />
        </motion.div>

        {/* SOCIAL */}
        <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible">
          <SocialIcons />
        </motion.div>

        {/* FOOTER */}
        <motion.div custom={6} variants={fadeUp} initial="hidden" animate="visible" className="w-full">
          <Footer />
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
