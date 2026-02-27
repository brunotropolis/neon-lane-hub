import { Instagram } from "lucide-react";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socials = [
  { icon: <Instagram className="w-7 h-7" />, href: "https://instagram.com/brunotropolis", label: "Instagram" },
  { icon: <TikTokIcon />, href: "https://tiktok.com/@brunotropolis", label: "TikTok" },
  { icon: <LinkedInIcon />, href: "https://www.linkedin.com/in/brunotropolis/", label: "LinkedIn" },
];

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-8">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="relative p-3 rounded-full transition-all duration-300"
          style={{
            color: "hsl(180 100% 70%)",
            border: "1px solid hsl(180 100% 55% / 0.3)",
            boxShadow: "0 0 10px hsl(180 100% 55% / 0.2), 0 0 25px hsl(280 80% 60% / 0.1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "hsl(180 100% 85%)";
            e.currentTarget.style.boxShadow =
              "0 0 15px hsl(180 100% 55% / 0.5), 0 0 40px hsl(280 80% 60% / 0.25), 0 0 60px hsl(180 100% 55% / 0.15)";
            e.currentTarget.style.borderColor = "hsl(180 100% 55% / 0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "hsl(180 100% 70%)";
            e.currentTarget.style.boxShadow =
              "0 0 10px hsl(180 100% 55% / 0.2), 0 0 25px hsl(280 80% 60% / 0.1)";
            e.currentTarget.style.borderColor = "hsl(180 100% 55% / 0.3)";
          }}
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
