import { FadeIn } from "./FadeIn";

const SERVICES = [
  { n: "01", name: "Video Editing", desc: "Precise cuts, pacing, and structure that transform raw footage into compelling stories tailored to your brand and audience." },
  { n: "02", name: "Color Grading", desc: "Cinematic color treatment and finishing that gives every frame a polished, distinctive look and consistent mood." },
  { n: "03", name: "Motion Design", desc: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences." },
  { n: "04", name: "Sound Design", desc: "Layered audio, music selection, and mixing that elevates emotion and immerses viewers in every scene." },
  { n: "05", name: "Short Form Content", desc: "Punchy, scroll-stopping edits optimized for social platforms with attention to hook, rhythm, and retention." },
];

export function ServicesSection() {
  return (
    <section
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
      style={{ background: "#FFFFFF" }}
    >
      <h2
        className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 12vw, 160px)", lineHeight: 1 }}
      >
        Services
      </h2>
      <div className="max-w-5xl mx-auto">
        {SERVICES.map((s, i) => (
          <FadeIn key={s.n} delay={i * 0.1}>
            <div
              className="flex items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
              style={{ borderTop: i === 0 ? "1px solid rgba(12,12,12,0.15)" : undefined, borderBottom: "1px solid rgba(12,12,12,0.15)" }}
            >
              <span
                className="font-black shrink-0"
                style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 10vw, 140px)", lineHeight: 1 }}
              >
                {s.n}
              </span>
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                <h3
                  className="font-medium uppercase"
                  style={{ color: "#0C0C0C", fontSize: "clamp(1rem, 2.2vw, 2.1rem)", lineHeight: 1.1 }}
                >
                  {s.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{ color: "#0C0C0C", opacity: 0.6, fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
