"use client";

const TERMINAL_LINES = [
  { prompt: "$", text: "whoami", out: "marcellinus.aditya — software engineer" },
  { prompt: "$", text: "ls ~/stack", out: "laravel  go  react  next.js  docker  mysql" },
  { prompt: "$", text: "cat ~/status.txt", out: "open to new opportunities" },
];

const STACK_HIGHLIGHTS = ["Laravel", "PHP", "Go", "React", "Next.js", "MySQL", "Docker"];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-line bg-surface">
      <div className="container-page grid gap-16 py-24 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-36">
        <div>
          <p className="eyebrow mb-6">software engineer / full-stack developer</p>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Building reliable web applications with modern technologies.
          </h1>
          <p className="body-copy mt-6 max-w-xl">
            I&apos;m Marcellinus Aditya, a software engineer from Indonesia focused on
            full-stack and backend development. I design and build systems that solve
            real business problems — from e-commerce and inventory portals to
            microservices and data-driven applications.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contacts" className="btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="mt-14">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              frequently working with
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {STACK_HIGHLIGHTS.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="card mx-auto w-full max-w-md overflow-hidden shadow-sm lg:ml-auto">
            <div className="flex items-center gap-2 border-b border-line bg-surface-subtle px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-[#34d399]" />
              <span className="ml-2 font-mono text-xs text-ink-faint">marcellinus@dev: ~</span>
            </div>
            <div className="space-y-4 bg-[#0f172a] p-5 font-mono text-sm text-[#cbd5e1]">
              {TERMINAL_LINES.map((line, idx) => (
                <div key={idx}>
                  {/* @ts-ignore */}
                  <p className="text-[#94a3b8]">
                    <span className="text-[#34d399]">{line.prompt}</span> <span className="text-[#f1f5f9]">{line.text}</span>
                  </p>
                  <p className="text-[#cbd5e1]">{line.out}</p>
                </div>
              ))}
              <p className="animate-pulse text-[#94a3b8]">
                <span className="text-[#34d399]">$</span> <span className="inline-block h-4 w-2 bg-[#cbd5e1] align-middle" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}