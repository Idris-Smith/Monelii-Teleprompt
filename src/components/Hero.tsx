import { type ReactElement } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero(): ReactElement {
  const scrollToSystems = () => {
    document.getElementById('systems')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900" role="banner">
      <div className="absolute inset-0 bg-[url('https://i.ibb.co/NyHh715/riaaz-moosa-on-set-pic.jpg')] bg-cover bg-center opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" itemScope itemType="https://schema.org/Organization">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" itemProp="name">
          Professional Teleprompter Services in South Africa
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto" itemProp="description">
          Complete teleprompter services with skilled operators for video production, speeches, and events. We provide the equipment, setup, and expert operation for flawless presentations.
        </p>
        <button
          onClick={scrollToSystems}
          className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center mx-auto"
          aria-label="Explore our teleprompter systems"
        >
          Explore Our Systems
          <ChevronDown className="ml-2 h-5 w-5" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white opacity-50" aria-hidden="true" />
      </div>
    </section>
  );
}