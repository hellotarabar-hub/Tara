// import { useState } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import { Cookie, Settings, X, Check, Shield, TrendingUp, Users } from 'lucide-react';

// interface CookiePreferences {
//   necessary: boolean;
//   analytics: boolean;
//   marketing: boolean;
//   preferences: boolean;
// }

// export function CookieConsent() {
//   const [isVisible, setIsVisible] = useState(true);
//   const [showSettings, setShowSettings] = useState(false);
//   const [preferences, setPreferences] = useState<CookiePreferences>({
//     necessary: true,
//     analytics: false,
//     marketing: false,
//     preferences: false,
//   });

//   const handleAcceptAll = () => {
//     setPreferences({
//       necessary: true,
//       analytics: true,
//       marketing: true,
//       preferences: true,
//     });
//     setIsVisible(false);
//     console.log('All cookies accepted');
//   };

//   const handleRejectAll = () => {
//     setPreferences({
//       necessary: true,
//       analytics: false,
//       marketing: false,
//       preferences: false,
//     });
//     setIsVisible(false);
//     console.log('Only necessary cookies accepted');
//   };

//   const handleSavePreferences = () => {
//     setIsVisible(false);
//     console.log('Saved preferences:', preferences);
//   };

//   const togglePreference = (key: keyof CookiePreferences) => {
//     if (key === 'necessary') return;
//     setPreferences(prev => ({
//       ...prev,
//       [key]: !prev[key],
//     }));
//   };

//   // Inline styles to override any CSS
//   const styles = {
//     container: {
//       position: 'fixed' as const,
//       bottom: 0,
//       left: 0,
//       right: 0,
//       zIndex: 99999,
//       padding: '24px',
//       pointerEvents: 'none' as const,
//     },
//     wrapper: {
//       maxWidth: '1000px',
//       margin: '0 auto',
//       pointerEvents: 'auto' as const,
//     },
//     card: {
//       backgroundColor: '#ffffff',
//       borderRadius: '16px',
//       boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
//       border: '1px solid #e2e8f0',
//       overflow: 'hidden',
//     },
//     mainContent: {
//       padding: '32px',
//     },
//     header: {
//       display: 'flex',
//       alignItems: 'flex-start',
//       gap: '16px',
//       marginBottom: '24px',
//     },
//     iconBox: {
//       flexShrink: 0,
//       width: '48px',
//       height: '48px',
//       background: 'linear-gradient(to bottom right, #3b82f6, #9333ea)',
//       borderRadius: '12px',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     textContainer: {
//       flex: 1,
//       minWidth: 0,
//     },
//     title: {
//       color: '#0f172a',
//       fontSize: '20px',
//       fontWeight: 500,
//       marginBottom: '8px',
//       lineHeight: '1.5',
//     },
//     description: {
//       color: '#475569',
//       fontSize: '14px',
//       lineHeight: '1.5',
//       margin: 0,
//     },
//     closeButton: {
//       flexShrink: 0,
//       width: '32px',
//       height: '32px',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       color: '#94a3b8',
//       backgroundColor: 'transparent',
//       border: 'none',
//       borderRadius: '8px',
//       cursor: 'pointer',
//       transition: 'all 0.2s',
//     },
//     closeButtonHover: {
//       color: '#475569',
//       backgroundColor: '#f1f5f9',
//     },
//     buttonContainer: {
//       display: 'flex',
//       flexDirection: 'column' as const,
//       gap: '12px',
//     },
//     primaryButton: {
//       flex: 1,
//       padding: '12px 24px',
//       background: 'linear-gradient(to right, #3b82f6, #9333ea)',
//       color: '#ffffff',
//       border: 'none',
//       borderRadius: '12px',
//       cursor: 'pointer',
//       fontSize: '16px',
//       fontWeight: 500,
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       gap: '8px',
//       transition: 'all 0.2s',
//       boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.25)',
//     },
//     secondaryButton: {
//       flex: 1,
//       padding: '12px 24px',
//       backgroundColor: '#f1f5f9',
//       color: '#334155',
//       border: 'none',
//       borderRadius: '12px',
//       cursor: 'pointer',
//       fontSize: '16px',
//       fontWeight: 500,
//       transition: 'all 0.2s',
//     },
//     outlineButton: {
//       flex: 1,
//       padding: '12px 24px',
//       backgroundColor: 'transparent',
//       color: '#334155',
//       border: '2px solid #e2e8f0',
//       borderRadius: '12px',
//       cursor: 'pointer',
//       fontSize: '16px',
//       fontWeight: 500,
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       gap: '8px',
//       transition: 'all 0.2s',
//     },
//     settingsContent: {
//       padding: '32px',
//     },
//     settingsHeader: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       marginBottom: '24px',
//     },
//     settingsTitle: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '12px',
//     },
//     settingsTitleText: {
//       color: '#0f172a',
//       fontSize: '20px',
//       fontWeight: 500,
//       margin: 0,
//       lineHeight: '1.5',
//     },
//     cookieList: {
//       display: 'flex',
//       flexDirection: 'column' as const,
//       gap: '16px',
//       marginBottom: '24px',
//     },
//     cookieItem: {
//       padding: '16px',
//       borderRadius: '12px',
//       border: '1px solid #e2e8f0',
//       display: 'flex',
//       alignItems: 'flex-start',
//       gap: '16px',
//     },
//     cookieItemNecessary: {
//       backgroundColor: '#f8fafc',
//     },
//     cookieItemRegular: {
//       backgroundColor: '#ffffff',
//     },
//     cookieIconBox: {
//       flexShrink: 0,
//       width: '40px',
//       height: '40px',
//       borderRadius: '8px',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     cookieContent: {
//       flex: 1,
//       minWidth: 0,
//     },
//     cookieHeader: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       marginBottom: '8px',
//       gap: '12px',
//     },
//     cookieTitle: {
//       color: '#0f172a',
//       fontSize: '16px',
//       fontWeight: 500,
//       margin: 0,
//       lineHeight: '1.5',
//     },
//     cookieDescription: {
//       color: '#475569',
//       fontSize: '14px',
//       margin: 0,
//       lineHeight: '1.5',
//     },
//     alwaysActiveBadge: {
//       flexShrink: 0,
//       padding: '4px 12px',
//       backgroundColor: '#dcfce7',
//       color: '#15803d',
//       borderRadius: '9999px',
//       fontSize: '12px',
//       fontWeight: 500,
//     },
//     toggle: {
//       flexShrink: 0,
//       position: 'relative' as const,
//       width: '48px',
//       height: '24px',
//       borderRadius: '9999px',
//       border: 'none',
//       cursor: 'pointer',
//       transition: 'background-color 0.2s',
//       padding: 0,
//       overflow: 'hidden',
//     },
//     toggleKnob: {
//       position: 'absolute' as const,
//       top: '2px',
//       left: '2px',
//       width: '20px',
//       height: '20px',
//       backgroundColor: '#ffffff',
//       borderRadius: '50%',
//       boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
//       transition: 'transform 0.2s',
//     },
//   };

