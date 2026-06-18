import { motion } from "framer-motion";
import { Users, Award } from "lucide-react";

export function Organizations() {
  const orgs = [
    {
      title: "Staff, Ministry of Information Technology",
      org: "KM ITERA",
      date: "Mar 2025 – Jan 2026",
      desc: "Developed and redesigned KM ITERA website using modern frameworks. Implemented efficient frontend-backend integration."
    },
    {
      title: "Staff Design Division",
      org: "Himpunan Mahasiswa Teknik Fisika Aryacitya",
      date: "Dec 2024 – Jan 2026",
      desc: "Responsible for creating visual content and video editing for organization's social media and events."
    },
    {
      title: "Sub-Head Frontend Developer",
      org: "PPLK ITERA 2025",
      date: "Jun – Aug 2025",
      desc: "Led and coordinated the Frontend Developer team for PPLK 2025 website."
    },
    {
      title: "Head of Imtek Division",
      org: "PEMIRA KM 2025",
      date: "2025",
      desc: "Built the e-voting website for student president election, coordinating 2 sub-divisions."
    }
  ];

  return (
    <section id="organizations" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Organizations & Volunteering</h2>
          <p className="text-lg text-muted-foreground">
            Leadership and technical contributions outside of formal employment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {orgs.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-border p-8 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                {idx % 2 === 0 ? <Users className="w-24 h-24" /> : <Award className="w-24 h-24" />}
              </div>
              <div className="relative z-10">
                <span className="text-sm font-mono text-primary font-medium">{item.date}</span>
                <h3 className="text-xl font-bold mt-2 mb-1">{item.title}</h3>
                <h4 className="text-muted-foreground font-medium mb-4">{item.org}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
