import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Web Developer",
    company: "Freelance",
    type: "Contract",
    date: "January 2026 – Present",
    location: "Remote (WFH)",
    description: [
      "Design and develop responsive websites using modern frameworks.",
      "Focus on performance, security, and optimal user experience (UX).",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company: "PT MEITA GUDANG DISTRIBUSI",
    type: "Contract",
    date: "January – May 2026",
    location: "Remote (WFH)",
    description: [
      "Built a SaaS website with ReactJS and Golang for distribution business analytics.",
      "Conducted comprehensive audits across all features and menus to ensure system reliability.",
    ],
  },
  {
    title: "Lab Assistant – Computer & Software Introduction 2",
    company: "Institut Teknologi Sumatera",
    type: "Contract",
    date: "March – June 2025",
    location: "Bandar Lampung",
    description: [
      "Assisted the lecturer in teaching programming fundamentals using C++ and Flowgorithm.",
      "Prepared practice exercises and quizzes to reinforce lab course material.",
    ],
  },
  {
    title: "Co-Head Division – Frontend Developer",
    company: "Candidate College",
    type: "Internship",
    date: "October 2024 – March 2025",
    location: "Remote (WFH)",
    description: [
      "Led the Frontend Developer division as Co-Head, responsible for code review, optimization, and debugging.",
      "Conducted comprehensive unit testing to achieve up to 90% test coverage, ensuring code quality, performance, and functionality.",
    ],
  },
  {
    title: "Lab Assistant – Computer & Software Introduction 1",
    company: "Institut Teknologi Sumatera",
    type: "Contract",
    date: "August – December 2024",
    location: "Bandar Lampung",
    description: [
      "Assisted the lecturer in the Computer and Software Introduction course.",
      "Taught students practical skills in Excel and Microsoft Word.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "PT. Winnicode Garuda Indonesia",
    type: "Internship",
    date: "August – September 2024",
    location: "Remote (WFH)",
    description: [
      "Designed and built a news portal website using Next.js and PostgreSQL.",
      "Responsible for both frontend and backend development to deliver a seamless user experience.",
    ],
  },
];

const typeBadge: Record<string, string> = {
  Contract: "bg-blue-50 text-blue-700 border border-blue-200",
  Internship: "bg-emerald-50 text-emerald-700 border border-emerald-200",
};

export default function ExperiencePage() {
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
                <Briefcase className="w-5 h-5" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                Work Experience
              </h1>
            </div>
            <p className="text-slate-500 text-base max-w-xl">
              My professional journey — from internships to full contracts as a Full Stack Developer.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={`${exp.title}-${idx}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-primary shadow-sm" />

                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 leading-snug">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-semibold text-sm mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full w-fit shrink-0 ${
                        typeBadge[exp.type] ?? "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-5">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 shrink-0" />
                      {exp.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 shrink-0" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-slate-600 text-sm leading-relaxed"
                      >
                        <span className="text-primary mt-1 shrink-0">▹</span>
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
