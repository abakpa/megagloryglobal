import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              <span className="text-accent">MEGA GLORY</span> GLOBAL RESOURCES
            </h3>
            <p className="text-sm leading-relaxed">
              Your trusted partner in quality medicine, baby diapers, and baby
              foods. Serving Nigerian families with care and dedication since
              2009.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-accent transition-colors">Products</Link></li>
              <li><Link to="/products/medicine" className="hover:text-accent transition-colors">Medicine</Link></li>
              <li><Link to="/products/baby-diapers" className="hover:text-accent transition-colors">Baby Diapers</Link></li>
              <li><Link to="/products/baby-foods" className="hover:text-accent transition-colors">Baby Foods</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-accent mt-1 shrink-0" />
                <span>Taraba State Office, Jalingo, Taraba State, Nigeria</span>
              </li>
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-accent mt-1 shrink-0" />
                <span>Imo State Office, Owerri, Imo State, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-accent shrink-0" />
                <a href="tel:+2347035792936" className="hover:text-accent transition-colors">+234 703 579 2936</a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-accent shrink-0" />
                <a href="mailto:info@megagloryglobal.com" className="hover:text-accent transition-colors">info@megagloryglobal.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-light mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} MEGA GLORY GLOBAL RESOURCES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
