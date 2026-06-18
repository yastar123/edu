import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ExternalLink, FolderKanban, Star } from "lucide-react";

import img1 from "@assets/portofolio-1_1781783085052.png";
import img2 from "@assets/portofolio-2_1781783085052.png";
import img3 from "@assets/portofolio-3_1781783085053.png";
import img4 from "@assets/portofolio-4_1781783085053.png";
import img5 from "@assets/portofolio-5_1781783085054.png";
import img6 from "@assets/portofolio-6_1781783085054.png";
import img7 from "@assets/portofolio-7_1781783085055.png";
import img8 from "@assets/portofolio-8_1781783085055.png";
import img9 from "@assets/portofolio-9_1781783085055.png";
import img10 from "@assets/portofolio-10_1781783085056.png";
import img11 from "@assets/portofolio-11_1781783085056.png";
import img12 from "@assets/portofolio-12_1781783085057.png";
import img13 from "@assets/portofolio-13_1781783085057.png";
import img14 from "@assets/portofolio-14_1781783085058.png";
import img15 from "@assets/portofolio-15_1781783085058.png";
import img16 from "@assets/portofolio-16_1781783085058.png";
import img17 from "@assets/portofolio-17_1781783085059.png";
import img18 from "@assets/portofolio-18_1781783085059.png";
import img19 from "@assets/portofolio-19_1781783085059.png";

