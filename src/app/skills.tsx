"use client";

const STACK_GROUPS = [
  {
    label: "Frontend",
    items: [
      { name: "React", desc: "Interactive SPAs & component architecture" },
      { name: "Next.js", desc: "SSR, static sites & full-stack apps" },
      { name: "Tailwind CSS", desc: "Utility-first, responsive styling" },
      { name: "JavaScript", desc: "Core language for the web" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Laravel", desc: "Primary framework for APIs & apps" },
      { name: "PHP", desc: "Server-side language" },
      { name: "Go", desc: "Microservices & high-concurrency services" },
      { name: "Python", desc: "Scripting & data-driven tools" },
    ],
  },
  {
    label: "Database & API",
    items: [
      { name: "MySQL", desc: "Relational data modeling & queries" },
      { name: "REST APIs", desc: "Design, build & integrate services" },
      { name: "Filament", desc: "Admin panels & content management" },
    ],
  },
  {
    label: "DevOps & Tools",
    items: [
      { name: "Docker", desc: "Containerized deployments" },
      { name: "Jenkins", desc: "CI/CD pipelines" },
      { name: "Google Cloud", desc: "Storage & app hosting" },
      { name: "Git / GitHub", desc: "Version control & collaboration" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-b border-line bg-surface-subtle">
      <div className="container-page py-24 lg:py-32">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">tech stack</p>
          <h2 className="section-title">Tools and technologies I use to ship software.</h2>
          <p className="body-copy mt-4">
            A focused, practical stack — chosen for reliability, maintainability,
            and getting production software into the hands of users.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {STACK_GROUPS.map((group) => (
            <div key={group.label} className="card p-6">
              <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {group.label}
              </p>
              <ul className="space-y-5">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <p className="text-sm font-medium text-ink">{item.name}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink-faint">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}