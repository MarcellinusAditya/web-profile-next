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
    img: `${getImagePrefix()}image/deteksi-diabetes.PNG`,
    title: "Diabetes Detection",
    desc: "Diabetes detection website created with Python backend using the KNN method which is optimized with a Genetic Algorithm. This project is a final exam project with the conclusion that it has succeeded in increasing accuracy by 5-8%.",
    href: "https://deteksi-diabetes.vitroweb.my.id/",
  },
  {
    img: `${getImagePrefix()}image/minisoccer.PNG`,
    title: "Soccer Field Rent (Microservice API Integrated)",
    desc: "Soccer field rental website with specific locations and times. Built with a microservice backend using Golang and integrated on the frontend using React. It has also been integrated with the Midtrans payment gateway and deployed on GCS with Jenkins.",
    href: "https://fe.vitroweb.site/",
  },
  {
    img: `${getImagePrefix()}image/portal.PNG`,
    title: "Item Portal Web ( DB Klik Intern )",
    desc: "Portal website that manages information related to sales products, distributors, and ordering products from distributors. I participated in creating purchase list features, receive items, and several distribution features on e-commerce websites. (Laravel)",
    href: "/Porto-Portal_DB_Klik.pdf",
  },
  {
    img: `${getImagePrefix()}image/omnichannel.PNG`,
    title: "Omnichannel Web ( DB Klik Intern )",
    desc: "An omnichannel website that manages many staff needs in carrying out work such as order management, stock management, goods receipt, and others. I participated in creating the receive item and serial number features. (Laravel)",
    href: "",
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
