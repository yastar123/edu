import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export function Projects() {
  const projects = [
    { name: "seyiki.com", desc: "Company profile for PT SEIIKI", url: "https://seyiki.com/" },
    { name: "docs.seyiki.com", desc: "Document management system for PT SEIIKI", url: "https://docs.seyiki.com/" },
    { name: "lhpp.seyiki.com", desc: "LHPP report generator for PT SEIIKI", url: "https://lhpp.seyiki.com/" },
    { name: "survei.seyiki.com", desc: "Survey platform for PT SEIIKI", url: "https://survei.seyiki.com/" },
    { name: "iot.seyiki.com", desc: "IoT monitoring & control (lights/AC) for Universitas Lampung", url: "https://iot.seyiki.com/login" },
    { name: "gudangdistribusi.com", desc: "SaaS business analysis for PT MEITA GUDANG DISTRIBUSI", url: "https://gudangdistribusi.com/home" },
    { name: "epic.itera.ac.id", desc: "International Conference Website (Physics Engineering 5th)", url: "https://epic.itera.ac.id/" },
    { name: "km-itera.com", desc: "KM ITERA 2026 organization website", url: "https://www.km-itera.com/" },
    { name: "pemira-km-itera.my.id", desc: "Student president election website ITERA 2025-2026", url: "http://pemira-km-itera.my.id/" },
    { name: "travel-seven-sigma.vercel.app", desc: "Travel agency website Jakarta", url: "https://travel-seven-sigma.vercel.app/" },
    { name: "smartcenterindonesia.com", desc: "SaaS for SMART CENTER INDONESIA", url: "https://smartcenterindonesia.com/" },
    { name: "pplkitera.com", desc: "New student admission website ITERA 2024 & 2025", url: "http://pplkitera.com/" }
  ];

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Selected Projects</h2>
          <p className="text-lg text-muted-foreground">
            A curated list of my 20+ shipped applications, ranging from enterprise dashboards to corporate profiles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
              className="group block bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
