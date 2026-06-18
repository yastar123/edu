import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ExternalLink, FolderKanban } from "lucide-react";

const projects = [
  {
    name: "seyiki.com",
    client: "PT SEIIKI",
    desc: "Website company profile untuk PT SEIIKI di Lampung.",
    url: "https://seyiki.com/",
    category: "Company Profile",
  },
  {
    name: "docs.seyiki.com",
    client: "PT SEIIKI",
    desc: "Website penyimpanan dan manajemen dokumen perusahaan.",
    url: "https://docs.seyiki.com/",
    category: "Document Management",
  },
  {
    name: "lhpp.seyiki.com",
    client: "PT SEIIKI",
    desc: "Website generate laporan LHPP secara otomatis.",
    url: "https://lhpp.seyiki.com/",
    category: "Report Generator",
  },
  {
    name: "survei.seyiki.com",
    client: "PT SEIIKI",
    desc: "Platform survei online untuk keperluan internal perusahaan.",
    url: "https://survei.seyiki.com/",
    category: "Survey Platform",
  },
  {
    name: "iot.seyiki.com",
    client: "Universitas Lampung",
    desc: "Website monitoring dan kontrol lampu & AC secara real-time berbasis IoT.",
    url: "https://iot.seyiki.com/login",
    category: "IoT Dashboard",
  },
  {
    name: "gudangdistribusi.com",
    client: "PT MEITA GUDANG DISTRIBUSI",
    desc: "Website SaaS analisis bisnis distribusi dengan fitur lengkap.",
    url: "https://gudangdistribusi.com/home",
    category: "SaaS",
  },
  {
    name: "epic.itera.ac.id",
    client: "Institut Teknologi Sumatera",
    desc: "Website konferensi internasional teknik fisika ke-5.",
    url: "https://epic.itera.ac.id/",
    category: "Conference",
  },
  {
    name: "pplkitera.com",
    client: "Institut Teknologi Sumatera",
    desc: "Website penerimaan mahasiswa baru ITERA tahun 2024 dan 2025.",
    url: "http://pplkitera.com/",
    category: "Admission",
  },
  {
    name: "candidate-college.vercel.app",
    client: "Candidate College",
    desc: "Website company profile untuk lembaga pendidikan Candidate College.",
    url: "https://candidate-college.vercel.app/",
    category: "Company Profile",
  },
  {
    name: "km-itera.com",
    client: "Keluarga Mahasiswa ITERA",
    desc: "Website resmi organisasi mahasiswa KM ITERA 2026.",
    url: "https://www.km-itera.com/",
    category: "Organization",
  },
  {
    name: "pemira-km-itera.my.id",
    client: "KM ITERA",
    desc: "Website e-voting pemilihan presiden mahasiswa ITERA 2025–2026.",
    url: "http://pemira-km-itera.my.id/",
    category: "E-Voting",
  },
  {
    name: "pemira-himatekia-itera.my.id",
    client: "Himatekia ITERA",
    desc: "Website pemilihan ketua himpunan teknik kimia ITERA 2025.",
    url: "http://pemira-himatekia-itera.my.id/",
    category: "E-Voting",
  },
  {
    name: "travel-seven-sigma.vercel.app",
    client: "Travel Agency Jakarta",
    desc: "Website untuk agen perjalanan wisata di Jakarta.",
    url: "https://travel-seven-sigma.vercel.app/",
    category: "Travel",
  },
  {
    name: "pengunguman-kelulusan-sma.vercel.app",
    client: "SMA Negeri 1 Padang Gelugur",
    desc: "Website pengumuman kelulusan siswa SMA.",
    url: "https://pengunguman-kelulusan-sma.vercel.app/",
    category: "Education",
  },
  {
    name: "lavender-bloom-invites.vercel.app",
    client: "Private Client",
    desc: "Website undangan digital pernikahan yang elegan.",
    url: "https://lavender-bloom-invites.vercel.app/",
    category: "Wedding Invitation",
  },
  {
    name: "web-caffe-pos-cabang-pos-kafe.vercel.app",
    client: "Kafe – Lampung",
    desc: "Website POS multi-cabang untuk kafe di Lampung.",
    url: "https://web-caffe-pos-cabang-pos-kafe.vercel.app/",
    category: "POS System",
  },
  {
    name: "smartcenterindonesia.com",
    client: "Smart Center Indonesia",
    desc: "Website SaaS untuk manajemen Smart Center Indonesia.",
    url: "https://smartcenterindonesia.com/",
    category: "SaaS",
  },
  {
    name: "bidanprenuer.com",
    client: "BidanPreneur",
    desc: "Website company profile untuk BidanPreneur.",
    url: "http://bidanprenuer.com/",
    category: "Company Profile",
  },
  {
    name: "eskm.id",
    client: "PT ENERGI SUMBER KEHIDUPAN MANUSIA",
    desc: "Website company profile PT ESKM.",
    url: "https://eskm.id/",
    category: "Company Profile",
  },
];

const categoryColors: Record<string, string> = {
  "Company Profile": "bg-violet-50 text-violet-700",
  "Document Management": "bg-sky-50 text-sky-700",
  "Report Generator": "bg-amber-50 text-amber-700",
  "Survey Platform": "bg-teal-50 text-teal-700",
  "IoT Dashboard": "bg-green-50 text-green-700",
  SaaS: "bg-blue-50 text-blue-700",
  Conference: "bg-indigo-50 text-indigo-700",
  Admission: "bg-orange-50 text-orange-700",
  Organization: "bg-cyan-50 text-cyan-700",
  "E-Voting": "bg-rose-50 text-rose-700",
  Travel: "bg-emerald-50 text-emerald-700",
  Education: "bg-yellow-50 text-yellow-700",
  "Wedding Invitation": "bg-pink-50 text-pink-700",
  "POS System": "bg-purple-50 text-purple-700",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center rounded-xl">
                <FolderKanban className="w-5 h-5" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Projects</h1>
            </div>
            <p className="text-slate-500 text-base max-w-xl">
              Daftar lengkap website yang sudah saya kerjakan dan launch untuk berbagai klien — perusahaan, institusi, maupun perorangan.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-sm font-semibold">{projects.length} Projects Launched</span>
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, idx) => (
              <motion.a
                key={idx}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: (idx % 6) * 0.06 }}
                className="group block bg-white border border-slate-200 rounded-2xl p-5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all"
                data-testid={`card-project-${idx}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      categoryColors[project.category] ?? "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {project.category}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-1 group-hover:text-primary transition-colors truncate">
                  {project.name}
                </h3>
                <p className="text-xs text-primary/70 font-medium mb-2">{project.client}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{project.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