const projects = [
  {
    title: "Rental PS",
    category: "Website",
    client: "Gaming Rental Service",
    year: "2024",
    description:
      "Website rental PlayStation dengan booking online, stok real-time, dan sistem pembayaran digital yang mudah digunakan.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "TailwindCSS"],
    gradient: "from-blue-500 via-indigo-500 to-purple-600",
    metric: "200+",
    metricLabel: "Sewaan/Bulan",
    featured: true,
    image: img1,
    liveUrl: "https://rental-ps-gray.vercel.app/",
  },
  {
    title: "Ayam Geprek",
    category: "Website",
    client: "F&B Business",
    year: "2024",
    description:
      "Website usaha ayam geprek dengan menu online, sistem pesan-antar, dan manajemen pesanan yang efisien.",
    tags: ["React", "Node.js", "MongoDB", "Google Maps"],
    gradient: "from-orange-500 via-red-500 to-yellow-500",
    metric: "150+",
    metricLabel: "Pesanan/Hari",
    featured: true,
    image: img2,
    liveUrl: "https://ayam-geprek-theta.vercel.app/",
  },
  {
    title: "Babershop",
    category: "Website",
    client: "Grooming Service",
    year: "2024",
    description:
      "Website babershop dengan booking online, galeri potongan, dan sistem reminder untuk pelanggan setia.",
    tags: ["Next.js", "Firebase", "TailwindCSS", "Calendar API"],
    gradient: "from-gray-500 via-slate-500 to-zinc-600",
    metric: "80+",
    metricLabel: "Pelanggan/Minggu",
    featured: true,
    image: img3,
    liveUrl: "https://babershop-eight.vercel.app/",
  },
  {
    title: "PT Seiiki",
    category: "Website",
    client: "PT SEIIKI",
    year: "2024",
    description:
      "Website resmi untuk PT Seiiki dengan sistem informasi, portal siswa, dan manajemen kegiatan.",
    tags: ["Next.js", "PostgreSQL", "TailwindCSS", "Prisma"],
    gradient: "from-blue-500 via-cyan-500 to-teal-600",
    metric: "1000+",
    metricLabel: "Siswa Aktif",
    featured: true,
    image: img4,
    liveUrl: "https://seyiki.com/",
  },
  {
    title: "EPIC 2026",
    category: "Website",
    client: "International Conference",
    year: "2024",
    description:
      "Website resmi untuk The 5th Engineering Physics International Conference dengan sistem registrasi, jadwal sesi, dan informasi pembicara.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "PostgreSQL"],
    gradient: "from-purple-500 via-violet-500 to-indigo-600",
    metric: "500+",
    metricLabel: "Peserta",
    featured: true,
    image: img5,
    liveUrl: "https://epic.itera.ac.id/",
  },
  {
    title: "Survei Seiiki",
    category: "Website",
    client: "PT SEIIKI",
    year: "2024",
    description:
      "Website sistem survei untuk PT Seiiki dengan form dinamis, analisis data real-time, dan laporan otomatis.",
    tags: ["Next.js", "Node.js", "MongoDB", "Chart.js"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    metric: "2000+",
    metricLabel: "Responden",
    featured: true,
    image: img6,
    liveUrl: "https://survei.seyiki.com/",
  },
  {
    title: "Docs Seiiki",
    category: "Website",
    client: "PT SEIIKI",
    year: "2024",
    description:
      "Website penyimpanan dokumen untuk PT Seiiki dengan sistem upload, pengaturan akses, dan organisasi file yang efisien.",
    tags: ["Next.js", "AWS S3", "PostgreSQL", "TailwindCSS"],
    gradient: "from-amber-500 via-orange-500 to-red-500",
    metric: "5000+",
    metricLabel: "Dokumen",
    featured: true,
    image: img7,
    liveUrl: "https://docs.seyiki.com/",
  },
  {
    title: "KM ITERA",
    category: "Website",
    client: "Keluarga Mahasiswa ITERA",
    year: "2024",
    description:
      "Website keluarga mahasiswa ITERA dengan portal informasi kegiatan, forum diskusi, dan manajemen anggota.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "TailwindCSS"],
    gradient: "from-blue-600 via-indigo-500 to-purple-600",
    metric: "2000+",
    metricLabel: "Anggota Aktif",
    featured: true,
    image: img8,
    liveUrl: "https://www.km-itera.com/",
  },
  {
    title: "Candidate College",
    category: "Website",
    client: "Educational Platform",
    year: "2024",
    description:
      "Platform edukasi untuk persiapan kuliah dengan sistem pembelajaran, tryout online, dan analisis hasil.",
    tags: ["Next.js", "Node.js", "MongoDB", "Chart.js"],
    gradient: "from-green-500 via-emerald-500 to-teal-600",
    metric: "10K+",
    metricLabel: "Siswa",
    featured: true,
    image: img9,
    liveUrl: "https://candidate-college.vercel.app/",
  },
  {
    title: "PPLK ITERA 2024",
    category: "Website",
    client: "Institut Teknologi Sumatera",
    year: "2024",
    description: "Website penerimaan mahasiswa baru ITERA tahun 2024.",
    tags: ["Next.js", "TailwindCSS"],
    gradient: "from-blue-500 via-cyan-500 to-teal-600",
    featured: false,
    image: img10,
    liveUrl: "https://pplikitera.com",
  },
  {
    title: "PPLK ITERA 2025",
    category: "Website",
    client: "Institut Teknologi Sumatera",
    year: "2025",
    description: "Website penerimaan mahasiswa baru ITERA tahun 2025.",
    tags: ["Next.js", "TailwindCSS"],
    gradient: "from-blue-600 via-indigo-500 to-purple-600",
    featured: false,
    image: img11,
    liveUrl: "https://pplkitera.com",
  },
  {
    title: "LHPP Generator",
    category: "Website",
    client: "PT SEIIKI",
    year: "2024",
    description:
      "Website LHPP generator untuk PT Seiiki yang menghasilkan laporan otomatis.",
    tags: ["Next.js", "Node.js"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    featured: false,
    image: img12,
    liveUrl: "https://lhpp.seyiki.com/",
  },
  {
    title: "IoT Control Kampus",
    category: "Website",
    client: "Universitas Lampung",
    year: "2024",
    description:
      "Platform IoT untuk monitoring dan kontrol lampu serta AC di kampus secara real-time.",
    tags: ["IoT", "Node.js", "MQTT"],
    gradient: "from-sky-500 via-blue-500 to-cyan-600",
    featured: false,
    image: img13,
    liveUrl: "https://iot.seyiki.com/",
  },
  {
    title: "SaaS Business Analysis",
    category: "Website",
    client: "PT Meita Gudang Distribusi",
    year: "2024",
    description:
      "SaaS untuk business analysis dan manajemen distribusi gudang.",
    tags: ["SaaS", "Next.js", "PostgreSQL"],
    gradient: "from-indigo-500 via-purple-500 to-fuchsia-600",
    featured: false,
    image: img14,
    liveUrl: "https://gudangdistribusi.com/home",
  },
  {
    title: "Sistem Pencatatan SPP",
    category: "Website",
    client: "SMA PGRI 4 Pasuruan",
    year: "2024",
    description:
      "Website internal pencatatan SPP untuk SMA PGRI 4 Pasuruan (running di localhost).",
    tags: ["PHP", "MySQL"],
    gradient: "from-yellow-500 via-amber-500 to-orange-500",
    featured: false,
    image: img15,
  },
  {
    title: "Web Caffe POS (Multi-role)",
    category: "Website",
    client: "Post Kafe – Lampung",
    year: "2024",
    description:
      "Sistem POS kafe dengan 6 role: owner, manager, gudang, kasir, kafe, pelayan.",
    tags: ["Next.js", "Role-based Auth"],
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    featured: false,
    image: img16,
    liveUrl: "https://web-caffe-pos-cabang-pos-kafe.vercel.app/login",
  },
  {
    title: "MBG POS (Multi-role)",
    category: "Website",
    client: "MBG",
    year: "2024",
    description:
      "Sistem POS MBG dengan role admin, manajer, staff, gudang, yayasan, dan driver.",
    tags: ["Node.js", "Express", "Role-based Auth"],
    gradient: "from-rose-500 via-pink-500 to-purple-600",
    featured: false,
    image: img17,
    liveUrl: "https://mbg-api-server.vercel.app/login",
  },
  {
    title: "Pemira KM ITERA 2025-2026",
    category: "Website",
    client: "KM ITERA",
    year: "2025",
    description:
      "Website pemilihan presiden mahasiswa ITERA untuk periode 2025-2026.",
    tags: ["Next.js", "Voting"],
    gradient: "from-green-500 via-emerald-500 to-teal-600",
    featured: false,
    image: img18,
    liveUrl: "http://pemira-km-itera.my.id/",
  },
  {
    title: "Connect Printing – Cek Kupon",
    category: "Website",
    client: "Connect Printing",
    year: "2024",
    description:
      "Website cek kupon untuk usaha printing di Surabaya (Connect Printing).",
    tags: ["Next.js", "Node.js"],
    gradient: "from-gray-500 via-slate-500 to-zinc-600",
    featured: false,
    image: img19,
  },
  {
    title: "Rental Alat Pesta",
    category: "Website",
    client: "Rental Alat Pesta",
    year: "2024",
    description:
      "Website rental alat pesta dengan katalog online dan sistem pemesanan.",
    tags: ["Next.js", "Stripe"],
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    featured: false,
    liveUrl: "https://rental-alat-pesta.vercel.app/",
  },
  {
    title: "Desktop Bot – Auto Login & Auto Claim",
    category: "Desktop App",
    client: "Internal Tool",
    year: "2024",
    description:
      "Aplikasi desktop untuk otomatisasi login, auto-claim hadiah, dan tugas rutin lainnya.",
    tags: ["Electron", "Node.js", "Automation"],
    gradient: "from-gray-700 via-gray-600 to-gray-500",
    featured: false,
  },
  {
    title: "Pengumuman Kelulusan SMA",
    category: "Website",
    client: "SMA Negeri 1 Padang Gelugur",
    year: "2024",
    description:
      "Website pengumuman kelulusan untuk SMA Negeri 1 Padang Gelugur.",
    tags: ["Next.js", "TailwindCSS"],
    gradient: "from-blue-500 via-cyan-500 to-teal-600",
    featured: false,
    liveUrl: "https://pengunguman-kelulusan-sma.vercel.app/",
  },
  {
    title: "Weekly Report – Candidate College",
    category: "Website",
    client: "Candidate College Jakarta",
    year: "2024",
    description:
      "Website internal weekly report untuk Candidate College Jakarta.",
    tags: ["Internal", "Next.js"],
    gradient: "from-indigo-500 via-blue-500 to-sky-500",
    featured: false,
  },
  {
    title: "AgroMonitoring – IoT Suhu & Cahaya",
    category: "Website",
    client: "Agro Monitoring",
    year: "2024",
    description:
      "Website IoT untuk monitoring suhu dan cahaya di sekitar tanaman.",
    tags: ["IoT", "Node.js", "React"],
    gradient: "from-green-500 via-emerald-500 to-teal-600",
    featured: false,
    liveUrl: "https://agromonitoring.onrender.com/",
  },
];

const featuredProjects = projects.filter((p) => p.featured);
const otherProjects = projects.filter((p) => !p.featured);

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
              Daftar lengkap website dan aplikasi yang sudah saya kerjakan dan launch untuk berbagai klien.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-sm font-semibold">{projects.length} Projects</span>
            </div>
          </motion.div>

          {/* Featured Projects */}
          <section className="mb-16">
            <h2 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: (idx % 3) * 0.07 }}
                  className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all"
                  data-testid={`card-featured-${idx}`}
                >
                  {/* Screenshot */}
                  <div className="relative overflow-hidden h-44 bg-slate-100">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${project.gradient}`} />
                    )}
                    {/* Live URL badge */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-slate-700 hover:text-primary text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" /> Lihat
                      </a>
                    )}
                    {/* Metric badge */}
                    {project.metric && (
                      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-2.5 py-1.5 shadow-sm">
                        <span className="text-primary font-bold text-sm">{project.metric}</span>
                        <span className="text-slate-500 text-xs ml-1">{project.metricLabel}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <span className="text-xs text-slate-400 font-mono shrink-0">{project.year}</span>
                    </div>
                    <p className="text-xs text-primary/70 font-medium mb-2">{project.client}</p>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Other Projects */}
          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-slate-300 rounded-full inline-block" />
              Other Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {otherProjects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: (idx % 6) * 0.05 }}
                  className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all"
                  data-testid={`card-other-${idx}`}
                >
                  {/* Thumbnail */}
                  <div className="relative overflow-hidden h-32 bg-slate-100">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${project.gradient} opacity-80`} />
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-slate-700 hover:text-primary text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" /> Lihat
                      </a>
                    )}
                  </div>

                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                        {project.title}
                      </h3>
                      <span className="text-xs text-slate-400 font-mono shrink-0">{project.year}</span>
                    </div>
                    <p className="text-xs text-primary/70 font-medium mb-2">{project.client}</p>
                    <p className="text-slate-500 text-xs leading-relaxed mb-3 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
