import { Music } from 'lucide-react';
import { motion } from 'framer-motion';

const SpotifyWidget = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed top-20 right-6 z-40 hidden md:block"
    >
      <div className="relative">
        {/* Rotating vinyl effect */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-primary/20 rotate-text flex items-center justify-center border-2 border-foreground/20">
          <div className="w-8 h-8 rounded-full bg-background border-2 border-foreground/40" />
        </div>
        
        {/* Now Playing text */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full whitespace-nowrap">
          <div className="flex items-center gap-2 text-xs tracking-wider">
            <Music className="w-3 h-3" />
            <span className="animate-pulse">NOW PLAYING</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SpotifyWidget;
