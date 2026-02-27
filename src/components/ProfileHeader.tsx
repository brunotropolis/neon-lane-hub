import profileImg from "@/assets/profile.png";

const ProfileHeader = () => {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      {/* Profile photo with neon ring */}
      <div className="relative">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary via-secondary to-accent opacity-60 blur-md" />
        <div className="relative w-28 h-28 rounded-full p-[3px] bg-gradient-to-tr from-primary via-secondary to-accent">
          <img
            src={profileImg}
            alt="Bruno Sampaio"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>

      {/* Name */}
      <h1 className="font-display font-900 text-3xl text-foreground neon-text-purple tracking-tight">
        Bruno Sampaio
      </h1>

      {/* Tagline */}
      <p className="text-sm font-medium text-secondary tracking-wide uppercase">
        Pai, marido, empresário & geek funcional
      </p>

      {/* Bio */}
      <div className="text-sm leading-relaxed text-muted-foreground space-y-3 max-w-sm">
        <p>
          Eu sou o Bruno e não sei a configuração secreta do último iPhone, mas sei quando algo facilita sua vida de verdade.
        </p>
        <p>
          Compartilho meu cotidiano entre negócios, família e ideias que surgem no meio do caos organizado. Sou pai de dois adolescentes, sócio da minha esposa e especialista em transformar devaneios aleatórios em Reels.
        </p>
        <p>
          Comigo você vai encontrar boas ofertas, histórias reais e diversão no meio do caminho.
        </p>
        <p>
          Seja uma ferramenta que facilita seu dia a dia ou um produto com desconto que realmente vale a pena.
        </p>
        <p className="text-accent font-medium">
          Cola comigo que a jornada é mais leve.
        </p>
      </div>
    </div>
  );
};

export default ProfileHeader;
