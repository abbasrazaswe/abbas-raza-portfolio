import { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import ProjectPage from './pages/ProjectPage';
// import CursorFollower from './components/CursorFollower';

function App() {
  const isProjectPage = window.location.pathname.startsWith('/projects/');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), isProjectPage ? 0 : 2000);
    return () => clearTimeout(timer);
  }, [isProjectPage]);

  if (loading) return <Preloader />;

  if (isProjectPage) return <ThemeProvider><ProjectPage /></ThemeProvider>;

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        {/* <CursorFollower /> */}
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Skills />
          <Projects />
          <Experience />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
