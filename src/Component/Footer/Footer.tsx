// import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white px-5 xl:px-0 md:max-w-7xl mx-auto">
      <div  className="pt-15 pb-10"
      // className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10"
      >
        
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-purple-500 to-pink-500 text-[11px] font-bold text-white">
                DS
              </div>

              <h2 className="text-lg font-semibold text-gray-800">
                Dev<span className="text-pink-500">Stack</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-5">
              <a
                href="#"
                className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase text-gray-900">
              Product
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 transition hover:text-pink-500"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 transition hover:text-pink-500"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 transition hover:text-pink-500"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase text-gray-900">
              Company
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 transition hover:text-pink-500"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 transition hover:text-pink-500"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 transition hover:text-pink-500"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase text-gray-900">
              Legal
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 transition hover:text-pink-500"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 transition hover:text-pink-500"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 border-t border-gray-100 pt-7">
          <div className="flex flex-col gap-4 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
            
            <p>
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="#"
                className="transition hover:text-pink-500"
              >
                Privacy
              </a>

              <a
                href="#"
                className="transition hover:text-pink-500"
              >
                Terms
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;