import { type ReactElement } from 'react';

export default function Header(): ReactElement {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed w-full bg-black/20 backdrop-blur-sm z-50" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-center items-center py-4 space-x-8" role="navigation" aria-label="Main navigation">
          <button 
            onClick={() => scrollToSection('systems')} 
            className="text-white hover:text-blue-400 transition-colors"
            aria-label="Navigate to teleprompter systems section"
          >
            Systems
          </button>
          <button 
            onClick={() => scrollToSection('faq')} 
            className="text-white hover:text-blue-400 transition-colors"
            aria-label="Navigate to frequently asked questions section"
          >
            FAQ
          </button>
          <button 
            onClick={() => scrollToSection('demo')} 
            className="text-white hover:text-blue-400 transition-colors"
            aria-label="Navigate to teleprompter demo section"
          >
            Try It
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-white hover:text-blue-400 transition-colors"
            aria-label="Navigate to contact information section"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}