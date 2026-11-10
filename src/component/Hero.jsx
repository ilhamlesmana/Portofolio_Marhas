export default function Hero({ profile }) {
    return (
        <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
            {/* 1. Closed this div immediately so it only acts as the background gradient */}
            <div className="absolute inset-x-0 top-0 -z-10 h-[480px] bg-linear-to-b from-brand-soft to-white" />

            {/* 2. Main grid content container sits cleanly outside the background div */}
            <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-[1.4fr_1fr]">
                <div>
                    <p className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1 text-sm font-medium text-brand">
                        <span className="size-2 rounded-full bg-emerald-500"></span>
                        Online
                    </p>
                    <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                        แรงบันดาลใจ <span className="text-brand">{profile.name}</span> น้อง
                    </h1>
                    <p className="mt-3 text-xl font-semibold text-slate-700">{profile.role}</p>
                    <p className="mt-5 max-w-xl text-justify text-lg leading-relaxed text-muted">{profile.tagline}</p>
                    
                    {/* Your buttons will now render safely and won't get clipped */}
                    <div className="mt-8 flex flex-wrap gap-3">
                        <a href="#project" className="rounded-lg bg-brand px-6 py-3 font-semibold text-white shadow-blue-500/25 transition hover:translate-y-0.5 hover:bg-brand-dark">My projects</a>
                        <a href={profile.cvUrl} target='_blank' rel='noreferrer' className='rounded-lg border border-slate-200 bg-white px-6 py-3 font-semibold transition hover:border-brand hover:text-brand'>Download CV</a>
                    </div>
                </div>

                <div className='relative mx-auto w-full max-w-xs'>
                    <div className='absolute -inset-4 -z-10 rotate-6 rounded-3xl bg-brand/10' />
                    {profile.photo ? (
                        <img src={profile.photo} alt={`Photo of ${profile.name}`} className='aspect-square w-full rounded-3xl object-cover shadow-xl'/>
                    ) : (
                        <div className='grid aspect-square place-items-center rounded-3xl bg-linear-to-br from-brand to-cyan-400 text-7xl font-extrabold text-white shadow-xl'>
                            {profile.initials}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}