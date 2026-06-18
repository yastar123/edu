import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">About Me</h2>
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>
                Full Stack Developer with expertise in building applications end-to-end. I'm known as a fast learner who always prioritizes efficient and scalable solutions.
              </p>
              <p>
                With 30+ production projects shipped for various clients, I understand that great software engineering is not just about clean code — it's about solving real business problems and delivering seamless user experiences.
              </p>
              <p>
                From complex backend architecture, API integrations, to pixel-perfect frontends — I take full ownership of the entire product lifecycle.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8 pt-8 border-t border-slate-200">
              <div>
                <h4 className="font-mono text-xs text-primary uppercase tracking-wider mb-1.5">Location</h4>
                <p className="font-semibold text-slate-800 text-sm">Bandar Lampung, ID</p>
              </div>
              <div>
                <h4 className="font-mono text-xs text-primary uppercase tracking-wider mb-1.5">Languages</h4>
                <p className="font-semibold text-slate-800 text-sm">Indonesian (Native)<br />English (Intermediate)</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-mono font-bold text-lg">30+</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1.5">Projects Shipped</h3>
                <p className="text-slate-500 text-sm leading-relaxed">From landing pages to SaaS platforms and enterprise systems.</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <span className="text-accent font-mono font-bold text-lg">3+</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1.5">Years Experience</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Continuous learning across freelance and contract roles.</p>
              </div>

              <div className="bg-primary col-span-2 rounded-2xl p-6 shadow-sm shadow-primary/20">
                <h3 className="text-white font-bold text-lg mb-2">Open to New Projects</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  Available for freelance collaboration, short-term or long-term contracts.
                </p>
                <a
                  href="mailto:yastariskandar@gmail.com"
                  className="mt-4 inline-block text-sm font-semibold text-white underline underline-offset-4 hover:no-underline transition-all"
                >
                  Get in Touch →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
