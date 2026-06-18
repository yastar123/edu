import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Users, Calendar, MapPin } from "lucide-react";

const organisations = [
  {
    role: "Staff – Ministry of Information Technology",
    org: "Keluarga Mahasiswa ITERA (KM ITERA)",
    period: "March 2025 – January 2026",
    location: "Institut Teknologi Sumatera",
    description: [
      "Developed and redesigned the KM ITERA website using Laravel, ReactJS, and InertiaJS.",
      "Implemented efficient frontend-backend integration using InertiaJS.",
    ],
  },
  {
    role: "Staff Design Division – Media & Information Department",
    org: "Himpunan Mahasiswa Teknik Fisika Aryacitya",
    period: "December 2024 – January 2026",
    location: "Institut Teknologi Sumatera",
    description: [
      "Responsible for creating and editing visual content for the organization's social media.",
      "Edited videos using CapCut and Adobe Premiere Pro for promotions, documentation, and events.",
    ],
  },
  {
    role: "Staff – Ministry of Information Technology",
    org: "KM ITERA Cabinet",
    period: "October – December 2024",
    location: "Institut Teknologi Sumatera",
    description: [
      "Developed the student organization website using Laravel, ReactJS, and Statamic.",
      "Translated Figma designs into a fully functional and responsive website.",
    ],
  },
];

const volunteers = [
  {
    role: "Division Head – Website & WordPress Developer",
    org: "BidanPreneur",
    period: "August – December 2024",
    location: "Remote (WFH)",
    type: "Volunteer",
    description: [
      "Created tasks for team members and provided assistance and solutions when challenges arose.",
      "Developed and maintained a WordPress website, including theme and plugin customization.",
    ],
  },
  {
    role: "Frontend Developer",
    org: "Independent Project",
    period: "March – June 2024",
    location: "Remote (WFH)",
    type: "Volunteer",
    description: [
      "Developed responsive and visually appealing user interfaces using ReactJS and Tailwind CSS.",
      "Ensured cross-device and cross-browser compatibility for a seamless user experience.",
    ],
  },
];

export default function OrganisasiPage() {
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
                <Users className="w-5 h-5" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                Organizations
              </h1>
            </div>
            <p className="text-slate-500 text-base max-w-xl">
              Active involvement in student organizations and volunteer activities.
            </p>
          </motion.div>

          {/* Student Organizations */}
          <section className="mb-14">
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full inline-block" />
              Student Organizations
            </h2>
            <div className="space-y-5">
              {organisations.map((item, idx) => (
                <motion.div
                  key={`${item.org}-${idx}`}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{item.role}</h3>
                      <p className="text-primary font-semibold text-sm mt-0.5">{item.org}</p>
                    </div>
                    <span className="bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full w-fit shrink-0">
                      Organization
                    </span>
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
                      <li key={i} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                        <span className="text-primary mt-1 shrink-0">▹</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Volunteer */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-accent rounded-full inline-block" />
              Volunteer
            </h2>
            <div className="space-y-5">
              {volunteers.map((item, idx) => (
                <motion.div
                  key={`${item.org}-${idx}`}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{item.role}</h3>
                      <p className="text-accent font-semibold text-sm mt-0.5">{item.org}</p>
                    </div>
                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold px-3 py-1 rounded-full w-fit shrink-0">
                      {item.type}
                    </span>
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
                      <li key={i} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                        <span className="text-accent mt-1 shrink-0">▹</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
