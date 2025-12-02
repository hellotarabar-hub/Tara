// import { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // Detect scroll to adjust navbar style
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
//     return () => { document.body.style.overflow = 'unset'; };
//   }, [mobileMenuOpen]);

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       const offset = 80;
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - offset;
//       window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
//     }
//     setMobileMenuOpen(false);
//   };

//   // Handle "TARA" click
//   const goToHero = () => {
//     if (window.location.pathname !== '/') {
//       window.location.href = '/#hero';
//     } else {
//       scrollToSection('hero');
//     }
//     setMobileMenuOpen(false);
//   };

//   const navLinks = [
//     { name: 'Benefits', id: 'benefits' },
//     { name: 'Function', id: 'function' },
//     { name: 'Nutrition', id: 'nutrition' },
//     { name: 'Secret', id: 'secret' },
//     { name: 'Join', id: 'cta' }
//   ];

//   return (
//     <>
//       {/* Navbar */}
//       <nav
//         className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 
//           ${scrolled 
//             ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-neutral-200/50' 
//             : 'bg-white/20 backdrop-blur-sm'
//           }`}
//       >
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="flex items-center justify-between h-20">
            
//             {/* Brand */}
//             <button
//               onClick={goToHero}
//               className="tracking-[0.3em] text-lg font-light text-black"
//               aria-label="Go to home"
//             >
//               TARA
//             </button>

//             {/* Desktop Links */}
//             <div className="hidden md:flex items-center space-x-12 text-black">
//               {navLinks.map((link) =>
//                 link.href ? (
//                   <a
//                     key={link.name}
//                     href={link.href}
//                     className="hover:opacity-60 tracking-wider text-black"
//                   >
//                     {link.name}
//                   </a>
//                 ) : (
//                   <button
//                     key={link.id}
//                     onClick={() => scrollToSection(link.id!)}
//                     className="hover:opacity-60 tracking-wider text-black"
//                   >
//                     {link.name}
//                   </button>
//                 )
//               )}
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="md:hidden z-50 text-black"
//               aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
//             >
//               {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="fixed inset-0 z-30 bg-white md:hidden">
//           <div className="flex flex-col items-center justify-center h-full px-6 space-y-8">
//             {navLinks.map((link) =>
//               link.href ? (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   onClick={() => setMobileMenuOpen(false)}
//                   className="text-black hover:text-neutral-600 text-2xl tracking-wider"
//                 >
//                   {link.name}
//                 </a>
//               ) : (
//                 <button
//                   key={link.id}
//                   onClick={() => scrollToSection(link.id!)}
//                   className="text-black hover:text-neutral-600 text-2xl tracking-wider"
//                 >
//                   {link.name}
//                 </button>
//               )
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }











import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const goToHero = () => {
    if (window.location.pathname !== '/') {
      window.location.href = '/#hero';
    } else {
      scrollToSection('hero');
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Benefits', id: 'benefits' },
        { name: 'Secret', id: 'secret' },
    { name: 'Function', id: 'function' },
    { name: 'Nutrition', id: 'nutrition' },
    { name: 'Join', id: 'cta' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 
          ${scrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-neutral-200/50' 
            : 'bg-white/20 backdrop-blur-sm'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            
            {/* Brand */}
            <button
              onClick={goToHero}
              className="tracking-[0.3em] text-lg font-light text-black"
              aria-label="Go to home"
            >
              TARA
            </button>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-12">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="hover:opacity-60 tracking-wider text-black"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden z-50 text-black"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-white md:hidden">
          <div className="flex flex-col items-center justify-center h-full px-6 space-y-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-black hover:text-neutral-600 text-2xl tracking-wider"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
