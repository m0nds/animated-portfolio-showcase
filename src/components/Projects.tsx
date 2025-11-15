import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "3D Product Configurator",
    description: "Interactive 3D product viewer with real-time customization using Three.js and React",
    tech: ["React", "Three.js", "TypeScript"],
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "AI-Powered Dashboard",
    description: "Modern analytics dashboard with real-time data visualization and AI insights",
    tech: ["React", "D3.js", "TailwindCSS"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with smooth animations and seamless UX",
    tech: ["Next.js", "Stripe", "Framer Motion"],
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Portfolio Website",
    description: "Creative portfolio with WebGL effects and scroll-based animations",
    tech: ["React", "GSAP", "WebGL"],
    color: "from-orange-500 to-red-500"
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-12 gradient-text text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl group hover:scale-[1.02] transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className={`w-full h-48 rounded-xl bg-gradient-to-br ${project.color} mb-6 flex items-center justify-center`}>
                  <span className="text-white/80 text-6xl font-bold">
                    {project.title.charAt(0)}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                  <button className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </button>
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