//   const [hoveredButton, setHoveredButton] = useState<string | null>(null);

//   return (
//     <>
//       <style>{`
//         @media (min-width: 640px) {
//           .cookie-button-container {
//             flex-direction: row !important;
//           }
//           .cookie-button {
//             flex: initial !important;
//           }
//         }
//       `}</style>
//       <AnimatePresence>
//         {isVisible && (
//           <motion.div
//             initial={{ y: 100, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: 100, opacity: 0 }}
//             transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//             style={styles.container}
//           >
//             <div style={styles.wrapper}>
//               <div style={styles.card}>
//                 {!showSettings ? (
//                   <div style={styles.mainContent}>
//                     <div style={styles.header}>
//                       <div style={styles.iconBox}>
//                         <Cookie style={{ width: '24px', height: '24px', color: '#ffffff' }} />
//                       </div>
//                       <div style={styles.textContainer}>
//                         <h3 style={styles.title}>We value your privacy</h3>
//                         <p style={styles.description}>
//                           We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
//                           By clicking "Accept All", you consent to our use of cookies.
//                         </p>
//                       </div>
//                       <button
//                         onClick={() => setIsVisible(false)}
//                         style={{
//                           ...styles.closeButton,
//                           ...(hoveredButton === 'close' ? styles.closeButtonHover : {}),
//                         }}
//                         onMouseEnter={() => setHoveredButton('close')}
//                         onMouseLeave={() => setHoveredButton(null)}
//                         aria-label="Close"
//                       >
//                         <X style={{ width: '20px', height: '20px' }} />
//                       </button>
//                     </div>

