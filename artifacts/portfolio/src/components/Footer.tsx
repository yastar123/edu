import { Code2, Mail, Linkedin, Phone } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2 text-primary font-bold text-lg">
            <Code2 className="w-5 h-5" />
            <span>Edu Juanda Pratama</span>
          </Link>

          <div className="flex items-center gap-4">
            <a
              href="mailto:yastariskandar@gmail.com"
              className="p-2 rounded-lg text-slate-500 hover:text-primary hover:bg-slate-100 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="tel:+6285366195381"
              className="p-2 rounded-lg text-slate-500 hover:text-primary hover:bg-slate-100 transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/edu-juanda-pratama-861249297/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-primary hover:bg-slate-100 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Edu Juanda Pratama. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
