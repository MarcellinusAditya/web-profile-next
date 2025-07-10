"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

const PROJECTS = [
  {
    img: `${getImagePrefix()}image/prima.PNG`,
    title: "Prima Apotek",
    desc: "A simple e-commerce website that sells medicines. Created with Laravel technology and integrated with Midtrans payment gateway.",
    href: "http://primaapotek.vitroweb.my.id/",
  },
  {
    img: `${getImagePrefix()}image/tickox.PNG`,
    title: "Tickox",
    desc: "Tourist ticket sales website using a mobile friendly approach. Built with Laravel and Filament as content management.",
    href: "https://tickox.vitroweb.my.id/",
  },
  {
    img: `${getImagePrefix()}image/minisoccer.PNG`,
    title: "Soccer Field Rent (Microservice API Integrated)",
    desc: "Soccer field rental website with specific locations and times. Built with a microservice backend using Golang and integrated on the frontend using React. It has also been integrated with the Midtrans payment gateway and deployed on GCS with Jenkins.",
    href: "https://fe.vitroweb.site/",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8" id="projects">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography variant="lead" className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12">
          Several projects that I have developed or participated in
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
