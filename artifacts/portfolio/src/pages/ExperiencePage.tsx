import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Web Developer",
    company: "Freelance",
    type: "Kontrak",
    date: "Januari 2026 – Sekarang",
    location: "Remote (WFH)",
    description: [
      "Merancang dan mengembangkan situs web responsif menggunakan framework modern.",
      "Fokus pada kinerja, keamanan, dan pengalaman pengguna (UX) yang optimal.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company: "PT MEITA GUDANG DISTRIBUSI",
    type: "Kontrak",
    date: "Januari – Mei 2026",
    location: "Remote (WFH)",
    description: [
      "Membuat Website SaaS dengan ReactJS dan Golang untuk analisis bisnis distribusi.",
      "Melakukan audit ke semua fitur dan menu di website untuk memastikan keandalan sistem.",
    ],
  },
  {
    title: "Asisten Praktikum – Pengenalan Komputer dan Software 2",
    company: "Institut Teknologi Sumatera",
    type: "Kontrak",
    date: "Maret – Juni 2025",
    location: "Bandar Lampung",
    description: [
      "Mendampingi dosen dalam mengajar dasar-dasar pemrograman menggunakan bahasa C++ dan Flowgorithm.",
      "Menyusun soal latihan dan kuis untuk penguatan materi praktikum.",
    ],
  },
  {
    title: "Co-Head Division – Frontend Developer",
    company: "Candidate College",
    type: "Magang",
    date: "Oktober 2024 – Maret 2025",
    location: "Remote (WFH)",
    description: [
      "Memimpin divisi Frontend Developer sebagai Co-Head dengan tanggung jawab pada review dan optimisasi kode, serta debugging.",
      "Melakukan pengujian unit secara menyeluruh untuk mencapai coverage pengujian hingga 90%, memastikan kualitas, kinerja, dan fungsionalitas kode.",
    ],
  },
  {
    title: "Asisten Praktikum – Pengenalan Komputer dan Software 1",
    company: "Institut Teknologi Sumatera",
    type: "Kontrak",
    date: "Agustus – Desember 2024",
    location: "Bandar Lampung",
    description: [
      "Membantu dosen dalam proses pengajaran mata kuliah Pengenalan Komputer dan Software.",
      "Mengajarkan keterampilan praktis kepada mahasiswa dalam penggunaan Excel dan Microsoft Word.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "PT. Winnicode Garuda Indonesia",
    type: "Magang",
    date: "Agustus – September 2024",
    location: "Remote (WFH)",
    description: [
      "Merancang dan membangun situs portal berita menggunakan Next.js dan PostgreSQL.",
      "Bertanggung jawab atas pengembangan front-end dan back-end untuk pengalaman pengguna yang mulus.",
    ],
  },
];

const typeBadge: Record<string, string> = {
  Kontrak: "bg-blue-50 text-blue-700 border border-blue-200",
  Magang: "bg-emerald-50 text-emerald-700 border border-emerald-200",
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
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Pengalaman Kerja</h1>
            </div>
            <p className="text-slate-500 text-base max-w-xl">
              Perjalanan profesional saya — dari magang hingga kontrak penuh sebagai Full Stack Developer.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-primary shadow-sm" />

                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 leading-snug">{exp.title}</h3>
                      <p className="text-primary font-semibold text-sm mt-0.5">{exp.company}</p>
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full w-fit shrink-0 ${typeBadge[exp.type] ?? "bg-slate-100 text-slate-600"}`}
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
                      <li key={i} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
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
    </div>
  );
}
