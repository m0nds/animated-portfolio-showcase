import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin, Twitter, FileText } from 'lucide-react';
import resume from '../assets/RAYMOND_RESUME_2026.pdf'

const socialLinks = [
  { icon: Github, label: 'GITHUB', href: 'https://github.com/m0nds' },
  { icon: Linkedin, label: 'LINKEDIN', href: 'https://www.linkedin.com/in/raymond-elegbede-40a446195/' },
  { icon: Twitter, label: 'TWITTER', href: 'https://twitter.com/m0nds_' },
  { icon: Mail, label: 'EMAIL', href: 'mailto:elegbede.raymond@gmail.com' }
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleResumeDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(resume);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Raymond_Elegbede_Software_Engineer.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      // Fallback: open in new tab if download fails
      window.open(resume, '_blank');
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 border-t border-border/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 uppercase tracking-tight pixel-text">
            LET'S CONNECT
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <p className="text-base md:text-lg mb-8 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want to say hi, feel free to reach out. i'm always open to discussing new opportunities and interesting ideas.
            </p>

            <a
              href="mailto:elegbede.raymond@gmail.com"
              className="inline-block text-2xl md:text-4xl font-bold hover:text-accent transition-colors lowercase border-b-2 border-foreground hover:border-accent"
            >
              elegbede.raymond@gmail.com
            </a>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="border border-border/30 hover:border-accent p-6 flex flex-col items-center gap-4 group transition-all duration-300 hover:bg-accent/5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="w-6 h-6 group-hover:text-accent transition-colors" />
                <span className="text-xs tracking-wider group-hover:text-accent transition-colors">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </div>

          <motion.div
            id="resume"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="border border-border/30 p-8 hover:border-accent transition-all duration-300 group"
          >
            <div className="flex items-center justify-between">
              <a
                href={resume}
                onClick={handleResumeDownload}
                className="cursor-pointer"
              >
                <h3 className="text-xl font-bold mb-2 uppercase tracking-tight group-hover:text-accent transition-colors">
                  DOWNLOAD RESUME
                </h3>
                <p className="text-sm text-muted-foreground lowercase">
                  view my full work history and credentials
                </p>
              </a>
              <FileText className="w-8 h-8 text-muted-foreground group-hover:text-accent transition-colors" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 text-xs text-muted-foreground text-center tracking-wider"
          >
            © {new Date().getFullYear()} All rights... shh, all love from Raymond
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
