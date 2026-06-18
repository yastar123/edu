import { motion } from "framer-motion";
import { Code, Database, Layout, Wrench, Users } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="w-5 h-5 text-primary" />,
      skills: [
        "HTML", "CSS", "JavaScript", "TypeScript",
        "ReactJS", "Next.js", "Tailwind CSS",
        "Bootstrap", "Sass", "InertiaJS", "Webflow",
      ],
    },
    {
      title: "Backend",
      icon: <Code className="w-5 h-5 text-primary" />,
      skills: [
        "Laravel", "Node.js", "Golang",
        "REST API", "Statamic", "WordPress",
      ],
    },
    {
      title: "Database",
      icon: <Database className="w-5 h-5 text-primary" />,
      skills: ["MySQL", "MongoDB", "PostgreSQL"],
    },
    {
      title: "Tools & Workflow",
      icon: <Wrench className="w-5 h-5 text-primary" />,
      skills: ["Git", "GitHub", "Figma", "Excel", "Microsoft Word"],
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-5 h-5 text-primary" />,
      skills: ["Teamwork", "Problem Solving", "Leadership", "Collaboration"],
    },
  ];

  const duplicated = [...skillCategories, ...skillCategories];

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center max-w-3xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-semibold mb-3">
            Capabilities
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-5 text-slate-900">
            Technical Arsenal
          </h2>
          <p className="text-base md:text-lg text-slate-500 leading-relaxed">
            A comprehensive toolkit for building robust, end-to-end solutions.
            I select the right tool for the job, favoring performance and scalability.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden"
        >
          <style>{`
            @keyframes marqueeSkills {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .marquee-skills {
              animation: marqueeSkills 36s linear infinite;
            }
            .marquee-skills:hover {
              animation-play-state: paused;
            }
          `}</style>

          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex w-max marquee-skills">
            {duplicated.map((category, idx) => (
              <div
                key={`${category.title}-${idx}`}
                className="mr-4 shrink-0 rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 shadow-sm hover:shadow-md hover:border-primary/30 transition-all backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-primary/10 rounded-xl">
                    {category.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 max-w-[26rem]">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-medium rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
