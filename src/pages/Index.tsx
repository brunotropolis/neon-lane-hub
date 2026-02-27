import { motion } from "framer-motion";
import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";
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
    <div className="min-h-screen bg-background star-field relative overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-1/2 -left-32 w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <main className="relative z-10 mx-auto max-w-md px-5 py-10 flex flex-col items-center gap-8">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <ProfileHeader />
        </motion.div>

        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <LinkCard
            title="Manual do Geek – Canal do WhatsApp"
            description="Postagens diárias do mundo geek e cultura pop. Eu localizo as melhores ofertas de produtos para você, de AirFryer, celular novo até achadinhos para dar um Level UP na sua vida."
            buttonText="CONFIRA AQUI"
            href="https://whatsapp.com/channel/0029Vb6yv9NKmCPV7OPXad3j"
          />
        </motion.div>

        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <LinkCard
            title="Buscador Geek – Grupos de Ofertas"
            description="Grupos exclusivos onde busco nas melhores plataformas descontos especiais, cupons e ofertas de todos os produtos que você possa imaginar."
            buttonText="CONFIRA AQUI"
            href="https://sndflw.com/i/Bz1pJNeognZTuxupwSF4"
          />
        </motion.div>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <SocialIcons />
        </motion.div>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <Footer />
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
