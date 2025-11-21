import { Music, Pause, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';

// Import local audio files - Vite handles these paths automatically
// Using direct imports for files without special characters
import prideAudio from '@/assets/music/Pride.mp3';
import gloriaAudio from '@/assets/music/Gloria.mp3';
import lutherAudio from '@/assets/music/Luther.mp3';
import humbleAudio from '@/assets/music/Humble.mp3';

// For files with special characters (**), we use import.meta.url
// This allows Vite to properly resolve the file path
const bitchDontKillMyVibeAudio = new URL('../assets/music/B**tch, don\'t kill my vibe.mp3', import.meta.url).href;

// Define your Kendrick Lamar songs with local file paths
const kendrickSongs = [
  {
    title: "B**tch Don't Kill My Vibe",
    artist: 'Kendrick Lamar',
    audioUrl: bitchDontKillMyVibeAudio,
    previewUrl: bitchDontKillMyVibeAudio,
  },
  {
    title: 'Pride',
    artist: 'Kendrick Lamar',
    audioUrl: prideAudio,
    previewUrl: prideAudio,
  },
  {
    title: 'Gloria',
    artist: 'Kendrick Lamar',
    audioUrl: gloriaAudio,
    previewUrl: gloriaAudio,
  },
  {
    title: 'Luther',
    artist: 'Kendrick Lamar',
    audioUrl: lutherAudio,
    previewUrl: lutherAudio,
  },
  {
    title: 'HUMBLE.',
    artist: 'Kendrick Lamar',
    audioUrl: humbleAudio,
    previewUrl: humbleAudio,
  },
];

// Function to get random songs from your collection
const getRandomSongs = (count: number = 5) => {
  // Shuffle the array and return the requested count
  const shuffled = [...kendrickSongs].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const SpotifyWidget = () => {
  const [selectedSongs, setSelectedSongs] = useState<Array<{
    title: string;
    artist: string;
    audioUrl: string;
    previewUrl: string;
    image?: string;
    spotifyUrl?: string;
  }>>([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const maxDuration = 20; // 20 seconds per track

  // Load songs on mount - no async needed since we're using local files
  useEffect(() => {
    setIsLoading(true);
    const songs = getRandomSongs(5);
    setSelectedSongs(songs);
    setIsLoading(false);
  }, []);

  const currentTrack = selectedSongs[currentTrackIndex];

  // Define playNextTrack before using it in useEffect
  const playNextTrack = useCallback(() => {
    setCurrentTrackIndex((prev) => {
      const nextIndex = (prev + 1) % selectedSongs.length;
      // If we've played all songs, shuffle and get new random selection
      if (nextIndex === 0 && selectedSongs.length > 0) {
        const newSongs = getRandomSongs(5);
        setSelectedSongs(newSongs);
        return 0; // Start from the beginning of the new shuffled list
      }
      return nextIndex;
    });
    setCurrentTime(0);
  }, [selectedSongs.length]);

  // Initialize audio element
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.preload = 'auto';
      audioRef.current.volume = 0.3; // Set volume to 30% for background music
      
      // Update current time
      const handleTimeUpdate = () => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime);
        }
      };
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);

      // Handle errors
      const handleError = () => {
        console.error('Audio error');
        // Skip to next track if current one fails
        playNextTrack();
      };
      audioRef.current.addEventListener('error', handleError);

      // Handle when audio ends
      const handleEnded = () => {
        playNextTrack();
      };
      audioRef.current.addEventListener('ended', handleEnded);

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
          audioRef.current.removeEventListener('error', handleError);
          audioRef.current.removeEventListener('ended', handleEnded);
          audioRef.current.pause();
          audioRef.current = null;
        }
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [playNextTrack]);

  // Load and play current track
  useEffect(() => {
    if (audioRef.current && currentTrack && currentTrack.previewUrl) {
      // Reset audio
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      
      // Load new track (use previewUrl from Spotify or fallback to audioUrl)
      audioRef.current.src = currentTrack.previewUrl || currentTrack.audioUrl;
      audioRef.current.load();
      
      // Play if user has interacted and isPlaying is true
      if (isPlaying && hasUserInteracted) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error('Error playing audio:', error);
            setIsPlaying(false);
          });
        }
      }
    }
  }, [currentTrackIndex, currentTrack, isPlaying, hasUserInteracted]);

  // Handle 20-second limit per track
  useEffect(() => {
    if (isPlaying && audioRef.current) {
      intervalRef.current = setInterval(() => {
        if (audioRef.current && audioRef.current.currentTime >= maxDuration) {
          audioRef.current.pause();
          playNextTrack();
        }
      }, 100); // Check every 100ms for more accuracy
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPlaying, maxDuration, playNextTrack]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    // Mark that user has interacted (required for autoplay)
    if (!hasUserInteracted) {
      setHasUserInteracted(true);
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // If audio hasn't loaded yet, load it first
      if (!audioRef.current.src || audioRef.current.readyState < 2) {
        audioRef.current.load();
      }
      
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error('Error playing audio:', error);
            setIsPlaying(false);
          });
      }
    }
  };

  const progress = currentTime / maxDuration;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed top-20 right-6 z-40 hidden md:block"
    >
      <div className="relative bg-card border border-border/50 rounded-lg p-4 shadow-lg backdrop-blur-sm">
        {/* Now Playing header */}
        <div className="flex items-center gap-2 mb-3">
          <Music className="w-4 h-4 text-accent" />
          <span className="text-xs tracking-wider uppercase">Now Playing</span>
        </div>

        {/* Track info */}
        {isLoading ? (
          <div className="mb-3">
            <p className="text-sm font-bold truncate">Loading...</p>
            <p className="text-xs text-muted-foreground truncate">Fetching tracks</p>
          </div>
        ) : currentTrack ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTrackIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mb-3"
            >
              <p className="text-sm font-bold truncate">{currentTrack.title}</p>
              <p className="text-xs text-muted-foreground truncate">{currentTrack.artist}</p>
            </motion.div>
          </AnimatePresence>
        ) : null}

        {/* Progress bar */}
        <div className="w-full h-1 bg-border/50 rounded-full mb-3 overflow-hidden">
          <motion.div
            className="h-full bg-accent"
            initial={{ width: 0 }}
            animate={{ width: `${progress * 100}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <button
            onClick={togglePlay}
            className="p-2 rounded-full hover:bg-border/50 transition-colors group"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 group-hover:text-accent transition-colors" />
            ) : (
              <Play className="w-4 h-4 group-hover:text-accent transition-colors" />
            )}
          </button>

          {/* Track indicator */}
          <div className="flex gap-1">
            {selectedSongs.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  index === currentTrackIndex
                    ? 'bg-accent'
                    : 'bg-border/50'
                }`}
              />
            ))}
          </div>

          <span className="text-xs text-muted-foreground">
            {Math.floor(currentTime)}s / {maxDuration}s
          </span>
        </div>

        {/* Rotating vinyl effect */}
        <motion.div
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{
            rotate: {
              duration: 3,
              repeat: isPlaying ? Infinity : 0,
              ease: 'linear',
            },
          }}
          className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-accent/20 to-primary/10 border-2 border-border/30 flex items-center justify-center pointer-events-none opacity-50"
        >
          <div className="w-6 h-6 rounded-full bg-background border border-border/40" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SpotifyWidget;
