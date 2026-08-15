"use client";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "marcellinusaditya.official@gmail.com",
    href: "mailto:marcellinusaditya.official@gmail.com",
  },
  {
    label: "WhatsApp",
    value: "0896-9242-5060",
    href: "https://wa.me/6289692425060",
  },
  {
    label: "GitHub",
    value: "github.com/MarcellinusAditya",
    href: "https://github.com/MarcellinusAditya",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/marcellinus-aditya",
    href: "https://www.linkedin.com/in/marcellinus-aditya",
  },
];

export function ContactForm() {
  return (
    <section id="contacts" className="scroll-mt-20 bg-surface">
      <div className="container-page py-24 lg:py-32">
        <div className="card mx-auto max-w-3xl px-6 py-14 text-center sm:px-14">
          <p className="eyebrow mb-4">contact</p>
          <h2 className="section-title">Have a project or a technical challenge in mind?</h2>
          <p className="body-copy mx-auto mt-4 max-w-xl">
            I&apos;m open to internship opportunities, freelance work, and interesting
            technical problems. Let&apos;s talk about how I can help.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="mailto:marcellinusaditya.official@gmail.com" className="btn-primary">
              Email Me
            </a>
            <a href="https://github.com/MarcellinusAditya" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/marcellinus-aditya" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              LinkedIn
            </a>
          </div>

          <div className="mt-12 grid gap-x-10 gap-y-4 border-t border-line pt-8 text-left sm:grid-cols-2">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group flex items-center justify-between gap-4"
              >
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">
                  {link.label}
                </span>
                <span className="text-sm text-ink-soft transition-colors group-hover:text-accent">
                  {link.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;