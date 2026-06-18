import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin, Github } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";

const roles = [
  "Full Stack Web Developer",
  "React & Next.js Engineer",
  "Backend Developer",
  "UI/UX Enthusiast",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 60);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, 30);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="min-h-[100dvh] flex items-center justify-center pt-20 relative overflow-hidden bg-white"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)",
          backgroundSize: "32px 32px",
          opacity: 0.6,
        }}
      />
      {/* Color blobs */}
      <div className="absolute top-1/3 left-1/4 w-[480px] h-[480px] bg-blue-100 rounded-full blur-[120px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[360px] h-[360px] bg-sky-100 rounded-full blur-[100px] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[2px] w-10 bg-primary rounded-full" />
            <span className="text-primary font-mono text-xs uppercase tracking-widest font-semibold">
              Based in Bandar Lampung, Indonesia
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1] text-slate-900"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Edu Juanda
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl text-slate-600 font-medium mb-8 h-10 flex items-center"
          >
            <span>{displayed}</span>
            <span className="ml-0.5 inline-block w-[2px] h-7 bg-primary animate-pulse" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-500 max-w-2xl mb-12 leading-relaxed"
          >
            I build polished, scalable applications from start to finish. With
            30+ live client projects shipped, I bridge the gap between strong
            engineering and precise design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-md shadow-primary/20 text-sm sm:text-base"
            >
              View My Work <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center gap-3">
              <a
                href="mailto:yastariskandar@gmail.com"
                className="p-3 bg-slate-100 text-slate-600 rounded-full hover:bg-primary hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/edu-juanda-pratama-861249297/"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-slate-100 text-slate-600 rounded-full hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-slate-100 text-slate-600 rounded-full hover:bg-primary hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-16 pt-10 border-t border-slate-200 grid grid-cols-3 gap-6 max-w-lg"
          >
            {[
              { value: "30+", label: "Projects Shipped" },
              { value: "3+", label: "Years Exp." },
              { value: "15+", label: "Happy Clients" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-mono">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
