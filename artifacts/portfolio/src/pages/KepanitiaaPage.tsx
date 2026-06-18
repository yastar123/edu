import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ClipboardList, Calendar, MapPin } from "lucide-react";

const committees = [
  {
    role: "Kepala Divisi Imtek (Implementasi Teknologi)",
    event: "PEMIRA KM ITERA 2025",
    org: "Keluarga Mahasiswa ITERA",
    period: "2025",
    location: "Institut Teknologi Sumatera",
    description: [
      "Bertanggung jawab untuk membuat website e-voting pemilihan presiden mahasiswa.",
      "Berkoordinasi dan bertanggung jawab dengan 2 sub divisi voting dan pusat data untuk memastikan kelancaran proses voting selama acara berlangsung.",
    ],
    highlight: true,
  },
  {
    role: "KaSub Frontend Developer",
    event: "Program Pengenalan Lingkungan Kampus (PPLK) ITERA 2025",
    org: "Institut Teknologi Sumatera",
    period: "Juni – Agustus 2025",
    location: "Bandar Lampung",
    description: [
      "Memimpin dan mengoordinasi tim Frontend Developer dalam pengembangan website kegiatan PPLK 2025.",
      "Melakukan troubleshooting serta perbaikan bug/error yang dialami oleh anggota tim secara cepat dan efektif.",
    ],
    highlight: true,
  },
  {
    role: "Staff Divisi Frontend Developer",
    event: "Program Pengenalan Lingkungan Kampus (PPLK) ITERA 2024",
    org: "Institut Teknologi Sumatera",
    period: "Juni – Agustus 2024",
    location: "Bandar Lampung",
    description: [
      "Bertanggung jawab menerjemahkan desain Figma dari divisi Virtual and Visual Development (VVD) menjadi halaman web fungsional.",
      "Mengembangkan komponen interaktif untuk meningkatkan interaktivitas halaman web.",
    ],
    highlight: false,
  },
  {
    role: "Staff Divisi Voting",
    event: "PEMIRA KM ITERA 2024",
    org: "Keluarga Mahasiswa ITERA",
    period: "2024",
    location: "Institut Teknologi Sumatera",
    description: [
      "Bertanggung jawab untuk melakukan absensi kepada mahasiswa yang akan berpartisipasi dalam pemilihan Presiden Mahasiswa.",
      "Menggunakan website yang dikembangkan oleh divisi IMTEK untuk mencatat kehadiran dan memastikan data peserta tersimpan dengan akurat.",
    ],
    highlight: false,
  },
  {
    role: "Staff Divisi Kreatif",
    event: "First Gathering Teknik Fisika 2024",
    org: "Himpunan Mahasiswa Teknik Fisika Aryacitya",
    period: "2024",
    location: "Institut Teknologi Sumatera",
    description: [
      "Bertanggung jawab dalam pembuatan desain logo acara First Gathering Teknik Fisika dalam format tiga dimensi (3D).",
      "Menggunakan perangkat lunak desain grafis untuk menghasilkan visualisasi logo yang kreatif dan menarik.",
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
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Kepanitiaan</h1>
            </div>
            <p className="text-slate-500 text-base max-w-xl">
              Kontribusi nyata dalam berbagai kepanitiaan — dari pengembangan website hingga operasional teknis acara.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-8">
            {committees.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Dot */}
                <div
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 shadow-sm ${
                    item.highlight
                      ? "bg-primary border-primary"
                      : "bg-white border-slate-400"
                  }`}
                />

                <div
                  className={`bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow ${
                    item.highlight ? "border-primary/30" : "border-slate-200"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{item.role}</h3>
                      <p className={`font-semibold text-sm mt-0.5 ${item.highlight ? "text-primary" : "text-slate-600"}`}>
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
                        <span className={`mt-1 shrink-0 ${item.highlight ? "text-primary" : "text-slate-400"}`}>▹</span>
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
