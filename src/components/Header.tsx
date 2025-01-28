import { type ReactElement } from 'react';

export default function Header(): ReactElement {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed w-full bg-black/20 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-center items-center py-4 space-x-8">
          <button 
            onClick={() => scrollToSection('systems')} 
            className="text-white hover:text-blue-400 transition-colors"
          >
            Systems
          </button>
          <button 
            onClick={() => scrollToSection('faq')} 
            className="text-white hover:text-blue-400 transition-colors"
          >
            FAQ
          </button>
          <button 
            onClick={() => scrollToSection('demo')} 
            className="text-white hover:text-blue-400 transition-colors"
          >
            Try It
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-white hover:text-blue-400 transition-colors"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}