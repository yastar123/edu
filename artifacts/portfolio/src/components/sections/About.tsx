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
                Full Stack Developer dengan keahlian membangun aplikasi dari awal hingga selesai. Saya dikenal sebagai fast learner yang selalu mengutamakan solusi efisien dan scalable.
              </p>
              <p>
                Dengan lebih dari 20 proyek produksi yang telah diluncurkan untuk berbagai klien, saya memahami bahwa rekayasa perangkat lunak yang baik bukan hanya soal kode yang bersih — melainkan soal memecahkan masalah bisnis nyata dan menghadirkan pengalaman pengguna yang mulus.
              </p>
              <p>
                Dari arsitektur backend yang kompleks, integrasi API, hingga tampilan frontend yang presisi — saya mengambil kepemilikan penuh atas seluruh siklus hidup produk.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8 pt-8 border-t border-slate-200">
              <div>
                <h4 className="font-mono text-xs text-primary uppercase tracking-wider mb-1.5">Lokasi</h4>
                <p className="font-semibold text-slate-800 text-sm">Bandar Lampung, ID</p>
              </div>
              <div>
                <h4 className="font-mono text-xs text-primary uppercase tracking-wider mb-1.5">Bahasa</h4>
                <p className="font-semibold text-slate-800 text-sm">Indonesia (Ahli)<br />Inggris (Menengah)</p>
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
                  <span className="text-primary font-mono font-bold text-lg">20+</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1.5">Projects Shipped</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Dari landing page hingga platform SaaS dan sistem enterprise.</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <span className="text-accent font-mono font-bold text-lg">3+</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1.5">Years Experience</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Belajar berkelanjutan di berbagai peran freelance dan kontrak.</p>
              </div>

              <div className="bg-primary col-span-2 rounded-2xl p-6 shadow-sm shadow-primary/20">
                <h3 className="text-white font-bold text-lg mb-2">Siap Untuk Proyek Baru</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  Tersedia untuk kolaborasi freelance, kontrak jangka pendek maupun panjang.
                </p>
                <a
                  href="mailto:yastariskandar@gmail.com"
                  className="mt-4 inline-block text-sm font-semibold text-white underline underline-offset-4 hover:no-underline transition-all"
                >
                  Hubungi Saya →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
