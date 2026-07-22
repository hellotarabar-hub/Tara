// import Router from './Router';
// import {CookieConsent} from "./components/CookieConsent";


// export default function App() {
//   return (
//     <>
//       {/* Global cookie consent banner */}
//       <CookieConsent />

//       {/* Router handles the rest of your pages */}
//       <Router />
//     </>
//   );
// }
import { useEffect } from "react";
import Router from "./Router";
import { CookieConsent } from "./components/CookieConsent";
import { saveUTMsToStorage } from "./components/utm";


export default function App() {
  useEffect(() => {
    saveUTMsToStorage();
  }, []);

  return (
    <>
      <CookieConsent />
      <Router />
  
    </>
  );
}
// import Router from "./Router";
// import { CookieConsent } from "./components/CookieConsent";

// export default function App() {
//   return (
//     <>
//       {/* Global cookie consent banner */}
//       <CookieConsent />

//       {/* All routing is handled inside Router.tsx */}
//       <Router />
//     </>
//   );
// }