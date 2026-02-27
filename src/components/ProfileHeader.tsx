import profileImg from "@/assets/profile.png";

const ProfileHeader = () => {
  return (
    <div className="flex flex-col items-center text-center gap-5 relative">
      {/* Section glow */}
      <div
        className="absolute -inset-20 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, hsl(280 80% 60% / 0.1), transparent 70%)",
        }}
      />

      {/* Large portrait – min 35% width */}
      <div className="relative" style={{ width: "min(45%, 220px)" }}>
        {/* Outer bloom glow */}
        <div
          className="absolute -inset-6 rounded-2xl"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(330 85% 60% / 0.25), hsl(280 80% 60% / 0.15), transparent 70%)",
            filter: "blur(20px)",
          }}
        />
        {/* Neon rim border */}
        <div
          className="absolute -inset-[3px] rounded-2xl"
          style={{
            background:
              "linear-gradient(135deg, hsl(280 80% 60% / 0.7), hsl(330 85% 60% / 0.5), hsl(180 100% 55% / 0.5), hsl(280 80% 60% / 0.7))",
            boxShadow:
              "0 0 15px hsl(280 80% 60% / 0.4), 0 0 40px hsl(330 85% 60% / 0.2)",
          }}
        />
        <img
          src={profileImg}
          alt="Bruno Sampaio"
          className="relative w-full aspect-[3/4] rounded-2xl object-cover"
          style={{
            boxShadow:
              "0 0 40px hsl(280 80% 60% / 0.25), 0 15px 50px hsl(0 0% 0% / 0.5)",
          }}
        />
      </div>

      {/* Name */}
      <h2
        className="font-display font-900 text-2xl sm:text-3xl tracking-tight"
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

      {/* Tagline */}
      <p
        className="text-sm font-medium tracking-[0.12em] uppercase"
        style={{
          color: "hsl(0 0% 85%)",
          textShadow: "0 0 15px hsl(330 85% 60% / 0.3)",
        }}
      >
        Pai, marido, empresário & geek funcional
      </p>

      {/* Bio glass panel */}
      <div
        className="rounded-xl p-5 text-[15px] leading-relaxed space-y-3 max-w-sm"
        style={{
          color: "#FFFFFF",
          background: "hsl(260 30% 10% / 0.5)",
          backdropFilter: "blur(16px)",
          border: "1px solid hsl(280 80% 60% / 0.15)",
          boxShadow:
            "0 8px 32px hsl(0 0% 0% / 0.3), inset 0 1px 0 hsl(0 0% 100% / 0.05)",
        }}
      >
        <p>
          Eu não sei a configuração secreta do último iPhone, mas sei quando
          algo facilita sua vida de verdade.
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
            color: "hsl(180 100% 70%)",
            textShadow: "0 0 15px hsl(180 100% 55% / 0.4)",
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