//                     <div style={styles.buttonContainer} className="cookie-button-container">
//                       <button
//                         onClick={handleAcceptAll}
//                         style={{
//                           ...styles.primaryButton,
//                           ...(hoveredButton === 'accept' ? { boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.3)' } : {}),
//                         }}
//                         className="cookie-button"
//                         onMouseEnter={() => setHoveredButton('accept')}
//                         onMouseLeave={() => setHoveredButton(null)}
//                       >
//                         <Check style={{ width: '20px', height: '20px' }} />
//                         Accept All
//                       </button>
//                       <button
//                         onClick={handleRejectAll}
//                         style={{
//                           ...styles.secondaryButton,
//                           ...(hoveredButton === 'reject' ? { backgroundColor: '#e2e8f0' } : {}),
//                         }}
//                         className="cookie-button"
//                         onMouseEnter={() => setHoveredButton('reject')}
//                         onMouseLeave={() => setHoveredButton(null)}
//                       >
//                         Reject All
//                       </button>
//                       <button
//                         onClick={() => setShowSettings(true)}
//                         style={{
//                           ...styles.outlineButton,
//                           ...(hoveredButton === 'customize' ? { borderColor: '#cbd5e1', backgroundColor: '#f8fafc' } : {}),
//                         }}
//                         className="cookie-button"
//                         onMouseEnter={() => setHoveredButton('customize')}
//                         onMouseLeave={() => setHoveredButton(null)}
//                       >
//                         <Settings style={{ width: '20px', height: '20px' }} />
//                         Customize
//                       </button>
//                     </div>
//                   </div>
//                 ) : (
//                   <div style={styles.settingsContent}>
//                     <div style={styles.settingsHeader}>
//                       <div style={styles.settingsTitle}>
//                         <div style={{ ...styles.iconBox, width: '40px', height: '40px' }}>
//                           <Settings style={{ width: '20px', height: '20px', color: '#ffffff' }} />
//                         </div>
//                         <h3 style={styles.settingsTitleText}>Cookie Preferences</h3>
//                       </div>
//                       <button
//                         onClick={() => setShowSettings(false)}
//                         style={{
//                           ...styles.closeButton,
//                           ...(hoveredButton === 'back' ? styles.closeButtonHover : {}),
//                         }}
//                         onMouseEnter={() => setHoveredButton('back')}
//                         onMouseLeave={() => setHoveredButton(null)}
//                         aria-label="Back"
//                       >
//                         <X style={{ width: '20px', height: '20px' }} />
//                       </button>
//                     </div>

//                     <div style={styles.cookieList}>
//                       <div style={{ ...styles.cookieItem, ...styles.cookieItemNecessary }}>
//                         <div style={{ ...styles.cookieIconBox, backgroundColor: '#dcfce7' }}>
//                           <Shield style={{ width: '20px', height: '20px', color: '#16a34a' }} />
//                         </div>
//                         <div style={styles.cookieContent}>
//                           <div style={styles.cookieHeader}>
//                             <h4 style={styles.cookieTitle}>Necessary Cookies</h4>
//                             <div style={styles.alwaysActiveBadge}>Always Active</div>
//                           </div>
//                           <p style={styles.cookieDescription}>
//                             Essential for the website to function properly. These cannot be disabled.
//                           </p>
//                         </div>
//                       </div>

//                       <div style={{ ...styles.cookieItem, ...styles.cookieItemRegular }}>
//                         <div style={{ ...styles.cookieIconBox, backgroundColor: '#dbeafe' }}>
//                           <TrendingUp style={{ width: '20px', height: '20px', color: '#2563eb' }} />
//                         </div>
//                         <div style={styles.cookieContent}>
//                           <div style={styles.cookieHeader}>
//                             <h4 style={styles.cookieTitle}>Analytics Cookies</h4>
//                             <button
//                               onClick={() => togglePreference('analytics')}
//                               style={{
//                                 ...styles.toggle,
//                                 background: preferences.analytics 
//                                   ? 'linear-gradient(to right, #3b82f6, #9333ea)' 
//                                   : '#94a3b8',
//                               }}
//                             >
//                               <span
//                                 style={{
//                                   ...styles.toggleKnob,
//                                   transform: preferences.analytics ? 'translateX(24px)' : 'translateX(0)',
//                                 }}
//                               />
//                             </button>
//                           </div>
//                           <p style={styles.cookieDescription}>
//                             Help us understand how visitors interact with our website.
//                           </p>
//                         </div>
//                       </div>

