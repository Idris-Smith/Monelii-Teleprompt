import { type ReactElement } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer(): ReactElement {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-500" />
                <a href="tel:0780904829" className="text-gray-300 hover:text-white transition-colors">
                  078 090 4829
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-500" />
                <a href="mailto:info@teleprompter.co.za" className="text-gray-300 hover:text-white transition-colors">
                  info@teleprompter.co.za
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-500 mt-1" />
                <p className="text-gray-300">
                  Head Office:<br />
                  107 Beach Road,<br />
                  Hibernian Towers,<br />
                  Strand, 7140
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#systems" className="text-gray-300 hover:text-white transition-colors">
                  Our Systems
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#demo" className="text-gray-300 hover:text-white transition-colors">
                  Try It Yourself
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Teleprompter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}