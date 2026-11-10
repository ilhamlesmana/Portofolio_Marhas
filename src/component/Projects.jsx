import { useState } from 'react'
import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'

export default function Projects({ projects }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const categories = ['All', ...new Set(projects.map((project) => project.category))]
  const visibleProjects =
    activeCategory === 'All'
      ? projects 
      : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Projects"
          title="Selected work"
          subtitle="Curricula, learning modules, and training programs I have designed for schools and educators."
        />
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeCategory === category
                  ? 'bg-brand text-white shadow'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}