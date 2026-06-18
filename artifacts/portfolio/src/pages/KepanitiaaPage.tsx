import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ClipboardList, Calendar, MapPin } from "lucide-react";

const committees = [
  {
    role: "Head of Technology Implementation Division",
    event: "PEMIRA KM ITERA 2025",
    org: "Keluarga Mahasiswa ITERA",
    period: "2025",
    location: "Institut Teknologi Sumatera",
    description: [
      "Responsible for building the e-voting website for the student presidential election.",
      "Coordinated two sub-divisions (voting and data center) to ensure smooth voting operations throughout the event.",
    ],
    highlight: true,
  },
  {
    role: "Sub-Head of Frontend Developer Division",
    event: "PPLK ITERA 2025 (Student Orientation Program)",
    org: "Institut Teknologi Sumatera",
    period: "June – August 2025",
    location: "Bandar Lampung",
    description: [
      "Led and coordinated the Frontend Developer team in developing the PPLK 2025 event website.",
      "Performed troubleshooting and bug fixes for team members quickly and effectively.",
    ],
    highlight: true,
  },
  {
    role: "Staff – Frontend Developer Division",
    event: "PPLK ITERA 2024 (Student Orientation Program)",
    org: "Institut Teknologi Sumatera",
    period: "June – August 2024",
    location: "Bandar Lampung",
    description: [
      "Translated Figma designs from the Visual & Virtual Development division into functional web pages.",
      "Developed interactive components to enhance website interactivity.",
    ],
    highlight: false,
  },
  {
    role: "Staff – Voting Division",
    event: "PEMIRA KM ITERA 2024",
    org: "Keluarga Mahasiswa ITERA",
    period: "2024",
    location: "Institut Teknologi Sumatera",
    description: [
      "Responsible for checking attendance of students participating in the student presidential election.",
      "Used the IMTEK division's website to record attendance and ensure data was stored accurately.",
    ],
    highlight: false,
  },
  {
    role: "Staff – Creative Division",
    event: "First Gathering — Physics Engineering 2024",
    org: "Himpunan Mahasiswa Teknik Fisika Aryacitya",
    period: "2024",
    location: "Institut Teknologi Sumatera",
    description: [
      "Designed the 3D event logo for the First Gathering of the Physics Engineering department.",
      "Used graphic design software to produce creative and visually compelling logo visualizations.",
    ],
    highlight: false,
  },
];

export default function KepanitiaaPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center rounded-xl">
                <ClipboardList className="w-5 h-5" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                Committees
              </h1>
            </div>
            <p className="text-slate-500 text-base max-w-xl">
              Real contributions across various committees — from website development to technical event operations.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-8">
            {committees.map((item, idx) => (
              <motion.div
                key={`${item.event}-${idx}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Dot */}
                <div
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 shadow-sm ${
                    item.highlight
                      ? "bg-primary border-primary"
                      : "bg-white border-slate-300"
                  }`}
                />

                <div
                  className={`bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ${
                    item.highlight
                      ? "border-primary/30 hover:border-primary/50"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{item.role}</h3>
                      <p
                        className={`font-semibold text-sm mt-0.5 ${
                          item.highlight ? "text-primary" : "text-slate-600"
                        }`}
                      >
                        {item.event}
                      </p>
                      <p className="text-slate-400 text-xs mt-0.5">{item.org}</p>
                    </div>
                    {item.highlight && (
                      <span className="bg-primary/10 text-primary border border-primary/20 text-xs font-semibold px-3 py-1 rounded-full w-fit shrink-0">
                        Leadership
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 shrink-0" />{item.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 shrink-0" />{item.location}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {item.description.map((desc, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-slate-600 text-sm leading-relaxed"
                      >
                        <span
                          className={`mt-1 shrink-0 ${
                            item.highlight ? "text-primary" : "text-slate-400"
                          }`}
                        >
                          ▹
                        </span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
