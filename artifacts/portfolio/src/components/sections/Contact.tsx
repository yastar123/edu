import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl p-8 md:p-16 text-center shadow-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Let's Build Something Great
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            I'm currently available for freelance work and full-time opportunities. If you're looking for a developer who takes ownership and delivers quality, let's talk.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row justify-center items-center gap-6"
          >
            <a 
              href="mailto:yastariskandar@gmail.com"
              className="flex items-center gap-3 w-full md:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors"
            >
              <Mail className="w-5 h-5" /> yastariskandar@gmail.com
            </a>
            
            <a 
              href="tel:+6285366195381"
              className="flex items-center gap-3 w-full md:w-auto bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-bold hover:bg-secondary/80 transition-colors"
            >
              <Phone className="w-5 h-5" /> +62 853 6619 5381
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 pt-8 border-t border-border flex flex-wrap justify-center gap-8 text-muted-foreground font-medium"
          >
            <a href="https://www.linkedin.com/in/edu-juanda-pratama-861249297/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" /> Bandar Lampung, Indonesia
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
