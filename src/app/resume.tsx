"use client";

const EXPERIENCE = [
  {
    period: "2025 – 2026",
    role: "Fullstack Developer",
    company: "DB Klik",
    points: [
      "Built portal & omnichannel features for internal e-commerce operations",
      "Implemented purchase list, receive items, and serial number workflows in Laravel",
      "Collaborated on order, stock, and distribution management systems",
    ],
  },
  {
    period: "2023-2025",
    role: "Independent & Academic Projects",
    company: "Freelance / University",
    points: [
      "Shipped full-stack apps: storage system, ticket sales, rental platform, e-commerce",
      "Designed Go microservices with payment integration & CI/CD deployment",
      "Applied ML (KNN + Genetic Algorithm) in a diabetes detection system",
    ],
  },
];

const EDUCATION = [
  {
    period: "Degree",
    degree: "Bachelor of Informatics in Computer Science",
    institution: "Universitas Pembangunan Nasional 'Veteran' Jawa Timur",
  },
  {
    period: "Certification",
    degree: "Junior Web Developer",
    institution: "BNSP — National Professional Certification Agency",
  },
  {
    period: "Program",
    degree: "MSIB Alumni & project-based courses",
    institution: "Independent study and hands-on learning",
  },
];

export function Resume() {
  return (
    <section id="resume" className="scroll-mt-20 border-b border-line bg-surface-subtle">
      <div className="container-page py-24 lg:py-32">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">experience & education</p>
            <h2 className="section-title">Where I&apos;ve worked and learned.</h2>
          </div>
          <a href="/Marcellinus Aditya - CV.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary w-fit shrink-0">
            Download CV (PDF)
          </a>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              / experience
            </p>
            <div className="relative space-y-12 border-l border-line-strong pl-8">
              {EXPERIENCE.map((item) => (
                <div key={item.role} className="relative">
                  <span className="absolute -left-[2.35rem] top-1 h-3.5 w-3.5 rounded-full border-2 border-accent bg-white" />
                  <p className="font-mono text-xs text-accent">{item.period}</p>
                  <h3 className="mt-2 text-lg font-semibold text-ink">{item.role}</h3>
                  <p className="mt-0.5 font-mono text-sm text-ink-faint">{item.company}</p>
                  <ul className="mt-4 space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                        <span className="font-mono text-accent">&#9656;</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              / education & certifications
            </p>
            <div className="space-y-4">
              {EDUCATION.map((item) => (
                <div key={item.degree} className="card p-6">
                  <p className="font-mono text-xs text-accent">{item.period}</p>
                  <h3 className="mt-2 font-semibold text-ink">{item.degree}</h3>
                  <p className="mt-1 text-sm text-ink-faint">{item.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;