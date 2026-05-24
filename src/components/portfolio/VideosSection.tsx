import { FadeIn } from "./FadeIn";

type Reel = {
  n: string;
  title: string;
  category: string;
  youtubeId: string;
  vertical?: boolean;
};

const REELS: Reel[] = [
  {
    n: "01",
    title: "the ace band",
    category: "Showreel",
    youtubeId: "A9MJlO5LRtA",
    vertical: true,
  },
  {
    n: "02",
    title: "frontline band",
    category: "Client",
    youtubeId: "eRULKhgX0Ak",
    vertical: false,
  },
  {
    n: "03",
    title: "Abanga Repost",
    category: "Commercial",
    youtubeId: "5J27Kc2g1O4",
    vertical: false,
  },
  {
    n: "04",
    title: "dandeli",
    category: "Creative",
    youtubeId: "k8nea5nR08s",
    vertical: false,
  },
];

export function VideosSection() {
  return (
    <section
      id="videos"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 flex justify-center"
      style={{ background: "#0C0C0C" }}
    >
      <div className="w-full max-w-7xl backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-[32px] md:rounded-[48px] p-8 sm:p-12 md:p-16 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">

        {/* Heading */}
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28 text-[#D7E2EA]"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Videos
        </h2>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-6 lg:gap-8 items-start">

          {/* LEFT SIDE - Vertical Video */}
          <FadeIn delay={0.1}>
            <div className="overflow-hidden border-2 border-[#D7E2EA]/30 bg-black rounded-[28px] md:rounded-[36px]">

              <iframe
                className="w-full aspect-[9/16]"
                src={`https://www.youtube.com/embed/${REELS[0].youtubeId}`}
                title={REELS[0].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />

              {/* Info */}
              <div className="flex items-center gap-4 p-5 md:p-6">

                <span
                  className="font-black hero-heading text-[#D7E2EA]"
                  style={{
                    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                    lineHeight: 1,
                  }}
                >
                  {REELS[0].n}
                </span>

                <div className="flex flex-col">

                  <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs">
                    {REELS[0].category}
                  </span>

                  <span className="text-[#D7E2EA] font-medium uppercase text-sm md:text-base">
                    {REELS[0].title}
                  </span>

                </div>

              </div>

            </div>
          </FadeIn>

          {/* RIGHT SIDE - Horizontal Videos */}
          <div className="flex flex-col gap-6 lg:gap-8">

            {REELS.slice(1).map((r, i) => (
              <FadeIn key={r.n} delay={(i + 1) * 0.1}>

                <div className="overflow-hidden border-2 border-[#D7E2EA]/30 bg-black rounded-[28px] md:rounded-[36px]">

                  <iframe
                    className="w-full aspect-video"
                    src={`https://www.youtube.com/embed/${r.youtubeId}`}
                    title={r.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />

                  {/* Info */}
                  <div className="flex items-center gap-4 p-5 md:p-6">

                    <span
                      className="font-black hero-heading text-[#D7E2EA]"
                      style={{
                        fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                        lineHeight: 1,
                      }}
                    >
                      {r.n}
                    </span>

                    <div className="flex flex-col">

                      <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs">
                        {r.category}
                      </span>

                      <span className="text-[#D7E2EA] font-medium uppercase text-sm md:text-base">
                        {r.title}
                      </span>

                    </div>

                  </div>

                </div>

              </FadeIn>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}