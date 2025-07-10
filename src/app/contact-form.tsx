"use client";

import { Typography, Card, CardBody, Radio, Input, Textarea, Button, IconButton } from "@material-tailwind/react";
import { ChatBubbleOvalLeftIcon, CodeBracketIcon, EnvelopeIcon, PaperClipIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";

export function ContactForm() {
  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Contact Us
        </Typography>
        <Typography variant="lead" className="mx-auto w-full lg:w-5/12 !text-gray-500">
          Have something you want to ask? Dont hesitate to contact the contact below
        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container lg:w-1/2 mx-auto border border-gray/50">
          <CardBody className="grid grid-cols-1  md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <Typography variant="h4" color="white" className="mb-2">
                Contact Information
              </Typography>
              <Typography variant="lead" className="mx-auto mb-8 text-base !text-gray-500"></Typography>
              <div className="flex gap-5">
                <ChatBubbleOvalLeftIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  0896-9242-5060 (Whatsapp)
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  marcellinusaditya.official@gmail.com
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <CodeBracketIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  <a href="https://github.com/MarcellinusAditya" target="_blank">
                    MarcellinusAditya (Github)
                  </a>
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <PaperClipIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  <a href="https://www.linkedin.com/in/marcellinus-aditya" target="_blank">
                    Marcellinus Aditya (LinkedIn)
                  </a>
                </Typography>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
