import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@example.com' }
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
            Let's Work Together
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>

          <div className="glass-card p-8 rounded-2xl mb-12">
            <a 
              href="mailto:hello@example.com"
              className="inline-block text-3xl md:text-4xl font-bold hover:text-primary transition-colors"
            >
              hello@example.com
            </a>
          </div>

          <div className="flex justify-center gap-6 flex-wrap">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-4 rounded-xl hover:scale-110 hover:border-primary transition-all group"
                whileHover={{ y: -5 }}
              >
                <social.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 text-muted-foreground"
          >
            © 2024 Frontend Developer. Built with React & Three.js
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