//                       <div style={{ ...styles.cookieItem, ...styles.cookieItemRegular }}>
//                         <div style={{ ...styles.cookieIconBox, backgroundColor: '#f3e8ff' }}>
//                           <Users style={{ width: '20px', height: '20px', color: '#9333ea' }} />
//                         </div>
//                         <div style={styles.cookieContent}>
//                           <div style={styles.cookieHeader}>
//                             <h4 style={styles.cookieTitle}>Marketing Cookies</h4>
//                             <button
//                               onClick={() => togglePreference('marketing')}
//                               style={{
//                                 ...styles.toggle,
//                                 background: preferences.marketing 
//                                   ? 'linear-gradient(to right, #3b82f6, #9333ea)' 
//                                   : '#94a3b8',
//                               }}
//                             >
//                               <span
//                                 style={{
//                                   ...styles.toggleKnob,
//                                   transform: preferences.marketing ? 'translateX(24px)' : 'translateX(0)',
//                                 }}
//                               />
//                             </button>
//                           </div>
//                           <p style={styles.cookieDescription}>
//                             Used to deliver personalized advertisements relevant to you.
//                           </p>
//                         </div>
//                       </div>

//                       <div style={{ ...styles.cookieItem, ...styles.cookieItemRegular }}>
//                         <div style={{ ...styles.cookieIconBox, backgroundColor: '#fed7aa' }}>
//                           <Cookie style={{ width: '20px', height: '20px', color: '#ea580c' }} />
//                         </div>
//                         <div style={styles.cookieContent}>
//                           <div style={styles.cookieHeader}>
//                             <h4 style={styles.cookieTitle}>Preference Cookies</h4>
//                             <button
//                               onClick={() => togglePreference('preferences')}
//                               style={{
//                                 ...styles.toggle,
//                                 background: preferences.preferences 
//                                   ? 'linear-gradient(to right, #3b82f6, #9333ea)' 
//                                   : '#94a3b8',
//                               }}
//                             >
//                               <span
//                                 style={{
//                                   ...styles.toggleKnob,
//                                   transform: preferences.preferences ? 'translateX(24px)' : 'translateX(0)',
//                                 }}
//                               />
//                             </button>
//                           </div>
//                           <p style={styles.cookieDescription}>
//                             Remember your settings and preferences for a better experience.
//                           </p>
//                         </div>
//                       </div>
//                     </div>

//                     <div style={styles.buttonContainer} className="cookie-button-container">
//                       <button
//                         onClick={handleSavePreferences}
//                         style={{
//                           ...styles.primaryButton,
//                           ...(hoveredButton === 'save' ? { boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.3)' } : {}),
//                         }}
//                         className="cookie-button"
//                         onMouseEnter={() => setHoveredButton('save')}
//                         onMouseLeave={() => setHoveredButton(null)}
//                       >
//                         <Check style={{ width: '20px', height: '20px' }} />
//                         Save Preferences
//                       </button>
//                       <button
//                         onClick={handleAcceptAll}
//                         style={{
//                           ...styles.outlineButton,
//                           ...(hoveredButton === 'acceptAll' ? { borderColor: '#cbd5e1', backgroundColor: '#f8fafc' } : {}),
//                         }}
//                         className="cookie-button"
//                         onMouseEnter={() => setHoveredButton('acceptAll')}
//                         onMouseLeave={() => setHoveredButton(null)}
//                       >
//                         Accept All
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }








