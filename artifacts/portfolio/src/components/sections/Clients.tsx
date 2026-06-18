import { motion } from "framer-motion";

export function Clients() {
  const clientImages = Array.from({ length: 15 }, (_, index) => ({
    src: `/client-${index + 1}.png`,
    alt: `Client ${index + 1}`,
  }));

  const duplicatedClients = [...clientImages, ...clientImages];

  return (
    <section className="py-16 md:py-20 border-y border-slate-200/60 bg-slate-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-semibold mb-2">
            Clients & Partners
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Trusted by companies, organizations & businesses
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden group"
        >
          <style>{`
            @keyframes marqueeClients {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .marquee-clients {
              animation: marqueeClients 32s linear infinite;
            }
            .marquee-clients:hover {
              animation-play-state: paused;
            }
          `}</style>

          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50/50 to-transparent z-10 pointer-events-none" />

          <div className="flex w-max marquee-clients">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.alt}-${index}`}
                className="mr-4 shrink-0 rounded-xl border border-slate-200 bg-white p-3 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className="h-14 w-auto max-w-[160px] object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
