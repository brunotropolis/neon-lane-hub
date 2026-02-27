import { motion } from "framer-motion";
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
    <div className="min-h-screen bg-background star-field noise-overlay relative overflow-hidden">
      <FloatingParticles />
      <NeonDecorations />

      {/* Layered radial glows – more density */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[140px]" />
        <div className="absolute top-[15%] -left-40 w-[400px] h-[400px] rounded-full bg-secondary/6 blur-[120px]" />
        <div className="absolute top-[35%] -right-32 w-[350px] h-[350px] rounded-full bg-accent/6 blur-[110px]" />
        <div className="absolute top-[55%] left-1/3 w-[500px] h-[300px] rounded-full bg-neon-orange/4 blur-[130px]" />
        <div className="absolute top-[75%] -left-20 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/4 blur-[120px]" />
        {/* Gradient wave overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(230 25% 7% / 0) 0%, hsl(280 40% 12% / 0.08) 30%, hsl(200 60% 15% / 0.06) 50%, hsl(330 40% 12% / 0.08) 70%, hsl(230 25% 7% / 0) 100%)",
          }}
        />
      </div>

      <main className="relative z-10 mx-auto max-w-md px-5 py-10 flex flex-col items-center gap-10">
        {/* HERO */}
        <HeroSection />

        {/* Gradient divider */}
        <div className="gradient-divider w-48" />

        {/* SECTION 1 – CTA CARDS */}
        <section className="w-full space-y-6">
          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="w-full">
            <LinkCard
              title="Manual do Geek – Canal do WhatsApp"
              description="Postagens diárias do mundo geek e cultura pop. Eu localizo as melhores ofertas de produtos para você, de AirFryer, celular novo até achadinhos para dar um Level UP na sua vida."
              buttonText="CONFIRA AQUI"
              href="https://whatsapp.com/channel/0029Vb6yv9NKmCPV7OPXad3j"
            />
          </motion.div>

          <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="w-full">
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

        {/* SECTION 2 – ABOUT */}
        <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible">
          <ProfileHeader />
        </motion.div>

        {/* Gradient divider */}
        <div className="gradient-divider w-28" />

        {/* SECTION 3 – SOCIAL */}
        <motion.div custom={6} variants={fadeUp} initial="hidden" animate="visible">
          <SocialIcons />
        </motion.div>

        {/* FOOTER */}
        <motion.div custom={7} variants={fadeUp} initial="hidden" animate="visible" className="w-full">
          <Footer />
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
