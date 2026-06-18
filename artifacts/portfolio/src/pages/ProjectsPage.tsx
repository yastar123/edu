import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ExternalLink, FolderKanban } from "lucide-react";

const projects = [
  {
    title: "Rental PS",
    category: "website",
    client: "Gaming Rental Service",
    year: "2024",
    description:
      "Website rental PlayStation dengan booking online, stok real-time, dan sistem pembayaran digital yang mudah digunakan.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "TailwindCSS"],
    gradient: "from-blue-500 via-indigo-500 to-purple-600",
    metric: "200+",
    metricLabel: "Sewaan/Bulan",
    featured: true,
    image: "/portofolio-1.png",
    liveUrl: "https://rental-ps-gray.vercel.app/",
  },
  {
    title: "Ayam Geprek",
    category: "website",
    client: "F&B Business",
    year: "2024",
    description:
      "Website usaha ayam geprek dengan menu online, sistem pesan-antar, dan manajemen pesanan yang efisien.",
    tags: ["React", "Node.js", "MongoDB", "Google Maps"],
    gradient: "from-orange-500 via-red-500 to-yellow-500",
    metric: "150+",
    metricLabel: "Pesanan/Hari",
    featured: true,
    image: "/portofolio-2.png",
    liveUrl: "https://ayam-geprek-theta.vercel.app/",
  },
  {
    title: "Babershop",
    category: "website",
    client: "Grooming Service",
    year: "2024",
    description:
      "Website babershop dengan booking online, galeri potongan, dan sistem reminder untuk pelanggan setia.",
    tags: ["Next.js", "Firebase", "TailwindCSS", "Calendar API"],
    gradient: "from-gray-500 via-slate-500 to-zinc-600",
    metric: "80+",
    metricLabel: "Pelanggan/Minggu",
    featured: true,
    image: "/portofolio-3.png",
    liveUrl: "https://babershop-eight.vercel.app/",
  },
  {
    title: "PT Seiiki",
    category: "website",
    client: "Educational Institution",
    year: "2024",
    description:
      "Website resmi untuk PT Seiiki dengan sistem informasi akademik, portal siswa, dan manajemen kegiatan sekolah.",
    tags: ["Next.js", "PostgreSQL", "TailwindCSS", "Prisma"],
    gradient: "from-blue-500 via-cyan-500 to-teal-600",
    metric: "1000+",
    metricLabel: "Siswa Aktif",
    featured: true,
    image: "/portofolio-4.png",
    liveUrl: "https://seyiki.com/",
  },
  {
    title: "EPIC 2026",
    category: "website",
    client: "International Conference",
    year: "2024",
    description:
      "Website resmi untuk The 5th Engineering Physics International Conference dengan sistem registrasi, jadwal sesi, dan informasi pembicara.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "PostgreSQL"],
    gradient: "from-purple-500 via-violet-500 to-indigo-600",
    metric: "500+",
    metricLabel: "Peserta",
    featured: true,
    image: "/portofolio-5.png",
    liveUrl: "https://epic.itera.ac.id/",
  },
  {
    title: "Survei Seiiki",
    category: "website",
    client: "Educational Institution",
    year: "2024",
    description:
      "Website sistem survei untuk PT Seiiki dengan form dinamis, analisis data real-time, dan laporan otomatis.",
    tags: ["Next.js", "Node.js", "MongoDB", "Chart.js"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    metric: "2000+",
    metricLabel: "Responden",
    featured: true,
    image: "/portofolio-6.png",
    liveUrl: "https://survei.seyiki.com/",
  },
  {
    title: "Docs Seiiki",
    category: "website",
    client: "Educational Institution",
    year: "2024",
    description:
      "Website penyimpanan dokumen untuk PT Seiiki dengan sistem upload, pengaturan akses, dan organisasi file yang efisien.",
    tags: ["Next.js", "AWS S3", "PostgreSQL", "TailwindCSS"],
    gradient: "from-amber-500 via-orange-500 to-red-500",
    metric: "5000+",
    metricLabel: "Dokumen",
    featured: true,
    image: "/portofolio-7.png",
    liveUrl: "https://docs.seyiki.com/",
  },
  {
    title: "KM Itera",
    category: "website",
    client: "Student Organization",
    year: "2024",
    description:
      "Website keluarga mahasiswa ITERA dengan portal informasi kegiatan, forum diskusi, dan manajemen anggota.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "TailwindCSS"],
    gradient: "from-blue-600 via-indigo-500 to-purple-600",
    metric: "2000+",
    metricLabel: "Anggota Aktif",
    featured: true,
    image: "/portofolio-8.png",
    liveUrl: "https://www.km-itera.com/",
  },
  {
    title: "Candidate College",
    category: "website",
    client: "Educational Platform",
    year: "2024",
    description:
      "Platform edukasi untuk persiapan kuliah dengan sistem pembelajaran, tryout online, dan analisis hasil.",
    tags: ["Next.js", "Node.js", "MongoDB", "Chart.js"],
    gradient: "from-green-500 via-emerald-500 to-teal-600",
    metric: "10K+",
    metricLabel: "Siswa",
    featured: true,
    image: "/portofolio-9.png",
    liveUrl: "https://candidate-college.vercel.app/",
  },
  {
    title: "Website Penerimaan Mahasiswa Baru ITERA 2024",
    category: "website",
    client: "Penerimaan Mahasiswa Baru ITERA",
    year: "2024",
    description: "Website penerimaan mahasiswa baru ITERA tahun 2024.",
    tags: ["Next.js", "TailwindCSS"],
    gradient: "from-blue-500 via-cyan-500 to-teal-600",
    metric: "—",
    metricLabel: "",
    featured: false,
    image: "/portofolio-10.png",
    liveUrl: "https://pplikitera.com",
  },
  {
    title: "Website Penerimaan Mahasiswa Baru ITERA 2025",
    category: "website",
    client: "Penerimaan Mahasiswa Baru ITERA",
    year: "2025",
    description: "Website penerimaan mahasiswa baru ITERA tahun 2025.",
    tags: ["Next.js", "TailwindCSS"],
    gradient: "from-blue-600 via-indigo-500 to-purple-600",
    metric: "—",
    metricLabel: "",
    featured: false,
    image: "/portofolio-11.png",
    liveUrl: "https://pplkitera.com",
  },
  {
    title: "LHPP Generator",
    category: "website",
    client: "PT Seiiki",
    year: "2024",
    description:
      "Website LHPP generator untuk PT Seiiki yang menghasilkan laporan otomatis.",
    tags: ["Next.js", "Node.js"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    metric: "—",
    metricLabel: "",
    featured: false,
    image: "/portofolio-12.png",
    liveUrl: "https://lhpp.seyiki.com/",
  },
  {
    title: "IoT Control - Monitoring & Kontrol Lampu & AC Kampus",
    category: "website",
    client: "Universitas Lampung",
    year: "2024",
    description:
      "Platform IoT untuk monitoring dan kontrol lampu serta AC di kampus.",
    tags: ["IoT", "Node.js", "MQTT"],
    gradient: "from-sky-500 via-blue-500 to-cyan-600",
    metric: "—",
    metricLabel: "",
    featured: false,
    image: "/portofolio-13.png",
    liveUrl: "https://iot.seyiki.com/",
  },
  {
    title: "SaaS Business Analysis - PT Meita Gudang Distribusi",
    category: "website",
    client: "PT Meita",
    year: "2024",
    description:
      "SaaS untuk business analysis dan manajemen distribusi gudang.",
    tags: ["SaaS", "Next.js", "PostgreSQL"],
    gradient: "from-indigo-500 via-purple-500 to-fuchsia-600",
    metric: "—",
    metricLabel: "",
    featured: false,
    image: "/portofolio-14.png",
    liveUrl: "https://gudangdistribusi.com/home",
  },
  {
    title: "Sistem Pencatatan SPP SMA 13 PGRI",
    category: "website",
    client: "SMA 13 PGRI",
    year: "2024",
    description:
      "Website internal pencatatan SPP untuk SMA 13 PGRI (running di localhost).",
    tags: ["PHP", "MySQL"],
    gradient: "from-yellow-500 via-amber-500 to-orange-500",
    metric: "—",
    metricLabel: "",
    featured: false,
    image: "/portofolio-15.png",
  },
  {
    title: "Web Caffe POS (Multi-role)",
    category: "website",
    client: "Post Kafe",
    year: "2024",
    description:
      "Sistem POS kafe dengan 6 role: owner, manager, gudang, kasir, kafe, pelayan.",
    tags: ["Next.js", "Role-based Auth"],
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    metric: "—",
    metricLabel: "",
    featured: false,
    image: "/portofolio-16.png",
    liveUrl: "https://web-caffe-pos-cabang-pos-kafe.vercel.app/login",
  },
  {
    title: "MBG POS (Multi-role)",
    category: "website",
    client: "MBG",
    year: "2024",
    description:
      "Sistem POS MBG dengan role admin, manajer, staff, gudang, yayasan, dan driver.",
    tags: ["Node.js", "Express", "Role-based Auth"],
    gradient: "from-rose-500 via-pink-500 to-purple-600",
    metric: "—",
    metricLabel: "",
    featured: false,
    image: "/portofolio-17.png",
    liveUrl: "https://mbg-api-server.vercel.app/login",
  },
  {
    title: "Pemira KM ITERA 2025-2026",
    category: "website",
    client: "KM ITERA",
    year: "2025",
    description:
      "Website pemilihan presiden mahasiswa ITERA untuk periode 2025-2026.",
    tags: ["Next.js", "Voting"],
    gradient: "from-green-500 via-emerald-500 to-teal-600",
    metric: "—",
    metricLabel: "",
    featured: false,
    image: "/portofolio-18.png",
    liveUrl: "http://pemira-km-itera.my.id/",
  },
  {
    title: "Connect Printing - Chek Kupon",
    category: "website",
    client: "Connect Printing",
    year: "2024",
    description:
      "Website cek kupon untuk usaha printing di Surabaya (Connect Printing).",
    tags: ["Next.js", "Node.js"],
    gradient: "from-gray-500 via-slate-500 to-zinc-600",
    metric: "—",
    metricLabel: "",
    featured: false,
    image: "/portofolio-19.png",
  },
  {
    title: "Rental Alat Pesta",
    category: "website",
    client: "Rental Alat Pesta",
    year: "2024",
    description:
      "Website rental alat pesta dengan katalog online dan sistem pemesanan.",
    tags: ["Next.js", "Stripe"],
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    metric: "—",
    metricLabel: "",
    featured: false,
    image: "/portofolio-23.png",
    liveUrl: "https://rental-alat-pesta.vercel.app/",
  },
  {
    title: "Weekly Report — Candidate College Jakarta",
    category: "website",
    client: "Candidate College Jakarta",
    year: "2024",
    description:
      "Website internal weekly report untuk usaha Candidate College di Jakarta.",
    tags: ["Internal", "Next.js"],
    gradient: "from-indigo-500 via-blue-500 to-sky-500",
    metric: "—",
    metricLabel: "",
    featured: false,
    image: "/portofolio-24.png",
  },
  {
    title: "Desktop Bot — Auto Login & Auto Claim",
    category: "desktop",
    client: "Internal Tool",
    year: "2024",
    description:
      "Aplikasi desktop untuk otomatisasi login, auto-claim hadiah, dan tugas rutin lainnya (internal automation tool).",
    tags: ["Electron", "Node.js", "Automation"],
    gradient: "from-gray-700 via-gray-600 to-gray-500",
    metric: "—",
    metricLabel: "",
    featured: false,
    image: "/portofolio-20.png",
    liveUrl: "",
  },
  {
    title: "Pengumuman Kelulusan SMA Negeri 1 Padang Gelugur",
    category: "website",
    client: "SMA Negeri 1 Padang Gelugur",
    year: "2024",
    description:
      "Website pengumuman kelulusan untuk SMA Negeri 1 Padang Gelugur.",
    tags: ["Next.js", "TailwindCSS"],
    gradient: "from-blue-500 via-cyan-500 to-teal-600",
    metric: "—",
    metricLabel: "",
    featured: false,
    image: "/portofolio-21.png",
    liveUrl: "https://pengunguman-kelulusan-sma.vercel.app/",
  },
  {
    title: "AgroMonitoring - IoT Suhu & Cahaya",
    category: "website",
    client: "Agro Monitoring",
    year: "2024",
    description:
      "Website IoT untuk monitoring suhu dan cahaya di sekitar tanaman.",
    tags: ["IoT", "Node.js", "React"],
    gradient: "from-green-500 via-emerald-500 to-teal-600",
    metric: "—",
    metricLabel: "",
    featured: false,
    image: "/portofolio-25.png",
    liveUrl: "https://agromonitoring.onrender.com/",
  },
  {
    title: "PT ENERGI SUMBER KEHIDUPAN MANUSIA",
    category: "website",
    client: "Company Profile",
    year: "2025",
    description:
      "Website company profile untuk PT ENERGI SUMBER KEHIDUPAN MANUSIA dengan tampilan profesional dan informasi perusahaan yang lengkap.",
    tags: ["Next.js", "TailwindCSS", "Company Profile"],
    gradient: "from-sky-500 via-cyan-500 to-blue-600",
    metric: "—",
    metricLabel: "",
    featured: false,
    image: "/portofolio-26.png",
    liveUrl: "http://eskm.com/",
  },
  {
    title: "Zaki Fathi Fahrizal",
    category: "website",
    client: "Portfolio Personal",
    year: "2025",
    description:
      "Website portfolio personal untuk Zaki Fathi Fahrizal, mahasiswa Teknik Mesin dari UNSW Sydney.",
    tags: ["Next.js", "Portfolio", "Personal Branding"],
    gradient: "from-violet-500 via-fuchsia-500 to-pink-600",
    metric: "—",
    metricLabel: "",
    featured: false,
    image: "/portofolio-27.png",
    liveUrl: "https://zaki-fathi-fahrizal.vercel.app/",
  },
  {
    title: "Travel Agency Jakarta",
    category: "website",
    client: "Travel Agency",
    year: "2025",
    description:
      "Website agency travel di Jakarta dengan tampilan modern untuk promosi paket wisata dan pemesanan perjalanan.",
    tags: ["Next.js", "Travel", "Booking"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    metric: "—",
    metricLabel: "",
    featured: false,
    image: "/portofolio-28.png",
    liveUrl: "https://travel-seven-sigma.vercel.app/",
  },
  {
    title: "Si Poljar",
    category: "website",
    client: "Monitoring Kualitas Udara Sekolah Real-time",
    year: "2025",
    description:
      "Website monitoring kualitas udara sekolah secara real-time untuk pemantauan lingkungan belajar.",
    tags: ["IoT", "Monitoring", "Real-time"],
    gradient: "from-cyan-500 via-sky-500 to-blue-600",
    metric: "—",
    metricLabel: "",
    featured: false,
    image: "/portofolio-29.png",
    liveUrl: "https://monitoring-kualitas-udara.onrender.com/",
  },
  {
    title: "E-Wallet Nickname Lookup",
    category: "website",
    client: "Nickname Lookup",
    year: "2025",
    description:
      "Website untuk menemukan nickname dari akun e-wallet dengan pencarian cepat dan mudah.",
    tags: ["Lookup", "Utility", "Web App"],
    gradient: "from-fuchsia-500 via-pink-500 to-rose-600",
    metric: "—",
    metricLabel: "",
    featured: false,
    image: "/portofolio-30.png",
    liveUrl: "https://ewalletnicklookupv2-1.onrender.com/",
  },
  {
    title: "Smart Center Indonesia",
    category: "website",
    client: "SaaS Platform Bimbel",
    year: "2025",
    description:
      "Website SaaS platform bimbel untuk Smart Center Indonesia dengan sistem pembelajaran dan manajemen kelas yang terstruktur.",
    tags: ["SaaS", "Bimbel", "Education"],
    gradient: "from-indigo-500 via-blue-500 to-cyan-600",
    metric: "—",
    metricLabel: "",
    featured: false,
    image: "/portofolio-31.png",
    liveUrl: "https://smartcenterindonesia.com/",
  },
  {
    title: "Web Cipta",
    category: "website",
    client: "Agency Website",
    year: "2025",
    description:
      "Website agency untuk Web Cipta dengan tampilan profesional untuk promosi layanan digital agency.",
    tags: ["Agency", "Web Design", "Digital"],
    gradient: "from-orange-500 via-amber-500 to-yellow-600",
    metric: "—",
    metricLabel: "",
    featured: false,
    image: "/portofolio-32.png",
    liveUrl: "https://web-cipta1.vercel.app/",
  },
  {
    title: "Pemira Himatekia ITERA 2025",
    category: "website",
    client: "Himpunan Teknik Kimia ITERA",
    year: "2025",
    description:
      "Website pemilihan ketua himpunan dan senator untuk Himpunan Teknik Kimia ITERA 2025.",
    tags: ["Election", "Student Government", "Voting"],
    gradient: "from-teal-500 via-cyan-500 to-sky-600",
    metric: "—",
    metricLabel: "",
    featured: false,
    image: "/portofolio-33.png",
    liveUrl: "http://pemira-himatekia-itera.my.id/",
  },
  {
    title: "KomikKuy",
    category: "website",
    client: "Reading Platform",
    year: "2025",
    description:
      "Website baca manhua, manga, dan manhwa gratis dengan koleksi lengkap dan pencarian cepat.",
    tags: ["Reading", "Entertainment", "Web App"],
    gradient: "from-red-500 via-orange-500 to-amber-500",
    metric: "—",
    metricLabel: "",
    featured: false,
    image: "/portofolio-34.png",
    liveUrl: "http://komikkuy.my.id/",
  },
  {
    title: "Lavender Bloom Invitations",
    category: "website",
    client: "Wedding Invitation",
    year: "2025",
    description:
      "Website undangan pernikahan elegan dengan desain modern dan pengalaman tamu yang nyaman.",
    tags: ["Wedding", "Invitation", "Design"],
    gradient: "from-pink-500 via-rose-400 to-fuchsia-500",
    metric: "—",
    metricLabel: "",
    featured: false,
    image: "/portofolio-35.png",
    liveUrl: "https://lavender-bloom-invites.vercel.app/",
  },
];

const allProjects = projects;

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 pb-0">
        <div className="w-full max-w-none px-0">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-4 px-6 md:px-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center rounded-xl">
                <FolderKanban className="w-5 h-5" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                Projects
              </h1>
            </div>
            <p className="text-slate-500 text-base max-w-xl">
              Daftar lengkap website dan aplikasi yang sudah saya kerjakan dan
              launch untuk berbagai klien.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-sm font-semibold">
                {projects.length} Projects
              </span>
            </div>
          </motion.div>

          {/* Projects */}
          <section className="w-full mb-0">
            <h2 className="text-lg font-bold text-slate-800 mb-0 px-6 md:px-8 flex items-center gap-2">
              Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-0">
              {allProjects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: (idx % 4) * 0.05 }}
                  className="group bg-white border border-slate-200 border-l-0 border-t-0 rounded-none overflow-hidden hover:border-primary/30 hover:shadow-none transition-all"
                  data-testid={`card-project-${idx}`}
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
                      <div
                        className={`w-full h-full bg-gradient-to-br ${project.gradient}`}
                      />
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
                  </div>

                  <div className="p-5">
                    <div className="mb-2">
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-xs text-primary/70 font-medium mb-2">
                      {project.client}
                    </p>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
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
