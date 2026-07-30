import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const scrambleText = (text: string) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()';
  return text
    .split('')
    .map((char) => {
      if (char === ' ' || char === '.') return char;
      return Math.random() > 0.6 ? chars[Math.floor(Math.random() * chars.length)] : char;
    })
    .join('');
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [scrambled, setScrambled] = useState('');

  useEffect(() => {
    if (isInView) {
      const text = "these are words i live by.";
      const interval = setInterval(() => {
        setScrambled(scrambleText(text));
      }, 200);

      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section id="about" className="min-h-screen flex items-center py-20 border-t border-border/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Glitch heading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4 scrambled">
              {scrambled || "these are words i live by."}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-base md:text-lg leading-relaxed">
              I build things that ship, scale, and don't embarrass you six months
              later. Five years on the frontend — enterprise SaaS platforms,
              investment dashboards, AI-powered products, real-time interfaces.
              Now fullstack — production-grade REST APIs with authentication,
              encryption, WebSockets, and background jobs that run quietly while
              users sleep.
              <br />
              My approach? Own the full product slice. Architect the backend,
              integrate it cleanly on the frontend, test both ends, and ship with
              confidence. I obsess over the details — reusable component libraries
              that cut delivery time by 30%, Redis caching that makes endpoints 53×
              faster, security patterns that protect users even when things go wrong.
              Great engineering isn't just functional. It's maintainable, honest,
              and built to last.
            </p>

            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">Technologies</h3>
                <div className="space-y-2">
                  {['React / Next.js', 'TypeScript / JavaScript', 'Node.js / Express', 'PostgreSQL / Prisma', 'Redis / Bull', 'React Native', 'Tailwind CSS / shadcn/ui', 'Socket.io', 'Docker', 'GSAP / Framer Motion', 'GraphQL', 'Git / GitHub Actions'].map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-3 text-sm group"
                    >
                      <span className="text-accent">▸</span>
                      <span className="group-hover:text-accent transition-colors">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">Expertise</h3>
                <div className="space-y-2">
                  {['Frontend Architecture', 'Backend API Design', 'State Management', 'Authentication & Security', 'Real-time Systems', 'Performance Optimisation', 'Component Architecture', 'Field-level Encryption', 'Testing & QA', 'CI/CD Pipelines', 'Enterprise SaaS', 'Mobile Development'].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-3 text-sm group"
                    >
                      <span className="text-accent">▸</span>
                      <span className="group-hover:text-accent transition-colors">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
