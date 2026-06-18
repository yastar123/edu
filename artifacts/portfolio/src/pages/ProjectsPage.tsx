import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ExternalLink, FolderKanban, Search } from "lucide-react";

const projects = [
  {
    title: "PlayStation Rental",
    category: "website",
    client: "Gaming Rental Service",
    year: "2024",
    description:
      "PlayStation rental website with online booking, real-time stock tracking, and a seamless digital payment system.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "TailwindCSS"],
    gradient: "from-blue-500 via-indigo-500 to-purple-600",
    metric: "200+",
    metricLabel: "Rentals/Month",
    featured: true,
    image: "/portofolio-1.png",
    liveUrl: "https://rental-ps-gray.vercel.app/",
  },
  {
    title: "Ayam Geprek Restaurant",
    category: "website",
    client: "F&B Business",
    year: "2024",
    description:
      "Restaurant website with an online menu, delivery ordering system, and efficient order management.",
    tags: ["React", "Node.js", "MongoDB", "Google Maps"],
    gradient: "from-orange-500 via-red-500 to-yellow-500",
    metric: "150+",
    metricLabel: "Orders/Day",
    featured: true,
    image: "/portofolio-2.png",
    liveUrl: "https://ayam-geprek-theta.vercel.app/",
  },
  {
    title: "Barbershop",
    category: "website",
    client: "Grooming Service",
    year: "2024",
    description:
      "Barbershop website with online booking, haircut gallery, and a reminder system for loyal customers.",
    tags: ["Next.js", "Firebase", "TailwindCSS", "Calendar API"],
    gradient: "from-gray-500 via-slate-500 to-zinc-600",
    metric: "80+",
    metricLabel: "Customers/Week",
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
      "Official website for PT Seiiki featuring an academic information system, student portal, and school activity management.",
    tags: ["Next.js", "PostgreSQL", "TailwindCSS", "Prisma"],
    gradient: "from-blue-500 via-cyan-500 to-teal-600",
    metric: "1000+",
    metricLabel: "Active Students",
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
      "Official website for The 5th Engineering Physics International Conference with registration, session schedule, and speaker info.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "PostgreSQL"],
    gradient: "from-purple-500 via-violet-500 to-indigo-600",
    metric: "500+",
    metricLabel: "Participants",
    featured: true,
    image: "/portofolio-5.png",
    liveUrl: "https://epic.itera.ac.id/",
  },
  {
    title: "Seiiki Survey",
    category: "website",
    client: "Educational Institution",
    year: "2024",
    description:
      "Survey system for PT Seiiki with dynamic forms, real-time data analysis, and automated reports.",
    tags: ["Next.js", "Node.js", "MongoDB", "Chart.js"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    metric: "2000+",
    metricLabel: "Respondents",
    featured: true,
    image: "/portofolio-6.png",
    liveUrl: "https://survei.seyiki.com/",
  },
  {
    title: "Seiiki Docs",
    category: "website",
    client: "Educational Institution",
    year: "2024",
    description:
      "Document storage website for PT Seiiki with upload system, access control, and efficient file organization.",
    tags: ["Next.js", "AWS S3", "PostgreSQL", "TailwindCSS"],
    gradient: "from-amber-500 via-orange-500 to-red-500",
    metric: "5000+",
    metricLabel: "Documents",
    featured: true,
    image: "/portofolio-7.png",
    liveUrl: "https://docs.seyiki.com/",
  },
  {
    title: "KM ITERA",
    category: "website",
    client: "Student Organization",
    year: "2024",
    description:
      "ITERA student family website with an activity information portal, discussion forum, and member management.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "TailwindCSS"],
    gradient: "from-blue-600 via-indigo-500 to-purple-600",
    metric: "2000+",
    metricLabel: "Active Members",
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
      "Education platform for college preparation with a learning management system, online mock tests, and result analytics.",
    tags: ["Next.js", "Node.js", "MongoDB", "Chart.js"],
    gradient: "from-green-500 via-emerald-500 to-teal-600",
    metric: "10K+",
    metricLabel: "Students",
    featured: true,
    image: "/portofolio-9.png",
    liveUrl: "https://candidate-college.vercel.app/",
  },
  {
    title: "ITERA New Student Admission 2024",
    category: "website",
    client: "ITERA Admissions",
    year: "2024",
    description: "Official new student admission website for ITERA 2024.",
    tags: ["Next.js", "TailwindCSS"],
    gradient: "from-blue-500 via-cyan-500 to-teal-600",
    featured: false,
    image: "/portofolio-10.png",
    liveUrl: "https://pplikitera.com",
  },
  {
    title: "ITERA New Student Admission 2025",
    category: "website",
    client: "ITERA Admissions",
    year: "2025",
    description: "Official new student admission website for ITERA 2025.",
    tags: ["Next.js", "TailwindCSS"],
    gradient: "from-blue-600 via-indigo-500 to-purple-600",
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
      "LHPP generator website for PT Seiiki that automatically generates reports.",
    tags: ["Next.js", "Node.js"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    featured: false,
    image: "/portofolio-12.png",
    liveUrl: "https://lhpp.seyiki.com/",
  },
  {
    title: "IoT Campus Control",
    category: "iot",
    client: "Universitas Lampung",
    year: "2024",
    description:
      "IoT platform for monitoring and controlling campus lights and air conditioners.",
    tags: ["IoT", "Node.js", "MQTT"],
    gradient: "from-sky-500 via-blue-500 to-cyan-600",
    featured: false,
    image: "/portofolio-13.png",
    liveUrl: "https://iot.seyiki.com/",
  },
  {
    title: "SaaS Business Analysis",
    category: "saas",
    client: "PT Meita Gudang Distribusi",
    year: "2024",
    description:
      "SaaS platform for business analytics and warehouse distribution management.",
    tags: ["SaaS", "Next.js", "PostgreSQL"],
    gradient: "from-indigo-500 via-purple-500 to-fuchsia-600",
    featured: false,
    image: "/portofolio-14.png",
    liveUrl: "https://gudangdistribusi.com/home",
  },
  {
    title: "School Tuition Recording System",
    category: "website",
    client: "SMA 13 PGRI",
    year: "2024",
    description:
      "Internal tuition fee recording website for SMA 13 PGRI.",
    tags: ["PHP", "MySQL"],
    gradient: "from-yellow-500 via-amber-500 to-orange-500",
    featured: false,
    image: "/portofolio-15.png",
  },
  {
    title: "Café POS System (Multi-role)",
    category: "saas",
    client: "Post Café",
    year: "2024",
    description:
      "Café POS system with 6 roles: owner, manager, warehouse, cashier, café, and waiter.",
    tags: ["Next.js", "Role-based Auth"],
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    featured: false,
    image: "/portofolio-16.png",
    liveUrl: "https://web-caffe-pos-cabang-pos-kafe.vercel.app/login",
  },
  {
    title: "MBG POS System (Multi-role)",
    category: "saas",
    client: "MBG",
    year: "2024",
    description:
      "MBG POS system with roles: admin, manager, staff, warehouse, foundation, and driver.",
    tags: ["Node.js", "Express", "Role-based Auth"],
    gradient: "from-rose-500 via-pink-500 to-purple-600",
    featured: false,
    image: "/portofolio-17.png",
    liveUrl: "https://mbg-api-server.vercel.app/login",
  },
  {
    title: "PEMIRA KM ITERA 2025",
    category: "website",
    client: "KM ITERA",
    year: "2025",
    description:
      "Student presidential election website for ITERA, period 2025–2026.",
    tags: ["Next.js", "Voting"],
    gradient: "from-green-500 via-emerald-500 to-teal-600",
    featured: false,
    image: "/portofolio-18.png",
    liveUrl: "http://pemira-km-itera.my.id/",
  },
  {
    title: "Connect Printing — Coupon Checker",
    category: "website",
    client: "Connect Printing",
    year: "2024",
    description:
      "Coupon checker website for a printing business in Surabaya.",
    tags: ["Next.js", "Node.js"],
    gradient: "from-gray-500 via-slate-500 to-zinc-600",
    featured: false,
    image: "/portofolio-19.png",
  },
  {
    title: "Desktop Bot — Auto Login & Claim",
    category: "desktop",
    client: "Internal Tool",
    year: "2024",
    description:
      "Desktop automation app for auto login, reward claiming, and other routine tasks.",
    tags: ["Electron", "Node.js", "Automation"],
    gradient: "from-gray-700 via-gray-600 to-gray-500",
    featured: false,
    image: "/portofolio-20.png",
  },
  {
    title: "Graduation Announcement — SMAN 1",
    category: "website",
    client: "SMA Negeri 1 Padang Gelugur",
    year: "2024",
    description:
      "Graduation announcement website for SMA Negeri 1 Padang Gelugur.",
    tags: ["Next.js", "TailwindCSS"],
    gradient: "from-blue-500 via-cyan-500 to-teal-600",
    featured: false,
    image: "/portofolio-21.png",
    liveUrl: "https://pengunguman-kelulusan-sma.vercel.app/",
  },
  {
    title: "Party Equipment Rental",
    category: "website",
    client: "Party Rental Business",
    year: "2024",
    description:
      "Party equipment rental website with an online catalog and booking system.",
    tags: ["Next.js", "Stripe"],
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    featured: false,
    image: "/portofolio-23.png",
    liveUrl: "https://rental-alat-pesta.vercel.app/",
  },
  {
    title: "Weekly Report — Candidate College",
    category: "website",
    client: "Candidate College Jakarta",
    year: "2024",
    description:
      "Internal weekly report website for Candidate College Jakarta.",
    tags: ["Internal", "Next.js"],
    gradient: "from-indigo-500 via-blue-500 to-sky-500",
    featured: false,
    image: "/portofolio-24.png",
  },
  {
    title: "AgroMonitoring IoT",
    category: "iot",
    client: "Agro Monitoring",
    year: "2024",
    description:
      "IoT website for monitoring temperature and light levels around plants.",
    tags: ["IoT", "Node.js", "React"],
    gradient: "from-green-500 via-emerald-500 to-teal-600",
    featured: false,
    image: "/portofolio-25.png",
    liveUrl: "https://agromonitoring.onrender.com/",
  },
  {
    title: "PT Energi Sumber Kehidupan",
    category: "website",
    client: "Company Profile",
    year: "2025",
    description:
      "Company profile website with a professional design and complete company information.",
    tags: ["Next.js", "TailwindCSS", "Company Profile"],
    gradient: "from-sky-500 via-cyan-500 to-blue-600",
    featured: false,
    image: "/portofolio-26.png",
    liveUrl: "http://eskm.com/",
  },
  {
    title: "Zaki Fathi Fahrizal",
    category: "website",
    client: "Personal Portfolio",
    year: "2025",
    description:
      "Personal portfolio website for a Mechanical Engineering student at UNSW Sydney.",
    tags: ["Next.js", "Portfolio", "Personal Branding"],
    gradient: "from-violet-500 via-fuchsia-500 to-pink-600",
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
      "Modern travel agency website in Jakarta for promoting tour packages and booking trips.",
    tags: ["Next.js", "Travel", "Booking"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    featured: false,
    image: "/portofolio-28.png",
    liveUrl: "https://travel-seven-sigma.vercel.app/",
  },
  {
    title: "Si Poljar — Air Quality Monitor",
    category: "iot",
    client: "School Air Quality Monitoring",
    year: "2025",
    description:
      "Real-time school air quality monitoring website for tracking the learning environment.",
    tags: ["IoT", "Monitoring", "Real-time"],
    gradient: "from-cyan-500 via-sky-500 to-blue-600",
    featured: false,
    image: "/portofolio-29.png",
    liveUrl: "https://monitoring-kualitas-udara.onrender.com/",
  },
  {
    title: "E-Wallet Nickname Lookup",
    category: "website",
    client: "Lookup Utility",
    year: "2025",
    description:
      "Website to find nicknames from e-wallet accounts with fast and easy search.",
    tags: ["Lookup", "Utility", "Web App"],
    gradient: "from-fuchsia-500 via-pink-500 to-rose-600",
    featured: false,
    image: "/portofolio-30.png",
    liveUrl: "https://ewalletnicklookupv2-1.onrender.com/",
  },
  {
    title: "Smart Center Indonesia",
    category: "saas",
    client: "Tutoring SaaS Platform",
    year: "2025",
    description:
      "SaaS platform for Smart Center Indonesia with a structured learning management and class management system.",
    tags: ["SaaS", "Education", "LMS"],
    gradient: "from-indigo-500 via-blue-500 to-cyan-600",
    featured: false,
    image: "/portofolio-31.png",
    liveUrl: "https://smartcenterindonesia.com/",
  },
  {
    title: "Web Cipta",
    category: "website",
    client: "Digital Agency",
    year: "2025",
    description:
      "Agency website for Web Cipta with a professional look to promote digital services.",
    tags: ["Agency", "Web Design", "Digital"],
    gradient: "from-orange-500 via-amber-500 to-yellow-600",
    featured: false,
    image: "/portofolio-32.png",
    liveUrl: "https://web-cipta1.vercel.app/",
  },
  {
    title: "PEMIRA Himatekia 2025",
    category: "website",
    client: "Chemical Engineering Student Association — ITERA",
    year: "2025",
    description:
      "Election website for the Himatekia ITERA 2025 chairman and senator.",
    tags: ["Election", "Student Government", "Voting"],
    gradient: "from-teal-500 via-cyan-500 to-sky-600",
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
      "Free manhua, manga, and manhwa reading website with a complete collection and fast search.",
    tags: ["Reading", "Entertainment", "Web App"],
    gradient: "from-red-500 via-orange-500 to-amber-500",
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
      "Elegant wedding invitation website with a modern design and comfortable guest experience.",
    tags: ["Wedding", "Invitation", "Design"],
    gradient: "from-pink-500 via-rose-400 to-fuchsia-500",
    featured: false,
    image: "/portofolio-35.png",
    liveUrl: "https://lavender-bloom-invites.vercel.app/",
  },
];

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Website", value: "website" },
  { label: "SaaS", value: "saas" },
  { label: "IoT", value: "iot" },
  { label: "Desktop", value: "desktop" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesFilter =
        activeFilter === "all" || p.category === activeFilter;
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.client.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center rounded-xl">
                <FolderKanban className="w-5 h-5" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                Projects
              </h1>
            </div>
            <p className="text-slate-500 text-base max-w-xl mb-6">
              A complete list of websites and applications I've built and launched for various clients.
            </p>

            {/* Filters + Search */}
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <div className="flex flex-wrap gap-2">
                {FILTERS.map((f) => (
                  <button
                    key={f.value}
                    onClick={() => setActiveFilter(f.value)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                      activeFilter === f.value
                        ? "bg-primary text-white shadow-sm shadow-primary/20"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              <div className="relative sm:ml-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-full bg-white focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 w-full sm:w-56 transition-all"
                />
              </div>
            </div>

            {/* Count badge */}
            <div className="mt-4 inline-flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-sm font-semibold">
                {filtered.length} Projects
              </span>
            </div>
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
              >
                {filtered.map((project, idx) => (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25, delay: (idx % 4) * 0.04 }}
                    className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col"
                  >
                    {/* Screenshot */}
                    <div className="relative overflow-hidden h-44 bg-slate-100 shrink-0">
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
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-slate-700 hover:text-primary text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm transition-colors opacity-0 group-hover:opacity-100"
                        >
                          <ExternalLink className="w-3 h-3" /> Visit
                        </a>
                      )}
                      {project.featured && (
                        <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug mb-1">
                        {project.title}
                      </h3>
                      <p className="text-xs text-primary/70 font-medium mb-2">
                        {project.client}
                      </p>
                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-3 flex-grow">
                        {project.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-24 text-slate-400"
              >
                <FolderKanban className="w-12 h-12 mx-auto mb-4 opacity-30" />
                <p className="text-lg font-medium">No projects found</p>
                <p className="text-sm mt-1">Try a different filter or search term</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
