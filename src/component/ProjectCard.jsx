export default function ProjectCard({ project }) {
  const isExternal = project.link && project.link !== '#';

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      {/* Thumbnail / Placeholder */}
      <div className="aspect-video overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="size-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className={`grid size-full place-items-center bg-gradient-to-br ${
              project.color || 'from-slate-700 to-slate-900'
            }`}
          >
            <span className="text-5xl font-extrabold text-white/90">
              {project.title?.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {project.category && (
          <p className="text-xs font-semibold uppercase tracking-wide text-brand">
            {project.category}
          </p>
        )}

        <h3 className="mt-2 text-lg font-bold text-slate-900">
          {project.title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        {/* Tags */}
        {project.tags?.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        {/* Link */}
        <a
          href={project.link || '#'}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noreferrer noopener' : undefined}
          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand"
        >
          View details
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </article>
  );
}