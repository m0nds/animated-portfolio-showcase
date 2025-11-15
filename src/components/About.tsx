import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">About Me</h2>
          
          <div className="glass-card p-8 rounded-2xl space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm a passionate frontend developer specializing in creating immersive, 
              performant web experiences. With expertise in React, Three.js, and modern 
              web technologies, I bring ideas to life through code and creativity.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              My approach combines technical excellence with aesthetic sensibility, 
              ensuring that every project is not only functional but also beautiful 
              and engaging.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {['React', 'Three.js', 'TypeScript', 'Tailwind CSS'].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-4 rounded-xl text-center hover:border-primary transition-colors"
                >
                  <span className="font-semibold text-primary">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
