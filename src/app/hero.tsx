"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

function Hero() {
  return (
    <header className="bg-white p-8" id="about">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography variant="h1" color="blue-gray" className="mb-4 lg:text-5xl !leading-tight text-3xl">
            Marcellinus <br /> Aditya
          </Typography>
          <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
            I&apos;m a passionate web developer from Indonesia. Fullstack and Backend are my main focus at the moment. I am ready to dedicate myself to continuing to develop in this field.
          </Typography>
          <div className="grid">
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}

              <Button color="gray" className="w-full px-4 md:w-[12rem]" href="#contacts">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
        <Image width={810} height={810} alt="team work" src={`${getImagePrefix()}image/profile-photo.jpg`} className="h-[36rem] w-full rounded-xl object-cover" />
      </div>
    </header>
  );
}

export default Hero;
