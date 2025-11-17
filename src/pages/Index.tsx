import Navigation from '@/components/Navigation';
import Hero3D from '@/components/Hero3D';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import SpotifyWidget from '@/components/SpotifyWidget';
import CustomCursor from '@/components/CustomCursor';

const Index = () => {
  return (
    <div className="relative">
      <CustomCursor />
      <Navigation />
      <SpotifyWidget />
      <Hero3D />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
