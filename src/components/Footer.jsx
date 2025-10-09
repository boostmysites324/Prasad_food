import { Link } from "react-router-dom";
import { logo, navItems } from "../content/constant";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#800000] to-[#4a0000] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src={logo}
                alt="Prasad Food Divine Logo"
                className="h-24 mr-2 p-2 bg-white rounded-lg"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Experience the divine blend of traditional Indian flavors with
              modern culinary artistry. Every dish is crafted with devotion to
              provide you with an unforgettable dining experience.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF9933] flex items-center justify-center transition-all duration-300"
              >
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF9933] flex items-center justify-center transition-all duration-300"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF9933] flex items-center justify-center transition-all duration-300"
              >
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF9933] flex items-center justify-center transition-all duration-300"
              >
                <i className="fab fa-youtube text-lg"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-serif mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-[#FF9933]"></span>
            </h4>
            <ul className="space-y-3">
              {navItems.map(({ name, path }) => (
                <li key={name}>
                  <Link
                    to={`/${path}`}
                    className="text-gray-300 hover:text-[#FF9933] transition-colors flex items-center"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2"></i>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-serif mb-6 relative inline-block">
              Contact & Hours
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-[#FF9933]"></span>
            </h4>
            <div className="space-y-4">
              <p className="flex items-start text-gray-300">
                <i className="fas fa-map-marker-alt mt-1.5 mr-3 text-[#FF9933]"></i>
                <span>
                  123 Divine Street,
                  <br />
                  Culinary District, New Delhi
                </span>
              </p>
              <p className="flex items-center text-gray-300">
                <i className="fas fa-phone-alt mr-3 text-[#FF9933]"></i>
                <span>+91 98765 43210</span>
              </p>
              <p className="flex items-center text-gray-300">
                <i className="fas fa-envelope mr-3 text-[#FF9933]"></i>
                <span>info@prasadfooddivine.com</span>
              </p>
              <div className="pt-4">
                <p className="text-sm text-gray-300">
                  <span className="font-medium text-white">Mon - Fri:</span>{" "}
                  11:00 AM - 10:00 PM
                </p>
                <p className="text-sm text-gray-300">
                  <span className="font-medium text-white">Sat - Sun:</span>{" "}
                  10:00 AM - 11:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex justify-center gap-6 items-center">
            <div className="text-gray-300 text-sm">
              <p>
                &copy; {new Date().getFullYear()} Prasad Food Divine. All rights
                reserved.
              </p>
            </div>
            {/* <div className="flex items-center justify-start md:justify-end space-x-6">
              <a
                href="#"
                className="text-gray-300 hover:text-[#FF9933] text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#FF9933] text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#FF9933] text-sm transition-colors"
              >
                Sitemap
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
