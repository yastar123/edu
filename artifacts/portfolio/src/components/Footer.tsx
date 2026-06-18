import { Code2, Mail, Linkedin, Phone, Github } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Organizations", href: "/organisasi" },
    { name: "Committees", href: "/kepanitiaan" },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4 md:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-primary font-bold text-lg mb-3"
            >
              <Code2 className="w-5 h-5" />
              <span>Edu Juanda Pratama</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Full Stack Developer based in Bandar Lampung. Building fast, modern, and scalable web applications.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-4">
              Contact
            </p>
            <div className="space-y-2 text-sm text-slate-600">
              <a
                href="mailto:yastariskandar@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                yastariskandar@gmail.com
              </a>
              <a
                href="tel:+6285366195381"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                +62 853 6619 5381
              </a>
              <a
                href="https://www.linkedin.com/in/edu-juanda-pratama-861249297/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4 shrink-0" />
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4 shrink-0" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-400 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Edu Juanda Pratama. All rights reserved.
          </p>
          <p className="text-slate-400 text-xs">
            Built with React · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
