import { useEffect, useState } from 'react';
import './App.css';
import ContactSection from './components/ContactSection';
import GallerySection from './components/GallerySection';
import WelcomeSection from './components/WelcomeSection';

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY)

  useEffect(() => {
      window.addEventListener('scroll',handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      <WelcomeSection offsetY={offsetY} />
      <ContactSection offsetY={offsetY - window.innerHeight} />
      <GallerySection offsetY={offsetY - 2 * window.innerHeight} />
    </div>
  );
}

export default App;
