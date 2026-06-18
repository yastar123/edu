import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="min-h-[100dvh] flex items-center justify-center pt-20 relative overflow-hidden bg-white">
      {/* Subtle background grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)",
          backgroundSize: "32px 32px",
          opacity: 0.6,
        }}
      />
      {/* Soft color blobs */}
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
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1] text-slate-900"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Edu Juanda Pratama
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl text-slate-500 font-medium mb-8"
          >
            Full Stack Web Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-slate-500 max-w-2xl mb-12 leading-relaxed"
          >
            I build polished, scalable applications from start to finish. With 20+ live client projects shipped, I bridge the gap between strong engineering and precise design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="/projects"
              className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-md shadow-primary/20"
            >
              View My Work <ArrowRight className="w-4 h-4" />
            </a>

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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
