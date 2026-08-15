"use client";

import Image from "next/image";
import { getImagePrefix } from "../../utils/utils";

const HIGHLIGHTS = [
  "Full-Stack Development",
  "Laravel / PHP",
  "Backend Engineering",
  "Modern Frontend (React)",
  "Database & API Design",
  "Deployment & DevOps",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-b border-line bg-white">
      <div className="container-page grid gap-14 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:py-32">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 -z-10 rounded-2xl bg-accent-soft" />
          <div className="card overflow-hidden">
            <Image
              src={`${getImagePrefix()}image/profile-photo.jpg`}
              alt="Marcellinus Aditya"
              width={810}
              height={810}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>

        <div>
          <p className="eyebrow mb-4">about me</p>
          <h2 className="section-title">
            A developer who cares about building things that actually work.
          </h2>
          <p className="body-copy mt-6">
            I&apos;m a computer science student and certified junior web developer
            (BNSP) with hands-on experience building production web applications.
            During my internship at DB Klik, I contributed to internal portal and
            omnichannel systems that manage products, distributors, orders, and
            stock across the business.
          </p>
          <p className="body-copy mt-4">
            My work spans the full stack — Laravel and Go for backend services,
            React and Next.js on the frontend, and Docker, Jenkins, and Google
            Cloud for deployment. I approach software as engineering: understand
            the problem, design around the domain, and ship something maintainable.
          </p>

          <div className="mt-10">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              areas of focus
            </p>
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-ink-soft">
                  <span className="font-mono text-accent">&#9656;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}