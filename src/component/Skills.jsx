import SectionTitle from "./SectionTitle";

function SkillGroup({ title, description, items = [] }) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      
      <hr className="my-5 border-slate-100" />
      
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skill({ skills = [] }) {
  return (
    <section id="skills" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Skills"
          title="My Skills"
          subtitle="Here are some of the skills I have acquired over the years."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <SkillGroup
              key={group.title}
              title={group.title}
              description={group.description}
              items={group.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}