import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, Settings, X, Check, Shield, TrendingUp, Users } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  // Show popup after 5 seconds if no saved preferences
  useEffect(() => {
    const savedPrefs = localStorage.getItem('cookieConsent');
    if (savedPrefs) {
      const parsed = JSON.parse(savedPrefs);
      setPreferences(parsed);

      // If analytics already accepted, load GA
      if (parsed.analytics) enableAnalytics();
      return;
    }

    const timer = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Save preferences to localStorage and close popup
  const savePreferences = (newPrefs: CookiePreferences) => {
    setPreferences(newPrefs);
    localStorage.setItem('cookieConsent', JSON.stringify(newPrefs));
    setIsVisible(false);

    // Load GA only if analytics accepted
    if (newPrefs.analytics) enableAnalytics();
    else removeAnalyticsCookies();

    console.log('Saved cookie preferences:', newPrefs);
  };

  // Accept all cookies
  const handleAcceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    });
  };

  // Reject all except necessary
  const handleRejectAll = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    });
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return;
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  // Dynamically inject Google Analytics script
  const enableAnalytics = () => {
    if ((window as any).gtag) return; // already loaded

    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-WRXWLQPENS";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) { (window as any).dataLayer.push(args); }
      (window as any).gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'G-WRXWLQPENS', { anonymize_ip: true });
    };
  };

  // Remove GA cookies if user rejects
  const removeAnalyticsCookies = () => {
    const cookies = document.cookie.split("; ");
    cookies.forEach(c => {
      if (c.includes("_ga") || c.includes("_gid") || c.includes("_gat")) {
        const name = c.split("=")[0];
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
      }
    });
  };

  // Styles (keep your original design)
  const styles = {
    container: { position: 'fixed' as const, bottom: 0, left: 0, right: 0, zIndex: 99999, padding: '20px', pointerEvents: 'none' as const },
    wrapper: { maxWidth: '810px', margin: '0 auto', pointerEvents: 'auto' as const },
    card: { backgroundColor: 'rgba(26,26,26,0.85)', borderRadius: '18px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', border: '1px solid #1f1f1f', overflow: 'hidden' },
    mainContent: { padding: '27px' },
    header: { display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '20px' },
    iconBox: { flexShrink: 0, width: '43px', height: '43px', background: 'linear-gradient(135deg, #d4af37 0%, #f4e4c1 100%)', borderRadius: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
    textContainer: { flex: 1, minWidth: 0 },
    title: { color: '#ffffff', fontSize: '18px', fontWeight: 500, marginBottom: '7px', lineHeight: '1.4', letterSpacing: '-0.01em' },
    description: { color: '#a3a3a3', fontSize: '13px', lineHeight: 1.5, margin: 0 },
    closeButton: { flexShrink: 0, width: '29px', height: '29px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666666', backgroundColor: 'transparent', border: 'none', borderRadius: '7px', cursor: 'pointer', transition: 'all 0.2s' },
    closeButtonHover: { color: '#ffffff', backgroundColor: '#1f1f1f' },
    buttonContainer: { display: 'flex', flexWrap: 'wrap' as const, gap: '9px', justifyContent: 'center' },
    primaryButton: { flex: '1 1 auto', minWidth: '135px', padding: '11px 20px', background: 'linear-gradient(135deg, #d4af37 0%, #f4e4c1 100%)', color: '#0a0a0a', border: 'none', borderRadius: '11px', cursor: 'pointer', fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', transition: 'all 0.2s', boxShadow: '0 4px 14px rgba(212,175,55,0.3)' },
    secondaryButton: { flex: '1 1 auto', minWidth: '135px', padding: '11px 20px', backgroundColor: '#1f1f1f', color: '#ffffff', border: '1px solid #2a2a2a', borderRadius: '11px', cursor: 'pointer', fontSize: '14px', fontWeight: 500, transition: 'all 0.2s' },
    outlineButton: { flex: '1 1 auto', minWidth: '135px', padding: '11px 20px', backgroundColor: 'transparent', color: '#ffffff', border: '1px solid #2a2a2a', borderRadius: '11px', cursor: 'pointer', fontSize: '14px', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', transition: 'all 0.2s' },
    settingsContent: { padding: '27px' },
    settingsHeader: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' },
    settingsTitle: { display: 'flex', alignItems: 'center', gap: '11px' },
    settingsTitleText: { color: '#ffffff', fontSize: '18px', fontWeight: 500, margin: 0, lineHeight: '1.4' },
    cookieList: { display: 'flex', flexDirection: 'column' as const, gap: '11px', marginBottom: '20px' },
    cookieItem: { padding: '14px', borderRadius: '11px', border: '1px solid #1f1f1f', display: 'flex', alignItems: 'flex-start', gap: '14px', backgroundColor: '#0f0f0f' },
    cookieIconBox: { flexShrink: 0, width: '36px', height: '36px', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
    cookieContent: { flex: 1, minWidth: 0 },
    cookieHeader: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5px', gap: '11px' },
    cookieTitle: { color: '#ffffff', fontSize: '14px', fontWeight: 500, margin: 0, lineHeight: '1.4' },
    cookieDescription: { color: '#737373', fontSize: '12px', margin: 0, lineHeight: 1.5 },
    alwaysActiveBadge: { flexShrink: 0, padding: '3px 11px', backgroundColor: '#1a3a1a', color: '#4ade80', borderRadius: '9999px', fontSize: '11px', fontWeight: 500, border: '1px solid #2a4a2a' },
    toggle: { flexShrink: 0, position: 'relative' as const, width: '43px', height: '22px', borderRadius: '9999px', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s', padding: 0, overflow: 'hidden' },
    toggleKnob: { position: 'absolute' as const, top: '2px', left: '2px', width: '18px', height: '18px', backgroundColor: '#0a0a0a', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0,0,0,0.3)', transition: 'transform 0.2s' },
  };

  return (
    <>
      <style>{`
        @media (max-width: 639px) {
          .cookie-button-container { flex-direction: column !important; }
          .cookie-button { width: 100% !important; }
        }
      `}</style>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={styles.container}
          >
            <div style={styles.wrapper}>
              <div style={styles.card}>
                {!showSettings ? (
                  <div style={styles.mainContent}>
                    <div style={styles.header}>
                      <div style={styles.iconBox}>
                        <Cookie style={{ width: '22px', height: '22px', color: '#0a0a0a' }} />
                      </div>
                      <div style={styles.textContainer}>
                        <h3 style={styles.title}>We value your privacy</h3>
                        <p style={styles.description}>
                          We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                          By clicking "Accept All", you consent to our use of cookies.
                        </p>
                      </div>
                      <button onClick={() => setIsVisible(false)} style={{ ...styles.closeButton, ...(hoveredButton==='close'? styles.closeButtonHover:{}) }}
                        onMouseEnter={()=>setHoveredButton('close')} onMouseLeave={()=>setHoveredButton(null)} aria-label="Close">
                        <X style={{ width: '18px', height: '18px' }} />
                      </button>
                    </div>

                    <div style={styles.buttonContainer} className="cookie-button-container">
                      <button onClick={handleAcceptAll} style={styles.primaryButton}><Check /> Accept All</button>
                      <button onClick={handleRejectAll} style={styles.secondaryButton}>Reject All</button>
                      <button onClick={()=>setShowSettings(true)} style={styles.outlineButton}><Settings /> Customize</button>
                    </div>
                  </div>
                ) : (
                  <div style={styles.settingsContent}>
                    <div style={styles.settingsHeader}>
                      <div style={styles.settingsTitle}>
                        <div style={{...styles.iconBox, width:'36px', height:'36px'}}><Settings style={{width:'18px',height:'18px',color:'#0a0a0a'}}/></div>
                        <h3 style={styles.settingsTitleText}>Cookie Preferences</h3>
                      </div>
                      <button onClick={()=>setShowSettings(false)} style={styles.closeButton}><X style={{width:'18px',height:'18px'}}/></button>
                    </div>

                    <div style={styles.cookieList}>
                      {['analytics','marketing','preferences'].map((key:any)=>(
                        <div key={key} style={styles.cookieItem}>
                          <div style={{...styles.cookieIconBox, backgroundColor:'#1a2a3a'}}>
                            {key==='analytics' && <TrendingUp style={{width:'18px',height:'18px',color:'#60a5fa'}} />}
                            {key==='marketing' && <Users style={{width:'18px',height:'18px',color:'#c084fc'}} />}
                            {key==='preferences' && <Cookie style={{width:'18px',height:'18px',color:'#fb923c'}} />}
                          </div>
                          <div style={styles.cookieContent}>
                            <div style={styles.cookieHeader}>
                              <h4 style={styles.cookieTitle}>{key.charAt(0).toUpperCase()+key.slice(1)} Cookies</h4>
                              <button onClick={()=>togglePreference(key)} style={{...styles.toggle, background: preferences[key]? 'linear-gradient(135deg, #d4af37 0%, #f4e4c1 100%)':'#2a2a2a'}}>
                                <span style={{...styles.toggleKnob, transform: preferences[key]? 'translateX(21px)':'translateX(0)'}}/>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div style={styles.buttonContainer}>
                      <button onClick={()=>savePreferences(preferences)} style={styles.primaryButton}><Check /> Save Preferences</button>
                      <button onClick={handleAcceptAll} style={styles.outlineButton}>Accept All</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
