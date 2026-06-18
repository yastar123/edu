import { motion } from "framer-motion";

export function Clients() {
  const clientImages = Array.from({ length: 15 }, (_, index) => ({
    src: `/client-${index + 1}.png`,
    alt: `Client ${index + 1}`,
  }));

  const duplicatedClients = [...clientImages, ...clientImages];

  return (
    <section className="py-16 md:py-20 border-y border-border/50 bg-slate-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-semibold">
            Clients & Partners
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
            Websites built for companies, organizations, and businesses
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <style>{`
            @keyframes marqueeClients {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
          `}</style>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="flex w-max"
            style={{ animation: "marqueeClients 32s linear infinite" }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.alt}-${index}`}
                className="mr-4 shrink-0 rounded-2xl border border-border/50 bg-white p-4 shadow-sm"
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className="h-16 w-auto max-w-45 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
