import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "MISSIONSYNC",
    description: "enterprise strategic planning saas platform with 190+ react components, 97+ pages, and real-time data synchronization. architected hybrid state management combining redux and react query.",
    tech: ["React", "TypeScript", "Redux Toolkit", "React Query"],
    year: "2024",
    url: "https://mission-sync.com"
  },
  {
    title: "BEEVA AI",
    description: "ai-powered platform for skin analysis and care assessment. architected and developed frontend applications using react and typescript.",
    tech: ["React", "TypeScript", "AI Integration"],
    year: "2024",
    url: "https://beeva.ai"
  },
  {
    title: "BLUELIGHT STUDIOS",
    description: "solving user problems through software and technologies. developed and delivered multiple production web applications tailored to client specifications.",
    tech: ["React", "GSAP", "Framer Motion"],
    year: "2023",
    url: "https://bluelight.studio"
  },
  {
    title: "FOLAWEJ LAUNDROMAT",
    description: "world-class laundry experience with self-service facilities, coin-operated machines, and mobile app integration. maintained frontend codebase with continuous feature integration.",
    tech: ["React", "Mobile Integration"],
    year: "2023",
    url: "https://folawej.com"
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="min-h-screen py-20 border-t border-border/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-16 uppercase tracking-tight pixel-text">
            SELECTED PROJECTS
          </h2>

          <div className="space-y-12 max-w-5xl">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-border/30 hover:border-foreground/50 transition-all duration-300 group"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs md:text-sm text-muted-foreground tracking-wider">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-sm md:text-base mb-6 leading-relaxed text-muted-foreground lowercase">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs border border-border/50 hover:border-accent hover:text-accent transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.url && (
                    <div className="flex gap-6 text-sm">
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-accent transition-colors group/btn"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="uppercase text-xs tracking-wider">View</span>
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
