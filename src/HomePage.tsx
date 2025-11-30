import { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import Story from './components/Story';
import Mission from './components/Mission';
import Secret from './components/Secret';
import Nutrition from './components/Nutrition';
import WaitlistPopup from './components/WaitlistPopup';
import ScrollProgress from './components/ScrollProgress';
import CTA from './components/CTA';

export default function HomePage() {
  const [showContent, setShowContent] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  const handlePopupTrigger = () => {
    if (!hasShownPopup) {
      setShowPopup(true);
      setHasShownPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {!showContent && <Preloader onComplete={() => setShowContent(true)} />}
      {showContent && (
        <div className="relative antialiased">
          <Navbar />
          <ScrollProgress />

          <main>
            <Hero />
            <IntroSection />
            <Story onPopupTrigger={handlePopupTrigger} />
            <Secret />
            <Mission />
            <Nutrition />
            <CTA /> {/* Only one CTA now */}
          </main>

          <WaitlistPopup isOpen={showPopup} onClose={handleClosePopup} />

 
        </div>
      )}
    </>
  );
}
