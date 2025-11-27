import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import Story from './components/Story';
import Mission from './components/Mission';
import Secret from './components/Secret';
import Nutrition from './components/Nutrition';
import CTA from './components/CTA';
// import WaitlistPopup from './components/WaitlistPopup';
import ScrollProgress from './components/ScrollProgress';

export default function HomePage() {
  const [showContent, setShowContent] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  // ⭐ NEW: Add modal state
  const [nutritionOpen, setNutritionOpen] = useState(false);

  // SEO and metadata…

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
        
      

            {/* ⭐ Proper modal usage */}
            <Nutrition
              // isOpen={nutritionOpen}
              // onClose={() => setNutritionOpen(false)}
            />

            <CTA />
          </main>

          {/* <WaitlistPopup isOpen={showPopup} onClose={handleClosePopup} /> */}
        </div>
      )}
    </>
  );
}



