import { type ReactElement } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Systems from './components/Systems';
import GeneralFAQ from './components/GeneralFAQ';
import TryItYourself from './components/TryItYourself';
import Footer from './components/Footer';

function App(): ReactElement {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Systems />
        <GeneralFAQ />
        <TryItYourself />
      </main>
      <Footer />
    </div>
  );
}

export default App;