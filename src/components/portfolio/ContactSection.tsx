import { FadeIn } from "./FadeIn";

export function ContactSection() {
  return (
    <section id="contact" className="px-5 sm:px-8 md:px-10 py-20 md:py-32 flex justify-center">
      <div className="w-full max-w-4xl backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-[32px] md:rounded-[48px] p-8 sm:p-12 md:p-16 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        <FadeIn>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-10 md:mb-14"
            style={{ fontSize: "clamp(3rem, 12vw, 140px)" }}
          >
            Contact
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p
            className="text-[#D7E2EA]/70 font-light text-center max-w-xl mx-auto mb-12 md:mb-16"
            style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.15rem)" }}
          >
            Have a project in mind? Reach out directly — let&apos;s build something unforgettable together.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col items-center gap-8">
            <a
              href="tel:+917378833956"
              className="group flex items-center gap-4 text-[#D7E2EA] text-xl md:text-3xl font-medium tracking-wider hover:opacity-70 transition-opacity"
            >
              <span className="uppercase text-xs md:text-sm text-[#D7E2EA]/50 tracking-widest">Phone</span>
              <span>+91 7378833956</span>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=almeidaafram25@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-[#D7E2EA] text-xl md:text-3xl font-medium tracking-wider hover:opacity-70 transition-opacity"
            >
              <span className="uppercase text-xs md:text-sm text-[#D7E2EA]/50 tracking-widest">Email</span>
              <span>almeidaafram25@gmail.com</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
