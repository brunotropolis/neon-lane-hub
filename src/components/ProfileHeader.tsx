import profileImg from "@/assets/profile.png";

const ProfileHeader = () => {
  return (
    <div className="flex flex-col items-center text-center gap-5 relative">
      {/* Section glow */}
      <div
        className="absolute -inset-20 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, hsl(280 80% 60% / 0.08), transparent 70%)",
        }}
      />

      {/* Portrait – still prominent, not tiny */}
      <div className="relative">
        <div
          className="absolute -inset-3 rounded-xl"
          style={{
            background:
              "linear-gradient(135deg, hsl(280 80% 60% / 0.4), hsl(330 85% 60% / 0.3), hsl(200 100% 55% / 0.3))",
            filter: "blur(12px)",
          }}
        />
        <div
          className="absolute -inset-[2px] rounded-xl"
          style={{
            background:
              "linear-gradient(135deg, hsl(280 80% 60% / 0.6), hsl(330 85% 60% / 0.4), hsl(200 100% 55% / 0.4))",
          }}
        />
        <img
          src={profileImg}
          alt="Bruno Sampaio"
          className="relative w-32 h-40 rounded-xl object-cover"
          style={{
            boxShadow:
              "0 0 30px hsl(280 80% 60% / 0.2), 0 10px 40px hsl(0 0% 0% / 0.4)",
          }}
        />
      </div>

      {/* Name */}
      <h2
        className="font-display font-900 text-2xl tracking-tight"
        style={{
          background:
            "linear-gradient(135deg, hsl(280 80% 70%), hsl(200 100% 65%))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          filter: "drop-shadow(0 0 15px hsl(280 80% 60% / 0.3))",
        }}
      >
        Bruno Sampaio
      </h2>

      {/* Bio glass panel */}
      <div
        className="rounded-xl p-5 text-sm leading-relaxed text-muted-foreground space-y-3 max-w-sm"
        style={{
          background: "hsl(260 30% 10% / 0.5)",
          backdropFilter: "blur(16px)",
          border: "1px solid hsl(280 80% 60% / 0.12)",
          boxShadow:
            "0 8px 32px hsl(0 0% 0% / 0.3), inset 0 1px 0 hsl(0 0% 100% / 0.05)",
        }}
      >
        <p>
          Empresário, infoprodutor e geek funcional. Eu não sei a configuração
          secreta do último iPhone, mas sei quando algo facilita sua vida de
          verdade.
        </p>
        <p>
          Compartilho meu cotidiano entre negócios, família e ideias que surgem
          no meio do caos organizado. Sou pai de dois adolescentes, sócio da
          minha esposa e especialista em transformar devaneios aleatórios em
          Reels.
        </p>
        <p>
          Comigo você vai encontrar boas ofertas, histórias reais e diversão no
          meio do caminho.
        </p>
        <p>
          Seja uma ferramenta que facilita seu dia a dia ou um produto com
          desconto que realmente vale a pena.
        </p>
        <p
          style={{
            color: "hsl(200 100% 65%)",
            textShadow: "0 0 15px hsl(200 100% 55% / 0.3)",
          }}
          className="font-medium"
        >
          Cola comigo que a jornada é mais leve.
        </p>
      </div>
    </div>
  );
};

export default ProfileHeader;
