import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Full Stack Developer with expertise in building applications from start to finish. I pride myself on being a fast learner with new technologies and always prioritizing efficient, scalable solutions.
              </p>
              <p>
                Having shipped over 20 production projects for various clients, I understand that great engineering isn't just about clean code—it's about solving real business problems and delivering seamless user experiences.
              </p>
              <p>
                Whether it's architecting a complex backend, integrating intricate APIs, or crafting a pixel-perfect frontend, I take ownership of the entire product lifecycle.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-8 pt-8 border-t border-border">
              <div>
                <h4 className="font-mono text-sm text-primary uppercase tracking-wider mb-2">Location</h4>
                <p className="font-medium">Bandar Lampung, ID</p>
              </div>
              <div>
                <h4 className="font-mono text-sm text-primary uppercase tracking-wider mb-2">Languages</h4>
                <p className="font-medium">Indonesian (Native)<br/>English (Intermediate)</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-card border border-border rounded-2xl p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="h-full flex flex-col justify-between relative z-10">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-mono font-bold text-xl">20+</span>
                  </div>
                  <h3 className="text-2xl font-bold">Projects Shipped</h3>
                  <p className="text-muted-foreground">From landing pages to complex SaaS platforms and enterprise management systems.</p>
                </div>

                <div className="space-y-4 pt-8 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-mono font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-2xl font-bold">Years Experience</h3>
                  <p className="text-muted-foreground">Continuous learning and professional delivery across freelance and contract roles.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
