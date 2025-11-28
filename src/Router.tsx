// import { useState, useEffect } from 'react';
// import HomePage from './HomePage';
// import DevilsTongue from './DevilsTongue';
// import ScienceResearch from './ScienceResearch';

// export default function Router() {
//   const [currentPath, setCurrentPath] = useState(window.location.pathname);

//   useEffect(() => {
//     // Handle browser back/forward buttons
//     const handlePopState = () => {
//       setCurrentPath(window.location.pathname);
//     };

//     window.addEventListener('popstate', handlePopState);
//     return () => window.removeEventListener('popstate', handlePopState);
//   }, []);

//   // Intercept link clicks
//   useEffect(() => {
//     const handleClick = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;
//       const anchor = target.closest('a');
      
//       if (anchor && anchor.href && anchor.getAttribute('href')?.startsWith('/')) {
//         e.preventDefault();
//         const newPath = anchor.getAttribute('href') || '/';
//         window.history.pushState({}, '', newPath);
//         setCurrentPath(newPath);
//         window.scrollTo({ top: 0, behavior: 'instant' });
//       }
//     };

//     document.addEventListener('click', handleClick);
//     return () => document.removeEventListener('click', handleClick);
//   }, []);

//   // Route matching
//   if (currentPath === '/devils-tongue') {
//     return <DevilsTongue />;
//   }

//   if (currentPath === '/science-research') {
//     return <ScienceResearch />;
//   }

//   return <HomePage />;
// }



// src/Router.tsx
import { useState, useEffect } from 'react';
import HomePage from './HomePage';
import DevilsTongue from './DevilsTongue';
import ScienceResearch from './ScienceResearch';
import Privacy from './Privacy';
import Terms from './Terms';

export default function Router() {
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);

  // Update path when using browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Intercept <a href="/..."> clicks to handle SPA navigation
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor && anchor.getAttribute('href')?.startsWith('/')) {
        e.preventDefault();
        const newPath = anchor.getAttribute('href') || '/';
        if (newPath !== currentPath) {
          window.history.pushState({}, '', newPath);
          setCurrentPath(newPath);
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [currentPath]);

  // ROUTES
  switch (currentPath) {
    case '/devils-tongue':
      return <DevilsTongue />;
    case '/science-research':
      return <ScienceResearch />;
    case '/privacy':
      return <Privacy />;
    case '/terms':
      return <Terms />;
    default:
      return <HomePage />;
  }
}
