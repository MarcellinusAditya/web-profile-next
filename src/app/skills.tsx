"use client";

import { Typography } from "@material-tailwind/react";
import { RectangleGroupIcon, CircleStackIcon, ArrowLongRightIcon, HashtagIcon, EyeIcon, DocumentTextIcon, GlobeAltIcon, ServerIcon, NewspaperIcon } from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: GlobeAltIcon,
    title: "Fullstack Web Development:",
    children: "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.",
    tech: "Laravel",
  },
  {
    icon: CircleStackIcon,
    title: "Backend Development",
    children: "I specialize in building scalable and secure server-side applications using modern frameworks and databases. From designing APIs to integrating services, I ensure your application runs smoothly behind the scenes.",
    tech: "Laravel, Golang",
  },
  {
    icon: DocumentTextIcon,
    title: "Frontend Development",
    children: "I develop engaging and responsive user interfaces using modern frontend technologies like React and Tailwind CSS. My goal is to deliver intuitive and visually appealing user experiences.",
    tech: "React, Javascript",
  },
  {
    icon: ServerIcon,
    title: "Deployment and Maintenance",
    children: "I manage the deployment, monitoring, and maintenance of web applications using tools like Docker, CI/CD pipelines, and cloud services to ensure smooth and continuous delivery.",
    tech: "Docker, GCS",
  },
  {
    icon: ArrowLongRightIcon,
    title: "Automation and DevOps",
    children: "I automate development workflows, set up CI/CD pipelines, and manage infrastructure as code. My DevOps practices ensure faster delivery, stability, and scalability of your applications.",
    tech: "Git, CI/CD, Jenkins",
  },
  {
    icon: NewspaperIcon,
    title: "Micosoft Office",
    children: "I am proficient in Microsoft Office tools such as Word, Excel, and PowerPoint, which support my work in documentation, reporting, and professional presentations. <b>Technologies:",
    tech: "Microsoft Office",
  },
];

export function Skills() {
  return (
    <section className="px-8" id="skills">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          my skills
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          What I do
        </Typography>
        <Typography variant="lead" className="mx-auto w-full !text-gray-500 lg:w-10/12">
          Some of the skills that I can offer are as below
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
