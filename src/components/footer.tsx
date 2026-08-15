import Link from "next/link";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/MarcellinusAditya" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/marcellinus-aditya" },
  { label: "Email", href: "mailto:marcellinusaditya.official@gmail.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-page flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div>
          <p className="font-mono text-sm font-medium text-ink">
            <span className="text-accent">$</span> marcellinus.aditya
          </p>
          <p className="mt-1 text-sm text-ink-faint">Software engineer · Full-stack &amp; backend</p>
        </div>

        <ul className="flex gap-6">
          {SOCIALS.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-soft transition-colors hover:text-accent"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-sm text-ink-faint">
          &copy; {new Date().getFullYear()} Marcellinus Aditya. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}

export default Footer;