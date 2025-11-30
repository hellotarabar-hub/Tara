import Router from './Router';
import {CookieConsent} from "./components/CookieConsent";

export default function App() {
  return (
    <>
      {/* Global cookie consent banner */}
      <CookieConsent />

      {/* Router handles the rest of your pages */}
      <Router />
    </>
  );
}
