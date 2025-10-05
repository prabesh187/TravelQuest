import React from 'react';
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Github,
  Linkedin,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-8 w-8 text-orange-500" />
              <div>
                <h3 className="text-xl font-bold">Aussie Travel Explorer</h3>
                <p className="text-sm text-gray-400">
                  by TravelQuest Adventures Ltd.
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Discover the beauty of Australia through our comprehensive travel
              guides, documentaries, and cultural experiences. Connecting the UK
              and Australia through unforgettable journeys.
            </p>
            <div className="text-sm text-gray-400">
              <p>A subsidiary of Global Journeys Inc.</p>
              <p>Registered in the United Kingdom</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <nav aria-label="Quick links">
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a
                    href="/travel-guides"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Travel Guides
                  </a>
                </li>
                <li>
                  <a
                    href="/documentaries"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Documentaries
                  </a>
                </li>
                <li>
                  <a
                    href="/cultural-tours"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Cultural Tours
                  </a>
                </li>
                <li>
                  <a
                    href="/travel-blogs"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Travel Blogs
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">
                  info@aussietravelexplorer.co.uk
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+4422334456</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-2">Follow Us</h5>
              <div className="flex space-x-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 text-gray-400 hover:text-orange-400 transition-colors" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5 text-gray-400 hover:text-orange-400 transition-colors" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-gray-400 hover:text-orange-400 transition-colors" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-gray-400 hover:text-orange-400 transition-colors" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="linkedin"
                >
                  <Linkedin className="h-5 w-5 text-gray-400 hover:text-orange-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 text-center md:text-left">
          <p>
            &copy; 2025 TravelQuest Adventures Ltd. All rights reserved. |{' '}
            <a href="/privacy-policy" className="hover:text-orange-400">
              Privacy Policy
            </a>{' '}
            |{' '}
            <a href="/terms-of-service" className="hover:text-orange-400">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
