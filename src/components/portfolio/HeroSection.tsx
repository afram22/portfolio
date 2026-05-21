import { Link } from "@tanstack/react-router";
import { FadeIn } from "./FadeIn";
import { Magnet } from "./Magnet";
import { ContactButton } from "./ContactButton";
import portrait from "@/assets/afram-portrait.png";

type NavItem = { label: string; href: string; external?: boolean };

const NAV: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Videos", href: "#videos" },
  { label: "Contact", href: "/contact", external: true },
];

export function HeroSection() {
  return (
    <section className="h-screen flex flex-col relative" style={{ overflowX: "clip" }}>
      <FadeIn as="nav" delay={0} y={-20} className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 relative z-20">
        {NAV.map((l) =>
          l.external ? (
            <Link
              key={l.label}
              to={l.href}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              {l.label}
            </Link>
          ) : (
            <a
              key={l.label}
              href={l.href}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              {l.label}
            </a>
          )
        )}
      </FadeIn>

      <div className="flex-1 flex flex-col justify-between relative">
        <FadeIn delay={0.15} y={40} className="overflow-hidden w-full mt-6 sm:mt-4 md:-mt-5">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[11vw] sm:text-[12vw] md:text-[13vw] lg:text-[13vw]">
            Hi, i&apos;m afram
          </h1>
        </FadeIn>

        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
        >
          <FadeIn delay={0.6} y={30}>
            <img src={portrait} alt="Afram portrait" className="w-full h-auto" />
          </FadeIn>
        </Magnet>

        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20">
          <FadeIn delay={0.35} y={20}>
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
              style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
            >
              a video editor driven by crafting striking and unforgettable projects
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
