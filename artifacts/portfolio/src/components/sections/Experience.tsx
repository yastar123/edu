import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Freelance – Web Developer",
      company: "Contract",
      date: "January 2026 – Present",
      location: "Remote",
      description: [
        "Skilled in designing and developing responsive websites using modern frameworks",
        "Focused on performance, security, and optimal user experience (UX)"
      ]
    },
    {
      title: "Full Stack Web Developer",
      company: "PT MEITA GUDANG DISTRIBUSI",
      date: "January – May 2026",
      location: "Remote",
      description: [
        "Built a SaaS website using robust modern frameworks",
        "Conduct audits of all features and menus on the website ensuring reliability"
      ]
    },
    {
      title: "Lab Assistant, Computer Introduction 2",
      company: "Institut Teknologi Sumatera",
      date: "March – June 2025",
      location: "Bandar Lampung",
      description: [
        "Assisted in teaching C++ programming fundamentals and Flowgorithm",
        "Compiled practice questions and quizzes to reinforce lab material"
      ]
    },
    {
      title: "Co-Head, Frontend Developer Division",
      company: "Candidate College",
      date: "October 2024 – March 2025",
      location: "Remote",
      description: [
        "Led the Frontend Developer division as Co-Head, responsible for code review, optimization, and debugging",
        "Achieved up to 90% unit test coverage, ensuring code quality, performance, and functionality"
      ]
    },
    {
      title: "Lab Assistant, Computer Introduction 1",
      company: "Institut Teknologi Sumatera",
      date: "August – December 2024",
      location: "Bandar Lampung",
      description: [
        "Assisted lecturers in teaching the Introduction to Computers and Software course",
        "Taught practical skills in Excel and Microsoft Word"
      ]
    },
    {
      title: "Full Stack Developer (Intern)",
      company: "PT. Winnicode Garuda Indonesia",
      date: "August – September 2024",
      location: "Remote",
      description: [
        "Specialist in designing and building news portal websites using modern stacks",
        "Responsible for both front-end and back-end development"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-12 bg-primary/20 text-primary flex items-center justify-center rounded-xl">
            <Briefcase className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">Experience</h2>
        </div>

        <div className="relative border-l-2 border-border ml-6 md:ml-8 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary" />
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">{exp.title}</h3>
                <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                  {exp.date}
                </span>
              </div>
              
              <div className="flex items-center gap-3 text-muted-foreground mb-4 font-medium">
                <span>{exp.company}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-border" />
                <span>{exp.location}</span>
              </div>

              <ul className="space-y-2 text-muted-foreground">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary mt-1.5 opacity-50">▹</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
