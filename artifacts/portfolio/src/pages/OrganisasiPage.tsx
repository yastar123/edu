import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Users, Calendar, MapPin } from "lucide-react";

const organisations = [
  {
    role: "Staff Kementrian Teknologi Informasi",
    org: "Keluarga Mahasiswa ITERA (KM ITERA)",
    period: "Maret 2025 – Januari 2026",
    location: "Institut Teknologi Sumatera",
    description: [
      "Mengembangkan dan melakukan redesain website KM ITERA menggunakan Laravel, ReactJS, dan InertiaJS.",
      "Mengimplementasikan integrasi frontend-backend secara efisien dengan InertiaJS.",
    ],
  },
  {
    role: "Staff Divisi Desain – Departemen Media dan Informasi",
    org: "Himpunan Mahasiswa Teknik Fisika Aryacitya",
    period: "Desember 2024 – Januari 2026",
    location: "Institut Teknologi Sumatera",
    description: [
      "Bertanggung jawab dalam pembuatan dan pengeditan konten visual untuk media sosial organisasi.",
      "Mengedit video menggunakan CapCut dan Adobe Premiere Pro untuk kebutuhan promosi, dokumentasi, dan event organisasi.",
    ],
  },
  {
    role: "Staff Kementrian Teknologi Informasi",
    org: "Kabinet KM ITERA",
    period: "Oktober – Desember 2024",
    location: "Institut Teknologi Sumatera",
    description: [
      "Mengembangkan website organisasi mahasiswa dengan teknologi Laravel, ReactJS, dan Statamic.",
      "Menerjemahkan desain dari Figma menjadi website yang fungsional dan responsif.",
    ],
  },
];

const volunteers = [
  {
    role: "Ketua Divisi Website & WordPress Developer",
    org: "BidanPreneur",
    period: "Agustus – Desember 2024",
    location: "Remote (WFH)",
    type: "Sukarelawan",
    description: [
      "Membuat tugas untuk anggota tim, serta memberikan bantuan dan solusi ketika mereka menghadapi kesulitan.",
      "Mengembangkan dan memelihara website WordPress, termasuk kustomisasi tema dan plugin.",
    ],
  },
  {
    role: "Frontend Developer",
    org: "Independent Project",
    period: "Maret – Juni 2024",
    location: "Remote (WFH)",
    type: "Sukarelawan",
    description: [
      "Mengembangkan antarmuka pengguna yang responsif dan menarik menggunakan ReactJS dan Tailwind CSS.",
      "Memastikan kompatibilitas lintas perangkat dan browser untuk pengalaman pengguna yang mulus.",
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
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Organisasi</h1>
            </div>
            <p className="text-slate-500 text-base max-w-xl">
              Keterlibatan aktif dalam organisasi kemahasiswaan dan kegiatan sukarela.
            </p>
          </motion.div>

          {/* Organisasi */}
          <section className="mb-14">
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full inline-block" />
              Organisasi Kemahasiswaan
            </h2>
            <div className="space-y-5">
              {organisations.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{item.role}</h3>
                      <p className="text-primary font-semibold text-sm mt-0.5">{item.org}</p>
                    </div>
                    <span className="bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full w-fit shrink-0">
                      Organisasi
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 shrink-0" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 shrink-0" />
                      {item.location}
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

          {/* Sukarelawan */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-accent rounded-full inline-block" />
              Sukarelawan
            </h2>
            <div className="space-y-5">
              {volunteers.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
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
                      <Calendar className="w-4 h-4 shrink-0" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 shrink-0" />
                      {item.location}
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
    </div>
  );
}
