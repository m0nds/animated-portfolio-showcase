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
              I transform complex ideas into elegant, performant digital experiences. I've built everything from enterprise SaaS platforms to AI-powered applications, e-commerce solutions, and mobile experiences. My approach? Build systems that scale, components that breathe, and interfaces that feel effortless. I obsess over the details—crafting reusable architectures, eliminating unnecessary complexity, and ensuring every interaction feels intentional. Great code isn't just functional; it's maintainable, scalable, and a joy to work with.
            </p>

            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">Technologies</h3>
                <div className="space-y-2">
                  {['React / Next.js', 'TypeScript / JavaScript', 'Vue.js', 'React Native', 'Tailwind CSS', 'Node.js', 'GSAP', 'Git', 'GraphQL', 'Testing Libraries'].map((tech, index) => (
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
                  {['State Management', 'Component Architecture', 'Performance Optimization', 'API Integration', 'Real-time Systems', 'Enterprise SaaS', 'Mobile Development', 'Testing & QA', 'CI/CD Pipelines', 'Code Optimization'].map((skill, index) => (
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
