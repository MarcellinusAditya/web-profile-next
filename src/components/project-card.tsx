import Image from "next/image";
import { getImagePrefix } from "../../utils/utils";

interface ProjectCardProps {
  index: number;
  img: string;
  title: string;
  context: string;
  description: string;
  tech: string[];
  highlights: string[];
  href: string;
  hrefLabel: string;
}

export function ProjectCard({
  index,
  img,
  title,
  context,
  description,
  tech,
  highlights,
  href,
  hrefLabel,
}: ProjectCardProps) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <article className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
      <a
        href={href || undefined}
        target={href ? "_blank" : undefined}
        rel={href ? "noopener noreferrer" : undefined}
        className={`group block overflow-hidden rounded-xl border border-line bg-white ${
          href ? "cursor-pointer" : "cursor-default"
        } ${index % 2 === 1 ? "lg:order-2" : ""}`}
      >
        <div className="overflow-hidden">
          <Image
            src={`${getImagePrefix()}${img}`}
            alt={title}
            width={1200}
            height={800}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      </a>

      <div className={index % 2 === 1 ? "lg:order-1" : ""}>
        <p className="font-mono text-sm text-ink-faint">
          Project <span className="text-accent">{num}</span>
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">{title}</h3>
        <p className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">{context}</p>

        <p className="mt-5 text-base leading-relaxed text-ink-soft">{description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="tech-tag">
              {t}
            </span>
          ))}
        </div>

        {highlights.length > 0 && (
          <ul className="mt-6 space-y-2.5">
            {highlights.map((point) => (
              <li key={point} className="flex gap-3 text-sm text-ink-soft">
                <span className="font-mono text-accent">&#9656;</span>
                {point}
              </li>
            ))}
          </ul>
        )}

        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-accent hover:text-accent-hover"
          >
            {hrefLabel}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;