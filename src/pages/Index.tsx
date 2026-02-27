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
      {/* Synthwave grid background */}
      <SynthwaveGrid />

      {/* Atmospheric layers */}
      <FloatingParticles />
      <NeonDecorations />

      {/* Noise texture overlay */}
      <div className="noise-overlay absolute inset-0 pointer-events-none z-[1]" />

      <main className="relative z-10 mx-auto max-w-md px-5 py-6 flex flex-col items-center gap-10">
        {/* HERO – large portrait + gradient text */}
        <HeroSection />

        {/* Gradient divider */}
        <div className="gradient-divider w-48" />

        {/* SECTION 2 – CTA PANELS */}
        <section className="w-full space-y-6">
          <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="w-full">
            <LinkCard
              title="Manual do Geek – Canal do WhatsApp"
              description="Postagens diárias do mundo geek e cultura pop. Eu localizo as melhores ofertas de produtos para você, de AirFryer, celular novo até achadinhos para dar um Level UP na sua vida."
              buttonText="CONFIRA AQUI"
              href="https://whatsapp.com/channel/0029Vb6yv9NKmCPV7OPXad3j"
            />
          </motion.div>

          <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible" className="w-full">
            <LinkCard
              title="Buscador Geek – Grupos de Ofertas"
              description="Grupos exclusivos onde busco nas melhores plataformas descontos especiais, cupons e ofertas de todos os produtos que você possa imaginar."
              buttonText="CONFIRA AQUI"
              href="https://sndflw.com/i/Bz1pJNeognZTuxupwSF4"
            />
          </motion.div>
        </section>

        {/* Gradient divider */}
        <div className="gradient-divider w-36" />

        {/* SECTION 3 – ABOUT */}
        <motion.div custom={6} variants={fadeUp} initial="hidden" animate="visible">
          <ProfileHeader />
        </motion.div>

        {/* Gradient divider */}
        <div className="gradient-divider w-28" />

        {/* SOCIAL */}
        <motion.div custom={7} variants={fadeUp} initial="hidden" animate="visible">
          <SocialIcons />
        </motion.div>

        {/* FOOTER */}
        <motion.div custom={8} variants={fadeUp} initial="hidden" animate="visible" className="w-full">
          <Footer />
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
