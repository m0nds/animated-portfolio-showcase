import Navigation from '@/components/Navigation';
import Hero3D from '@/components/Hero3D';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="relative">
      <Navigation />
      <Hero3D />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
