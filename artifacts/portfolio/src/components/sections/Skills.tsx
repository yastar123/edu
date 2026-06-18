import { motion } from "framer-motion";
import { Code, Database, Layout, Wrench, Users } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="w-6 h-6 text-primary" />,
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "ReactJS", "Next.js", "Tailwind CSS", "Bootstrap", "Sass", "InertiaJS", "Webflow/Framer"]
    },
    {
      title: "Backend",
      icon: <Code className="w-6 h-6 text-primary" />,
      skills: ["Laravel", "Node.js", "Golang", "REST API", "Statamic", "WordPress"]
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6 text-primary" />,
      skills: ["MySQL", "MongoDB", "PostgreSQL"]
    },
    {
      title: "Tools & Workflow",
      icon: <Wrench className="w-6 h-6 text-primary" />,
      skills: ["Git", "GitHub", "Excel", "Microsoft Word"]
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6 text-primary" />,
      skills: ["Teamwork", "Problem Solving", "Leadership", "Collaboration"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Technical Arsenal</h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive toolkit that enables me to build robust, end-to-end solutions. I select the right tool for the job, favoring performance and scalability.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              variants={item}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
