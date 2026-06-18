import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 md:p-14 text-center shadow-sm">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-slate-900"
          >
            Let's Build Something Great
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 mb-10 max-w-xl mx-auto leading-relaxed"
          >
            I'm available for freelance and full-time work. If you're looking for a reliable developer who delivers top-quality results, let's talk.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <a
              href="mailto:yastariskandar@gmail.com"
              data-testid="link-email"
              className="flex items-center gap-2.5 w-full sm:w-auto bg-primary text-white px-7 py-3.5 rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-md shadow-primary/20 text-sm"
            >
              <Mail className="w-4 h-4" /> yastariskandar@gmail.com
            </a>

            <a
              href="tel:+6285366195381"
              data-testid="link-phone"
              className="flex items-center gap-2.5 w-full sm:w-auto bg-slate-100 text-slate-700 px-7 py-3.5 rounded-full font-semibold hover:bg-slate-200 transition-colors text-sm"
            >
              <Phone className="w-4 h-4" /> +62 853 6619 5381
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 pt-8 border-t border-slate-100 flex flex-wrap justify-center gap-8 text-slate-500 text-sm font-medium"
          >
            <a
              href="https://www.linkedin.com/in/edu-juanda-pratama-861249297/"
              target="_blank"
              rel="noreferrer"
              data-testid="link-linkedin"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Bandar Lampung, Indonesia
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
