"use client";

import { ProjectCard } from "@/components";

const PROJECTS = [
  {
    img: "image/portal.PNG",
    title: "Item Portal Web",
    context: "DB Klik Internship · 2025–2026 · Laravel",
    description:
      "A portal system that manages sales products, distributors, and distributor ordering. I contributed to the purchase list, receive items, and distribution features of the e-commerce workflow.",
    tech: ["Laravel", "PHP", "MySQL"],
    highlights: [
      "Built purchase list & receive items features",
      "Contributed to distributor distribution features",
      "Worked on an internal e-commerce portal used by the business",
    ],
    href: "/Porto-Portal_DB_Klik.pdf",
    hrefLabel: "Case study (PDF)",
  },
  {
    img: "image/omnichannel.PNG",
    title: "Omnichannel Web",
    context: "DB Klik Internship · 2025–2026 · Laravel",
    description:
      "An omnichannel platform covering daily staff workflows — order management, stock management, and goods receipt across the business.",
    tech: ["Laravel", "PHP", "MySQL"],
    highlights: [
      "Implemented receive item & serial number features",
      "Supported order and stock management workflows",
      "Helped streamline internal operations tooling",
    ],
    href: "",
    hrefLabel: "",
  },
  {
    img: "image/vitrostorage.PNG",
    title: "Storage App",
    context: "2026 · Laravel + React",
    description:
      "A web storage application with a Laravel backend and React frontend, featuring CRUD operations for products, warehouses, merchants, users with permissions, and transactions.",
    tech: ["Laravel", "React", "MySQL"],
    highlights: [
      "Full-stack CRUD for products, warehouses & merchants",
      "User management with role-based permissions",
      "Transaction handling across the inventory flow",
    ],
    href: "https://vitrostorage.vitroweb.my.id/",
    hrefLabel: "Live demo",
  },
  {
    img: "image/myvitae.PNG",
    title: "MyVitae — AI CV & Cover Letter Builder",
    context: "2026 · Laravel + React (Inertia)",
    description:
      "A career-profile and job-application workspace: keep one verified career profile, paste a job description, then generate a CV and cover letter tailored to that role and export them as PDF or DOCX.",
    tech: ["Laravel", "React", "Inertia", "MySQL", "OpenAI API"],
    highlights: [
      "Single verified career profile as the source for every document",
      "Tailored CV & cover letter generated per job posting",
      "Editable sections with PDF and DOCX export",
    ],
    href: "https://myvitae.vitroweb.online",
    hrefLabel: "Live demo",
  },
  {
    img: "image/tickox.PNG",
    title: "Tickox",
    context: "2025 · Laravel + Filament",
    description:
      "A mobile-friendly tourist ticket sales website, built with Laravel and Filament used as the content management layer.",
    tech: ["Laravel", "Filament", "MySQL"],
    highlights: [
      "Mobile-first ticket booking experience",
      "Admin content management via Filament",
    ],
    href: "https://tickox.vitroweb.my.id/",
    hrefLabel: "Live demo",
  },
  {
    img: "image/deteksi-diabetes.PNG",
    title: "Diabetes Detection",
    context: "2025 · Python · Final Project",
    description:
      "A diabetes detection web app using a KNN classifier optimized with a Genetic Algorithm. The final project concluded with a 5–8% accuracy improvement.",
    tech: ["Python", "KNN", "Genetic Algorithm"],
    highlights: [
      "Optimized KNN classifier with Genetic Algorithm",
      "Improved detection accuracy by 5–8%",
      "Built the supporting web application",
    ],
    href: "https://deteksi-diabetes.vitroweb.my.id/",
    hrefLabel: "Live demo",
  },
  {
    img: "image/minisoccer.PNG",
    title: "Soccer Field Rent — Microservice",
    context: "2025 · Go + React · Microservice API",
    description:
      "A soccer field rental platform with location- and time-based booking. Microservice backend in Go, React frontend, Midtrans payment integration, deployed on GCS with Jenkins.",
    tech: ["Go", "React", "Microservices", "Midtrans", "Jenkins"],
    highlights: [
      "Designed microservice backend architecture in Go",
      "Integrated Midtrans payment gateway",
      "Deployed on Google Cloud with Jenkins CI/CD",
    ],
    href: "https://fe.vitroweb.site/",
    hrefLabel: "Live demo",
  },
  {
    img: "image/prima.PNG",
    title: "Prima Apotek",
    context: "2023 · Laravel",
    description:
      "An e-commerce website for purchasing medicines, built with Laravel and integrated with the Midtrans payment gateway.",
    tech: ["Laravel", "PHP", "Midtrans"],
    highlights: [
      "Built medicine product catalog & ordering flow",
      "Integrated Midtrans payment gateway",
    ],
    href: "http://primaapotek.vitroweb.my.id/",
    hrefLabel: "Live demo",
  },
];

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-b border-line bg-white">
      <div className="container-page py-24 lg:py-32">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">selected projects</p>
          <h2 className="section-title">Things I&apos;ve built and contributed to.</h2>
          <p className="body-copy mt-4">
            A mix of internship work, university projects, and personal builds —
            each one solving a concrete problem.
          </p>
        </div>

        <div className="mt-16 space-y-20 lg:space-y-24">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.title} index={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;