import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const scrambleText = (text: string) => {
  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
  return text
    .split('')
    .map((char) => {
      if (char === ' ') return ' ';
      return Math.random() > 0.7 ? chars[Math.floor(Math.random() * chars.length)] : char;
    })
    .join('');
};

const Hero3D = () => {
  const [scrambled, setScrambled] = useState('');

  useEffect(() => {
    const text = "CREATIVE CODE INTERACTIVE DESIGN";
    const interval = setInterval(() => {
      setScrambled(scrambleText(text));
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Main heading with pixel font */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight pixel-text uppercase tracking-tight">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                HELLO. I'M A
              </motion.div>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-accent"
              >
                FRONTEND DEVELOPER,
              </motion.div>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                PASSIONATE ABOUT
              </motion.div>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                INTERACTIVE
              </motion.div>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                EXPERIENCES.
              </motion.div>
            </h1>

            {/* Scrambled text decoration */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="text-xs md:text-sm text-muted-foreground mb-8 tracking-wider scrambled"
            >
              {scrambled}
            </motion.div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-sm md:text-base max-w-2xl mb-12 leading-relaxed lowercase tracking-wide"
            >
              i like to think i'm a pretty interesting developer. so, get ready to learn about my work cos i'm assuming that's why you're here. scroll please ↓
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-foreground/50 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero3D;
