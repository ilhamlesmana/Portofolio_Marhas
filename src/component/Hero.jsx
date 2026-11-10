export default function Hero({ profile = {} }) {
  const {
    name = "User",
    role = "Developer",
    tagline = "",
    cvUrl = "#",
    photo = null,
    initials = "U",
  } = profile;

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background Gradient */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[480px] bg-gradient-to-b from-brand-soft to-white" />

      {/* Main Grid Content */}
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          {/* Status Badge */}
          <p className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1 text-sm font-medium text-brand shadow-xs">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            Online
          </p>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-slate-900">
            Hi, I&apos;m <span className="text-brand">{name}</span>
          </h1>

          <p className="mt-3 text-xl font-semibold text-slate-700">{role}</p>
          
          {tagline && (
            <p className="mt-5 max-w-xl text-left text-lg leading-relaxed text-muted">
              {tagline}
            </p>
          )}

          {/* Call to Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#project"
              className="rounded-lg bg-brand px-6 py-3 font-semibold text-white shadow-md shadow-brand/25 transition duration-200 hover:-translate-y-0.5 hover:bg-brand-dark"
            >
              My projects
            </a>
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 shadow-xs transition duration-200 hover:border-brand hover:text-brand hover:-translate-y-0.5"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Avatar / Profile Graphic */}
        <div className="relative mx-auto w-full max-w-xs">
          <div className="absolute -inset-4 -z-10 rotate-6 rounded-3xl bg-brand/10" />
          {photo ? (
            <img
              src={photo}
              alt={`Photo of ${name}`}
              className="aspect-square w-full rounded-3xl object-cover shadow-xl"
              loading="lazy"
            />
          ) : (
            <div className="grid aspect-square place-items-center rounded-3xl bg-gradient-to-br from-brand to-cyan-400 text-7xl font-extrabold text-white shadow-xl select-none">
              {initials}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}