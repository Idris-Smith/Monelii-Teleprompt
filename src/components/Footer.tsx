import { type ReactElement } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer(): ReactElement {
  return (
    <footer id="contact" className="bg-gray-900 text-white" role="contentinfo" itemScope itemType="https://schema.org/Organization">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6" itemProp="name">Contact Teleprompter South Africa</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-500" aria-hidden="true" />
                <a href="tel:+27780904829" className="text-gray-300 hover:text-white transition-colors" itemProp="telephone">
                  078 090 4829
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-500" aria-hidden="true" />
                <a href="mailto:info@teleprompter.co.za" className="text-gray-300 hover:text-white transition-colors" itemProp="email">
                  info@teleprompter.co.za
                </a>
              </div>
              <div className="flex items-start" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <MapPin className="h-5 w-5 mr-3 text-blue-500 mt-1" aria-hidden="true" />
                <p className="text-gray-300">
                  Head Office:<br />
                  <span itemProp="streetAddress">107 Beach Road,<br />
                  Hibernian Towers,<br />
                  </span>
                  <span itemProp="addressLocality">Strand</span>, <span itemProp="postalCode">7140</span>
                  <span itemProp="addressCountry" className="sr-only">South Africa</span>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Quick Navigation</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
              <li>
                <a href="#systems" className="text-gray-300 hover:text-white transition-colors">
                  Teleprompter Systems
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#demo" className="text-gray-300 hover:text-white transition-colors">
                  Teleprompter Demo
                </a>
              </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Teleprompter South Africa. All rights reserved. Professional teleprompter services with expert operators.
          </p>
        </div>
      </div>
    </footer>
  );
}