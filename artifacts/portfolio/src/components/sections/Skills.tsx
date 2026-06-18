import { motion } from "framer-motion";
import { Code, Database, Layout, Wrench, Users } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="w-5 h-5 text-primary" />,
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "ReactJS",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap",
        "Sass",
        "InertiaJS",
        "Webflow/Framer",
      ],
    },
    {
      title: "Backend",
      icon: <Code className="w-5 h-5 text-primary" />,
      skills: [
        "Laravel",
        "Node.js",
        "Golang",
        "REST API",
        "Statamic",
        "WordPress",
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
      skills: ["Git", "GitHub", "Excel", "Microsoft Word"],
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-5 h-5 text-primary" />,
      skills: ["Teamwork", "Problem Solving", "Leadership", "Collaboration"],
    },
  ];

  const duplicatedSkillCategories = [...skillCategories, ...skillCategories];

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Technical Arsenal
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive toolkit that enables me to build robust, end-to-end
            solutions. I select the right tool for the job, favoring performance
            and scalability.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <style>{`
            @keyframes marquee {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-50%);
              }
            }
          `}</style>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="flex w-max animate-[marquee_36s_linear_infinite]"
            style={{ animation: "marquee 36s linear infinite" }}
          >
            {duplicatedSkillCategories.map((category, idx) => (
              <div
                key={`${category.title}-${idx}`}
                className="mr-4 shrink-0 rounded-2xl border border-border/50 bg-background/60 px-5 py-4 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-primary/10 rounded-xl">
                    {category.icon}
                  </div>
                  <h3 className="text-base font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 max-w-[26rem]">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-secondary/80 text-secondary-foreground text-sm font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
