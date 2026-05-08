type ContactSectionProps = {
  isLight: boolean;
};

export function ContactSection({ isLight }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-[86rem] px-4 pb-16 pt-24 md:px-8 md:pb-24 md:pt-40"
    >
      <div className="overflow-hidden rounded-[2.6rem] border border-white/10 bg-[linear-gradient(135deg,#f0b18c_0%,#f3ebdf_32%,#d9e4da_100%)] text-[#091416]">
        <div className="grid gap-10 px-6 py-8 md:px-10 md:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="text-[0.78rem] uppercase tracking-[0.28em] text-[#6e4a36]">
              Start with a pilot
            </p>
            <h2 className="mt-5 max-w-[12ch] text-[clamp(3rem,5vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
              Bring earlier operational visibility into your agency this quarter.
            </h2>
            <p className="mt-6 max-w-[36rem] text-[1.05rem] leading-8 text-[#314540]">
              We built CareSight AI for care leaders who need fewer surprises, stronger
              inspection confidence, and a clearer read on workforce and service risk.
            </p>
          </div>

          <form className="grid gap-4 rounded-[2rem] border border-black/8 bg-white/55 p-5 backdrop-blur-md md:p-6">
            <label className="grid gap-2 text-sm font-medium text-[#0d1d20]">
              Name
              <input
                type="text"
                placeholder="Care leader name"
                className="min-h-12 rounded-[1.1rem] border border-black/10 bg-white/80 px-4 py-3 text-base outline-none placeholder:text-[#4b5d58]"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-[#0d1d20]">
              Work email
              <input
                type="email"
                placeholder="name@agency.co.uk"
                className="min-h-12 rounded-[1.1rem] border border-black/10 bg-white/80 px-4 py-3 text-base outline-none placeholder:text-[#4b5d58]"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-[#0d1d20]">
              Agency size
              <select className="min-h-12 rounded-[1.1rem] border border-black/10 bg-white/80 px-4 py-3 text-base outline-none">
                <option>1-25 staff</option>
                <option>26-100 staff</option>
                <option>101-250 staff</option>
                <option>250+ staff</option>
              </select>
            </label>
            <button
              type="button"
              className="mt-2 rounded-full bg-[#0a1719] px-6 py-4 text-sm font-medium text-[#f5efe6] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Request a pilot conversation
            </button>
          </form>
        </div>
      </div>

      <footer
        className={`flex flex-col gap-4 px-1 pt-8 text-sm md:flex-row md:items-center md:justify-between ${
          isLight ? "text-[#7c6c5f]" : "text-white/46"
        }`}
      >
        <p>CareSight AI by CeeqCare</p>
        <p>Operational intelligence for UK domiciliary care agencies.</p>
      </footer>
    </section>
  );
}
